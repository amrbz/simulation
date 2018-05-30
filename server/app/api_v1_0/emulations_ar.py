# -*- coding: utf-8 -*-
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
# sys.setrecursionlimit(100000)

import uuid
import time
import csv
import re
import random
import hashlib
# import pywaves as pw
from crate import client
from random import randint
from numpy.random import choice

import datetime, threading


from . import api
from flask import jsonify, request, g, make_response
from errors import bad_request, validation_error, unavailable

from geopy import distance
import collections


class Block:
  def __init__(self):
    self.nonce = 0

  def mining_step(self):
    x = hashlib.sha256(str(randint(0,999999999)))
    m = re.search(r"^0{4}", str(x.hexdigest()))
    if m:
      # print self.nonce, str(x.hexdigest())
      return self.nonce
    else:
      self.nonce += 1
      return False
    

def random_pick(some_list, probabilities):
  x = random.uniform(0, 1)
  cumulative_probability = 0.0
  for item, item_probability in zip(some_list, probabilities):
      cumulative_probability += item_probability
      if x < cumulative_probability: break
  return item


def generate_nodes_trees(emulation_id):

  print '--> Generating nodes trees for emulation {emulation_id}'.format(
    emulation_id=emulation_id
  )

  connection = client.connect(g.db)
  cursor = connection.cursor()

  cursor.execute("""
    SELECT 
      n.id,
      c.id,  
      c.lat,
      c.lng
    FROM nodes n, cities c
    WHERE n.location_id = c.id
    AND n.emulation_id='{emulation_id}'
  """.format(
    emulation_id=emulation_id
  ))
  nodes = cursor.fetchall()

  print 'NODES QTY:', len(nodes)

  data = []
  for index, node in enumerate(nodes):
    tree = []
    for branch in nodes:
      if node[0] == branch[0]:
        continue

      tree.append({
        'node_id': branch[0],
        'distance': distance.distance((node[2], node[3]), (branch[2], branch[3])).km
      })

    sorted_tree = sorted(tree, key=lambda x: x['distance'])
    data.append({
      'id': node[0],
      'tree': sorted_tree
    })

    sql_tree = ''
    for el in sorted_tree:
      sql = """{{node_id='{node_id}',distance='{distance}'}}""".format(
        node_id=el['node_id'],
        distance=el['distance']
      )

      if sql_tree == '':
        sql_tree = sql
      else:
        sql_tree = ','.join((sql_tree, sql)) 

    print 'UPDATING'
    cursor.execute("""
      UPDATE nodes
      SET tree=[{tree}]
      WHERE id='{id}'
    """.format(
      id=node[0],
      tree=sql_tree
    ))

    print '--> Updated tree for node {node_id}. Nodes left: {nodes_left}'.format(node_id=node[0], nodes_left=(len(nodes)-index-1))

  cursor.close()
  connection.close()

  print '--> Generating nodes trees complete'
  

def generate_nodes(emulation_id):

  connection = client.connect(g.db)
  cursor = connection.cursor()

  cursor.execute("""SELECT id, probability FROM cities""")
  cities = cursor.fetchall()

  cursor.execute("""
    SELECT nodes_qty 
    FROM emulations
    WHERE id='{id}'
  """.format(
    id=emulation_id
  ))
  nodes_qty = cursor.fetchone()[0]

  print '--> Generating {nodes_qty} nodes'.format(nodes_qty=nodes_qty)

  location_ids = []
  probabilities = []
  for city in cities:
    location_ids.append(city[0])
    probabilities.append(city[1])

  total_hashrate = 0
  for _ in xrange(nodes_qty):
    location_id = random_pick(location_ids, probabilities)
    hashrate = randint(g.hashrate[0], g.hashrate[1])
    total_hashrate += hashrate

    cursor.execute("""
      INSERT INTO nodes(
        id,
        location_id,
        hashrate,
        emulation_id,
        stake)
      VALUES(
        '{id}',
        '{location_id}', 
        '{hashrate}',
        '{emulation_id}',
        '{stake}'
      )
    """.format(
      id = str(uuid.uuid4()),
      location_id = location_id,
      hashrate = hashrate,
      emulation_id=emulation_id,
      stake=randint(0,999999999)
    ))

  cursor.execute("""REFRESH TABLE nodes""")
  cursor.execute("""SELECT id, hashrate FROM nodes""")
  nodes = cursor.fetchall()

  # for index, node in enumerate(nodes):
  #   cursor.execute("""
  #     UPDATE nodes 
  #     SET probability='{prob}'
  #     WHERE id='{id}'
  #   """.format(
  #     id=node[0],
  #     prob=node[1]/total_hashrate
  #   ))
  
  cursor.close()
  connection.close()

  print '--> Generating nodes complete'

  generate_nodes_trees(emulation_id)
  

def pos_mine_block():
  print '\n--> POS Mining block'

  connection = client.connect(g.db)
  cursor = connection.cursor()

  cursor.execute("""
    SELECT id, probability 
    FROM nodes
    WHERE emulation_id='{emulation_id}'
  """.format(
    emulation_id=emulation_id
  ))
  nodes = cursor.fetchall()

  node_ids = []
  probabilities = []
  for node in nodes:
    node_ids.append(node[0])
    probabilities.append(node[1])  
  miner = random_pick(node_ids, probabilities)

  block_id = str(uuid.uuid4())
  block_created = float(time.time())

  cursor.execute("""
    INSERT INTO blocks (
      id,
      height,
      nonce,
      miner,
      created
    ) VALUES(
      '{id}',
      '{height}',
      '{nonce}',
      '{miner}',
      '{created}')
  """.format(
    id=block_id,
    height=1,
    nonce=1,
    miner=miner,
    created=str(int(block_created))
  ))

  cursor.execute("""
    UPDATE nodes 
    SET block_id='{block_id}', block_received={block_received}
    WHERE id='{id}'
  """.format(
    id=miner,
    block_id=block_id,
    block_received=block_created
  ))

  cursor.close()
  connection.close()

  print '--> Block mined by node {miner}'.format(miner=miner)



def pow_mine_block(emulation_id):
  print '\n--> PoW Mining block'
  connection = client.connect(g.db)
  cursor = connection.cursor()
  
  cursor.execute("""
    SELECT id, hashrate 
    FROM nodes
    WHERE emulation_id='{emulation_id}'
  """.format(
    emulation_id=emulation_id
  ))
  nodes = cursor.fetchall()

  cursor.execute("""
    SELECT block_freq, iterations
    FROM emulations
    WHERE id='{emulation_id}'
  """.format(
    emulation_id=emulation_id
  ))
  emulation_data = cursor.fetchone()
  block_freq = emulation_data[0]
  iterations = emulation_data[1]

  blocks = []
  init_time = int(time.time())
  total_time = 0
  total_hashrate = 0

  for node in nodes:
    print 'Node ' + node[0]
    for height in xrange(iterations):
      print '--> Height ' + str(height)
      block = Block()
      start_time = time.time()
      while not block.mining_step():
        continue

      nonce = vars(block)['nonce']
      block_created = time.time()
      time_diff = block_created - start_time
      total_time += time_diff
      total_hashrate += round(nonce/time_diff)
      
      print '--> Nonce: ' + str(nonce) + ' Time: ' + str(round(time_diff, 2)) + ' Hashrate: ' + str(int(nonce/time_diff))

      block_id=str(uuid.uuid4())
      cursor.execute("""
        INSERT INTO blocks(
          id,
          node_id,
          height,
          nonce
        ) VALUES(
          '{id}',
          '{node_id}',
          '{height}',
          '{nonce}')
      """.format(
        id=block_id,
        node_id=node[0],
        height=height,
        nonce=nonce
      ))

      blocks.append({
        'block_id': block_id,
        'node_id': node[0],
        'time_diff': time_diff
      })

    avg_time = round(total_time/len(nodes),2)
    scaling_factor = round(block_freq/avg_time,2)

    print '\n--> Mining complete'
    print 'Toral time: ' + str(round(total_time,2)) + ' sec; Total hashrate: ' + str(int(total_hashrate))
    print 'Average time:', avg_time, 'sec'
    print 'Scaling factor:', scaling_factor

    cursor.execute("""
      UPDATE emulations 
      SET scaling_factor='{scaling_factor}'
      WHERE id='{emulation_id}'
    """.format(
      scaling_factor=scaling_factor,
      emulation_id=emulation_id
    ))

    cursor.execute("""
      UPDATE nodes 
      SET hashrate=hashrate/{scaling_factor}
    """.format(
      scaling_factor=scaling_factor
    ))

    cursor.execute("""REFRESH TABLE nodes""")
    cursor.execute("""REFRESH TABLE blocks""")
    for block in blocks:
      block_creation_time = float(init_time + block['time_diff'] * scaling_factor)
      init_block = """{{id='{block_id}',prev_block=NULL,adopted={adopted}, adopted_from=NULL}}""".format(
        block_id=block['block_id'],
        adopted=block_creation_time
      )

      print 'Time diff', block['time_diff'] * scaling_factor, init_time + block['time_diff'] * scaling_factor

      cursor.execute("""
        UPDATE nodes 
        SET blocks=[{init_block}]
        WHERE id='{node_id}'
      """.format(
        node_id=block['node_id'],
        init_block=init_block
      ))

      cursor.execute("""
        UPDATE blocks
        SET created={block_created}
        WHERE id='{block_id}'
      """.format(
        block_id=block['block_id'],
        block_created=block_creation_time
      ))


  # print '\n--> Sendig block'
  # send_blocks(miner)



def send_blocks(nodes_ids):

  connection = client.connect(g.db)
  cursor = connection.cursor()

  miner = nodes_ids.pop(0)
  cursor.execute("""
    SELECT id, height, created
    FROM blocks
    WHERE node_id='{miner}'
  """.format(miner=miner))
  block = cursor.fetchone()

  cursor.execute("""
    SELECT n.tree, e.iterations
    FROM nodes n
    LEFT JOIN blocks b ON b.node_id = n.id
    LEFT JOIN emulations e ON n.emulation_id = e.id
    WHERE n.id='{miner}'
  """.format(
    miner=miner
  ))
  nodes_data = cursor.fetchone()
  tree = nodes_data[0]
  iterations = nodes_data[1]

  print '--> Node ID: ' + str(miner) + ' Nodes left: ' + str(len(nodes_ids))

  for node in tree:
    node_id = node['node_id']
    distance = 10 if node['distance'] == 0 else node['distance']

    cursor.execute("""
      SELECT blocks, emulation_id
      FROM nodes
      WHERE id='{node_id}'
    """.format(
      node_id=node_id
    ))
    res=cursor.fetchone()
    blocks = res[0]
    emulation_id = res[1]
    last_block = blocks[-1]

    cursor.execute("""
      SELECT height, created
      FROM blocks
      WHERE id='{block_id}'
    """.format(
      block_id=last_block['id']
    ))
    res=cursor.fetchone()
    last_block_height = res[0]
    last_block_created = res[1]
    last_block_adopted = last_block['adopted']
    last_block_adopted_from = last_block['adopted_from']

    cursor.execute("""
      SELECT ping, validation_time
      FROM emulations
      WHERE id='{emulation_id}'
    """.format(
      emulation_id=emulation_id
    ))
    res = cursor.fetchone()
    ping = res[0]
    validation_time = res[1]

    diff = distance * ping + validation_time
    receive_timestamp = block[2] + int(diff * 1000)

    if last_block_height < block[1]:
      print '--> Adding new block to ' + node_id + ' on height ' + block[1]
      blocks.append({
        'id': block[0],
        'adopted': receive_timestamp,
        'adopted_from': miner,
        'prev_block': blocks[-2]['id']
      })
    elif last_block_height == block[1]:
      last_block_timestamp = last_block_adopted if last_block_adopted else last_block_created
      if receive_timestamp < last_block_timestamp:
        print '--> Updating last block of ' + node_id + ' on height ' + str(block[1])
        blocks[-1] = {
          'id': block[0],
          'adopted': receive_timestamp,
          'adopted_from': miner,
          'prev_block': None if len(blocks) == 1 else blocks[-2]['id']
        }
    
    sql_blocks = ''
    for el in blocks:
      if el['prev_block'] == None:
        sql = """{{id='{block_id}',prev_block=NULL,adopted={adopted}, adopted_from={adopted_from}}}""".format(
          block_id=el['id'],
          adopted=el['adopted'],
          adopted_from='\'' + el['adopted_from'] + '\'' if el['adopted_from'] else 'NULL'
        )
      else:
        sql = """{{id='{block_id}',prev_block='{prev_block}',adopted={adopted}, adopted_from={adopted_from}}}""".format(
          block_id=el['id'],
          prev_block=el['prev_block'],
          adopted=el['adopted'],
          adopted_from='\'' + el['adopted_from'] + '\'' if el['adopted_from'] else 'NULL'
        )

      if sql_blocks == '':
        sql_blocks = sql
      else:
        sql_blocks = ','.join((sql_blocks, sql)) 

    cursor.execute("""
      UPDATE nodes
      SET blocks=[{blocks}]
      WHERE id='{node_id}'
    """.format(
      node_id=node_id,
      blocks=sql_blocks
    ))
    
        

    # and last_block_height == block

    # block_created if block_adopted == None else block_adopted

    

    # if not block_received or receive_timestamp < block_received:
    #   cursor.execute("""
    #     UPDATE nodes 
    #     SET block_id='{block_id}', block_received={block_received}
    #     WHERE id='{id}'
    #   """.format(
    #     block_id=block_id,
    #     block_received=receive_timestamp,
    #     id=node_id
    #   ))

  
  if len(nodes_ids) == 0:
    print '--> Sendig block complete'
    return True

  cursor.execute("""REFRESH TABLE nodes""")
  # miner = nodes_ids.pop(0)
  
  cursor.close()
  connection.close()

  # send_blocks(nodes_ids)



@api.route('/emulations', methods=['POST'])
def create_emulation():
  
  connection = client.connect(g.db)
  cursor = connection.cursor()

  print '\n****** INIT EMULATION ******\n'

  emulation_id = str(uuid.uuid4())
  emulation_created = str(int(time.time()))

  print '--> Emulation ID:', emulation_id
  cursor.execute("""
    INSERT INTO emulations(
      id,
      nodes_qty,
      ping,
      validation_time,
      block_size,
      block_freq,
      bandwidth,
      iterations,
      with_forks,
      description,
      created
    ) VALUES(
      '{id}',
      '{nodes_qty}',
      '{ping}',
      '{validation_time}',
      '{block_size}',
      '{block_freq}',
      '{bandwidth}',
      '{iterations}',
      '{with_forks}',
      '{description}',
      '{created}')
  """.format(
    id=emulation_id,
    nodes_qty=request.json['nodesQty'],
    ping=request.json['ping'],
    validation_time=request.json['validationTime'],
    block_size=request.json['blockSize'],
    block_freq=request.json['blockFreq'],
    bandwidth=request.json['bandwidth'],
    iterations=request.json['iterations'],
    with_forks=request.json['withForks'],
    description=request.json['description'],
    created=emulation_created
  ))  

  cursor.execute("""REFRESH TABLE emulations""")
  generate_nodes(emulation_id)


  # for index in xrange(int(request.json['iterations'])):
  #   block_id = str(uuid.uuid4())
  #   block_created = float(time.time())

  #   cursor.execute("""
  #     INSERT INTO blocks (
  #       id,
  #       height,
  #       nonce,
  #       emulation_id,
  #       created
  #     ) VALUES(
  #       '{id}',
  #       '{height}',
  #       '{nonce}',
  #       '{emulation_id}',
  #       '{created}')
  #   """.format(
  #     id=block_id,
  #     height=index + 1,
  #     nonce=randint(0,999999999),
  #     emulation_id=emulation_id,
  #     created=str(int(block_created))
  #   ))

  # cursor.execute("""REFRESH TABLE blocks""")
    # cursor.execute("""
    #   INSERT INTO iterations (
    #     id,
    #     emulation_id,
    #     nonce
    #   ) VALUES (
    #     '{id}',
    #     '{emulation_id}',
    #     '{nonce}')
    # """.format(
    #   id=str(uuid.uuid4()),
    #   emulation_id=emulation_id,
    #   nonce=randint(0,999999999)
    # ))
  


  pow_mine_block(emulation_id)

  cursor.execute("""REFRESH TABLE nodes""")
  cursor.execute("""REFRESH TABLE blocks""")
  cursor.execute("""REFRESH TABLE emulations""")

  cursor.execute("""
    SELECT id 
    FROM nodes
    WHERE emulation_id='{emulation_id}'
  """.format(
    emulation_id=emulation_id
  ))
  nodes = cursor.fetchall()
  nodes_ids = [node[0] for node in nodes]

  print '\n--> Sendig blocks'
  send_blocks(nodes_ids)

  cursor.close()
  connection.close()
  

  data = {
    'id': emulation_id,
    'nodesQty': request.json['nodesQty'],
    'ping': request.json['ping'],
    'validationTime': request.json['validationTime'],
    'blockSize': request.json['blockSize'],
    'blockFreq': request.json['blockFreq'],
    'description': request.json['description'],
    'bandwidth': request.json['bandwidth'],    
    'iterations': request.json['iterations'],    
    'withForks': request.json['withForks'],    
    'created': emulation_created
  }


  print '\n--> Emulation complete\n'

  response = make_response(jsonify(data))
  response.status_code = 201
  return response


@api.route('/emulations', methods=['GET'])
def get_emulations():

  connection = client.connect(g.db)
  cursor = connection.cursor()

  cursor.execute("""
    SELECT 
      id, 
      nodes_qty,
      block_size,
      block_freq,
      bandwidth,
      ping,
      validation_time,
      description,
      iterations,
      with_forks,
      created
    FROM emulations
    ORDER BY created DESC
  """)
  emulations = cursor.fetchall()

  cursor.close()
  connection.close()

  if len(emulations) == 0:
    return ('', 204)

  data = []
  for emulation in emulations:
    data.append({
      'id': emulation[0],
      'nodesQty': emulation[1],
      'blockSize': emulation[2],
      'blockFreq': emulation[3],
      'bandwidth': emulation[4],
      'ping': emulation[5],
      'validationTime': emulation[6],
      'description': emulation[7],
      'iterations': emulation[8],
      'withForks': emulation[9],
      'created': emulation[10]
    })

  response = make_response(jsonify(data))
  response.status_code = 200
  return response


@api.route('/emulations/<emulation_id>', methods=['GET'])
def get_emulation(emulation_id):

  connection = client.connect(g.db)
  cursor = connection.cursor()


  # id string,
  # location_id string,
  # hashrate int,
  # tree array(object as (
  #   node_id string,
  #   distance float
  # )),
  # blocks array(object as (
  #   id string,
  #   prev_block string,
  #   adopted TIMESTAMP,
  #   adopted_from string
  # )),
  # emulation_id string,
  # stake INT

  print '\n--> Fetching emulation data'
  cursor.execute("""REFRESH TABLE nodes""")
  cursor.execute("""
    SELECT 
      n.id,  
      n.blocks,
      c.id,
      c.city,
      c.country,
      c.lat,
      c.lng,
      c.pop
    FROM nodes n
    LEFT JOIN cities c ON n.location_id = c.id
    WHERE n.emulation_id='{emulation_id}'
  """.format(
    emulation_id=emulation_id
  ))
  nodes = cursor.fetchall()

  blocks_data = []
  for node in nodes:
    blocks = node[1]
    for block in blocks:
      cursor.execute("""
        SELECT 
          b.id,
          b.height,
          b.nonce,
          b.created
        FROM blocks b
        WHERE b.id='{block_id}'
      """.format(
        block_id=block['id']
      ))
      block_data = cursor.fetchone()
      blocks_data.append({
        'block': {
          'id': block_data[0],
          'height': block_data[1],
          'nonce': block_data[2],
          'prev_block': block['prev_block'],
          'adopted_from': block['adopted_from'],
          'adopted': block['adopted'],
          'creted': block_data[3]
        },
        'node': {
          'id': node[0]
        },
        'location': {
          'id': node[2],
          'city': node[3],
          'country': node[4],
          'lat': node[5],
          'lng': node[6],
          'pop': node[7]
        }
       
      })

  blocks_sorted = sorted(blocks_data, key=lambda x: x['block']['adopted'])

  # print '--> Done'
  
  # # nodes_data = []
  # # for node in nodes:
  # #   nodes_data.append({
  # #     'id': node[0],
  # #     'block': {
  # #       'received': node[1],
  # #       'id': node[2],
  # #       'height': node[3],
  # #       'nonce': node[4],
  # #       'miner': node[5],
  # #       'created': node[6]
  # #     },
  # #     'city': {
  # #       'id': node[7],
  # #       'name': node[8],
  # #       'country': node[9],
  # #       'lat': node[10],
  # #       'lng': node[11],
  # #       'pop': node[12]
  # #     }
  # #   })

  
  cursor.execute("""
    SELECT 
      id, 
      nodes_qty,
      block_size,
      block_freq,
      bandwidth,
      ping,
      validation_time,
      description,
      iterations,
      with_forks,
      created
    FROM emulations
    WHERE id='{emulation_id}'
  """.format(
    emulation_id=emulation_id
  ))
  emulation = cursor.fetchone()

  
  emulation_data = {
    'id': emulation[0],
    'nodesQty': emulation[1],
    'blockSize': emulation[2],
    'blockFreq': emulation[3],
    'bandwidth': emulation[4],    
    'ping': emulation[5],
    'validationTime': emulation[6],
    'description': emulation[7],
    'iterations': emulation[8],
    'withForks': emulation[9],
    'created': emulation[10]
  }

  cursor.close()
  connection.close()

  data = {
    'emulation': emulation_data,
    'blocks': blocks_sorted
    # 'nodes': nodes_data
  }

  response = make_response(jsonify(data))
  response.status_code = 200
  return response




@api.route('/emulations/<emulation_id>', methods=['DELETE'])
def delete_emulation(emulation_id):
  
  print '\n--> Deleting Emulation ID:', emulation_id

  connection = client.connect(g.db)
  cursor = connection.cursor()
  try:
      cursor.execute("""
        SELECT id FROM nodes
        WHERE emulation_id='{emulation_id}'
      """.format(emulation_id=emulation_id))
      nodes = cursor.fetchall()
      nodes_ids = '\'' + '\',\''.join([str(node[0]) for node in nodes]) + '\''

      cursor.execute("""
        DELETE FROM nodes
        WHERE emulation_id='{emulation_id}'
      """.format(emulation_id=emulation_id))

      cursor.execute("""
        DELETE FROM blocks
        WHERE node_id IN ({nodes_ids})
      """.format(nodes_ids=nodes_ids))

      cursor.execute("""
        DELETE FROM emulations
        WHERE id='{emulation_id}'
      """.format(emulation_id=emulation_id))

  except Exception, error:
      return bad_request(error)
  finally:
      cursor.close()
      connection.close()

  print '--> Deleted all data'

  return ('', 204)


@api.route('/save-cities', methods=['GET'])
def save_cities_to_db():
  connection = client.connect(g.db)
  cursor = connection.cursor()
  
  with open('cities.csv', 'rb') as csvfile:
    reader = csv.DictReader(csvfile)
    i = 1
    for row in reader:
      # cursor.execute("""
      #   INSERT INTO cities(
      #     id,
      #     city,
      #     city_ascii,
      #     lat,
      #     lng,
      #     pop,
      #     country,
      #     iso2,
      #     iso3,
      #     province)
      #   VALUES(
      #     '{id}',
      #     '{city}', 
      #     '{city_ascii}', 
      #     '{lat}', 
      #     '{lng}', 
          # '{pop}',
      #     '{country}',
      #     '{iso2}',
      #     '{iso3}',
      #     '{province}'
      #   )
      # """.format(
      #   id = str(uuid.uuid4()),
      #   city = ''.join(row['city']),
      #   city_ascii = ''.join(row['city_ascii']),
      #   lat = row['lat'],
      #   lng = row['lng'],
      #   pop = row['pop'],
      #   country = ''.join(row['country']),
      #   iso2 = ''.join(row['iso2']),
      #   iso3 = ''.join(row['iso3']),
      #   province = ''.join(row['province'])
      # ))
      i += 1


  cursor.close()
  connection.close()

