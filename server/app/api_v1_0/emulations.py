# -*- coding: utf-8 -*-
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
# sys.setrecursionlimit(100000)

import uuid
import time
import re
import random
import hashlib
import csv
from crate import client
from random import randint
from geopy import distance

from . import api
from flask import jsonify, request, g, make_response
from errors import bad_request, validation_error, unavailable
from utils import random_pick



class Emulation:
  def __init__(self):
    self.scaling_factor = None
    # int(request.json['iterations']) = int(request.json['iterations'])
     
  def init(self):
    connection = client.connect(g.db)
    cursor = connection.cursor()

    print '\n****** INIT EMULATION ******\n'

    emulation_start_time = time.time()
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
      iterations=int(request.json['iterations']),
      with_forks=request.json['withForks'],
      description=request.json['description'],
      created=emulation_created
    ))  

    cursor.execute("""REFRESH TABLE emulations""")
    
    nodes = Nodes()
    nodes_ids = nodes.generate_nodes(emulation_id)
    nodes.generate_trees(emulation_id)


    print '\n--> Starting mining'

    total_time = 0
    init_time = time.time()
    blocks_ids = []
    i = 0
    for height in xrange(int(request.json['iterations'])):
      for node_id in nodes_ids:
        i += 1
        blocks = Blocks(emulation_id)
        start_time = time.time()
        nonce = blocks.mine_block()
        end_time = time.time()

        mining_time = end_time - start_time
        total_time += mining_time

        # cursor.execute("""
        #   SELECT adopted FROM blocks
        #   WHERE node_id='{node_id}'
        #   ORDER BY height DESC
        #   LIMIT 1
        # """.format(
        #   node_id=node_id
        # ))
        # res = cursor.fetchone()
        # prev_block_adopted = None if not res else res[0] 
        
        block_id=str(uuid.uuid4())
        cursor.execute("""
          INSERT INTO blocks(
            id,
            node_id,
            height,
            nonce,
            init_time,
            mining_time,
            provider
          ) VALUES(
            '{id}',
            '{node_id}',
            '{height}',
            '{nonce}',
            {init_time},
            '{mining_time}',
            '{provider}')
        """.format(
          id=block_id,
          node_id=node_id,
          height=height,
          nonce=nonce,
          init_time=float(init_time),
          mining_time=mining_time,
          provider=node_id
        ))

        if height > 0:
          blocks_ids.append(block_id)
        cursor.execute("""REFRESH TABLE blocks""")

        # if last_block:
        #   # print 'LAST BLOCK ADOPTED', last_block['adopted'] 
        #   pass
        # else:
        #   pass

        # node_blocks.append({
        #   'id': block_id,
        #   'adopted': (last_block['adopted']/1000 + mining_time*1000) if last_block else (init_time + mining_time),
        #   'provider': node_id
        # })

        # sql_blocks = ''
        # for node_block in node_blocks:
        #   # print node_block
        #   # print node_block['adopted'], mining_time
        #   sql = """{{id='{block_id}',adopted={adopted}, provider='{provider}'}}""".format(
        #     block_id=node_block['id'],
        #     adopted=node_block['adopted'],
        #     provider=node_block['provider']
        #   )

        #   if sql_blocks == '':
        #     sql_blocks = sql
        #   else:
        #     sql_blocks = ','.join((sql_blocks, sql))

        # cursor.execute("""
        #   UPDATE nodes 
        #   SET blocks=[{sql_blocks}]
        #   WHERE id='{node_id}'
        # """.format(
        #   sql_blocks=sql_blocks,
        #   node_id=node_id
        # ))

        print '--> Nonce: ' + str(nonce) + ' ' + (12-len(str(nonce))) * '=' + ' Time: ' + str(round(mining_time, 2)) + ' Hashrate: ' + str(int(nonce/mining_time)) + ' Iteration: ' + str(i)

    avg_time = round(total_time/(len(nodes_ids)*int(request.json['iterations'])),2)
    # scaling_factor = round(int(request.json['blockFreq'])*int(request.json['iterations'])/avg_time,2)
    scaling_factor = round(int(request.json['blockFreq'])/avg_time,2)

    print '--> Mining complete. Avg time: ', avg_time, 'Scaling factor:', scaling_factor

    cursor.execute("""
      UPDATE emulations 
      SET scaling_factor='{scaling_factor}'
      WHERE id='{emulation_id}'
    """.format(
      scaling_factor=scaling_factor,
      emulation_id=emulation_id
    ))


    # (prev_block_adopted/1000 + mining_time*1000) if prev_block_adopted else (init_time + mining_time),


    for node_id in nodes_ids:
      cursor.execute("""REFRESH TABLE blocks""")    
      cursor.execute("""
        UPDATE blocks 
        SET mining_time=mining_time*{scaling_factor}*1000
        WHERE node_id='{node_id}'
      """.format(
        scaling_factor=scaling_factor,
        node_id=node_id
      ))

      for height in xrange(int(request.json['iterations'])):
        cursor.execute("""REFRESH TABLE blocks""")        
        cursor.execute("""
          SELECT id, init_time, mining_time, adopted
          FROM blocks
          WHERE node_id='{node_id}'
          AND height={height}
        """.format(
          node_id=node_id,
          height=height-1 if height > 0 else height
        ))
        prev_block_data = cursor.fetchone()

        adopted = prev_block_data[3] + prev_block_data[2] if height > 0 else prev_block_data[1] + prev_block_data[2]

        cursor.execute("""
          UPDATE blocks
          SET adopted={adopted}
          WHERE node_id='{node_id}'
          AND height={height}
        """.format(
          node_id=node_id,
          height=height,
          adopted=adopted/1000
        ))

        cursor.execute("""
          UPDATE blocks
          SET init_time={adopted}
          WHERE node_id='{node_id}'
          AND height={height}
        """.format(
          node_id=node_id,
          height=height+1,
          adopted=adopted/1000
        ))
        cursor.execute("""REFRESH TABLE blocks""")



    cursor.close()
    connection.close()


    print '\n--> Sending blocks\n'
    for height in xrange(int(request.json['iterations'])):
      blocks.send_blocks(height)
  

    data = {
      'id': emulation_id,
      'nodesQty': request.json['nodesQty'],
      'ping': request.json['ping'],
      'validationTime': request.json['validationTime'],
      'blockSize': request.json['blockSize'],
      'blockFreq': request.json['blockFreq'],
      'description': request.json['description'],
      'bandwidth': request.json['bandwidth'],    
      'iterations': int(request.json['iterations']),    
      'withForks': request.json['withForks'],  
      'scalingFactor': scaling_factor,  
      'created': emulation_created
    }



    print '\n--> Emulation complete in', int(time.time()-emulation_start_time), 'sec\n'

    response = make_response(jsonify(data))
    response.status_code = 201
    return response

  def get_emulations(self):
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

  def get_emulation(self, emulation_id):
    print '\n--> Fetching data for emulation id', emulation_id
    
    start_fetch_time = time.time()
    connection = client.connect(g.db)
    cursor = connection.cursor()
    
    cursor.execute("""
      SELECT 
        b.id,
        b.height, 
        b.adopted,
        b.provider, 
        b.node_id
      FROM blocks b, nodes n
      WHERE b.node_id=n.id
      AND n.emulation_id='{emulation_id}'
      ORDER BY adopted
    """.format(
      emulation_id=emulation_id
    ))
    blocks = cursor.fetchall()

    # r = lambda: random.randint(0,255)
    blocks_data = []
    for block in blocks:
      cursor.execute("""
        SELECT 
          c.id,
          c.city,
          c.country,
          c.lat,
          c.lng,
          c.pop
        FROM nodes n
        LEFT JOIN cities c ON n.location_id = c.id
        WHERE n.id='{node_id}'
      """.format(
        node_id=block[4]
      ))
      city = cursor.fetchone()

      blocks_data.append({
        'block': {
          'id': block[0],
          'height': block[1],
          'adopted': block[2],
          'provider': block[3],
          'nodeId': block[4]
        },
        'city': {
          'id': city[0],
          'name': city[1],
          'country': city[2],
          'lat': city[3],
          'lng': city[4],
          'pop': city[5]
        }
      })

  
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

    cursor.execute("""
      SELECT provider 
      FROM blocks b, nodes n
      WHERE b.node_id=n.id
      AND n.emulation_id='{emulation_id}'
      GROUP BY provider
    """.format(
      emulation_id=emulation_id
    ))
    providers = cursor.fetchall()

    r = lambda: random.randint(0,255)
    providers_data = {}
    for provider in providers:
      providers_data[str(provider[0])] = {}
      for height in xrange(emulation[8]):
        color = '%02X%02X%02X' % (r(),r(),r())
        providers_data[str(provider[0])][height] = color


    data = {
      'emulation': emulation_data,
      'blocks': blocks_data,
      'providers': providers_data
    }

    cursor.close()
    connection.close()

    print '--> Done in ', time.time()-start_fetch_time,'sec'

    response = make_response(jsonify(data))
    response.status_code = 200
    return response


  def delete_emulation(self, emulation_id):
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

    print '--> Deleted all emulation data'

    return ('', 204)

  def save_cities_to_db():
    connection = client.connect(g.db)
    cursor = connection.cursor()
  
    with open('cities.csv', 'rb') as csvfile:
      reader = csv.DictReader(csvfile)
      i = 1
      for row in reader:
        cursor.execute("""
          INSERT INTO cities(
            id,
            city,
            city_ascii,
            lat,
            lng,
            pop,
            country,
            iso2,
            iso3,
            province)
          VALUES(
            '{id}',
            '{city}', 
            '{city_ascii}', 
            '{lat}', 
            '{lng}', 
            '{pop}',
            '{country}',
            '{iso2}',
            '{iso3}',
            '{province}'
          )
        """.format(
          id = str(uuid.uuid4()),
          city = ''.join(row['city']),
          city_ascii = ''.join(row['city_ascii']),
          lat = row['lat'],
          lng = row['lng'],
          pop = row['pop'],
          country = ''.join(row['country']),
          iso2 = ''.join(row['iso2']),
          iso3 = ''.join(row['iso3']),
          province = ''.join(row['province'])
        ))
        i += 1

    cursor.close()
    connection.close()



class Nodes:
  def __init__(self):
    pass

  def generate_nodes(self, emulation_id):
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

    nodes_ids = []
    for _ in xrange(nodes_qty):
      location_id = random_pick(location_ids, probabilities)

      node_id = str(uuid.uuid4())
      cursor.execute("""
        INSERT INTO nodes(
          id,
          location_id,
          emulation_id)
        VALUES(
          '{id}',
          '{location_id}',
          '{emulation_id}'
        )
      """.format(
        id=node_id,
        location_id=location_id,
        emulation_id=emulation_id
      ))
      nodes_ids.append(node_id)

    cursor.execute("""REFRESH TABLE nodes""")
    
    cursor.close()
    connection.close()

    print '--> Generating nodes complete'
    return nodes_ids



  def generate_trees(self, emulation_id):
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

    print '--> Nodes qty:', len(nodes)

    data = []
    for index, node in enumerate(nodes):
      tree = []
      for branch in nodes:
        if node[0] == branch[0]: continue

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


class Blocks:
  def __init__(self, emulation_id):
    self.nonce = 0
    self.init_time = time.time()
    self.emulation_id = emulation_id

    connection = client.connect(g.db)
    cursor = connection.cursor()

    cursor.execute("""
      SELECT 
        ping, 
        validation_time, 
        iterations,
        bandwidth,
        block_size
      FROM emulations
      WHERE id='{emulation_id}'
    """.format(
      emulation_id=emulation_id
    ))
    res = cursor.fetchone()
    self.ping = res[0]
    self.validation_time = res[1]
    self.iterations = res[2]
    self.bandwidth = res[3]
    self.block_size = res[4]

    cursor.close()
    connection.close()


  def find_hash(self):
    x = hashlib.sha256(str(randint(0,999999999)))
    if re.search(r"^0{4}", str(x.hexdigest())):
      return self.nonce
    else:
      self.nonce += 1
      return False


  def mine_block(self):
    while not self.find_hash(): 
      continue
    return self.nonce


  def send_blocks(self, height, miners = None):

    connection = client.connect(g.db)
    cursor = connection.cursor()

    if miners == None:
      cursor.execute("""REFRESH TABLE nodes""")      
      cursor.execute("""
        SELECT n.id, n.tree
        FROM nodes n
        LEFT JOIN blocks b ON n.id=b.node_id
        WHERE emulation_id='{emulation_id}'
        AND height={height}
        ORDER BY b.mining_time
      """.format(
        emulation_id=self.emulation_id,
        height=height
      ))
      miners = cursor.fetchall()
    miner = miners.pop(0)

    cursor.execute("""REFRESH TABLE blocks""")
    cursor.execute("""
      SELECT id, adopted
      FROM blocks
      WHERE node_id='{miner_id}'
      AND height='{height}'
    """.format(
      miner_id=miner[0],
      height=height
    ))
    miner_block = cursor.fetchone()

    print '--> Init Time:', miner_block[1], 'Height', height, '\n'
    for node in miner[1]:
      node_id = node['node_id']
      distance = 10 if node['distance'] == 0 else node['distance']
      node_blocks = []

      cursor.execute("""
        SELECT count(provider)
        FROM blocks
        WHERE height='{height}'
        AND adopted<={adopted}
        GROUP BY provider
      """.format(
        height=height,
        adopted=miner_block[1]
      ))
      providers = cursor.fetchone()[0]

      # Oversubscription = max(1, fork_count * B_size / Network Bandwidth)

      network_factor = max(1, providers*self.block_size/self.bandwidth)
      # diff = (network_factor*self.block_size/self.bandwidth + distance*self.ping + self.validation_time) * 1000
      
      
      # network_factor = min(1, self.bandwidth/(self.block_size*providers))
      # network_factor = min(1, self.bandwidth/(self.block_size*providers))
      # print '--> Providers:', providers, 'Network factor:', network_factor

      # diff = ((self.block_size/self.bandwidth+distance/self.ping)/network_factor + self.validation_time) * 1000
      # print '--> DIFF:', diff, 'Network factor', network_factor
      # diff = (distance * self.ping/network_factor + self.validation_time) * 1000
      # diff = (distance * self.ping/(float(random.randint(40,100))/100) + self.validation_time) * 1000
      # print '--> Adopted:  ', int(adopted), 'Diff:', diff


      # diff = (network_factor*self.block_size/self.bandwidth + distance*self.ping + self.validation_time) * 1000
      propagation_delay = network_factor*self.block_size/self.bandwidth
      transmission_delay = distance*self.ping
      overall_delay = propagation_delay + transmission_delay + self.validation_time
      diff = overall_delay * 1000
      
      # print("propagation, transmission and validation: {:.1f} ({}%), {:.1f} ({}%), {:.1f} ({}%)".format(
      #     propagation_delay, int(100 * propagation_delay / overall_delay),
      #     transmission_delay, int(100 * transmission_delay / overall_delay),
      #     self.validation_time, int(100 * self.validation_time / overall_delay),
      # ))


      adopted = (miner_block[1] + diff)


      # cursor.execute("""REFRESH TABLE nodes""")      
      # for height in xrange(int(request.json['iterations'])):
      cursor.execute("""
        SELECT adopted
        FROM blocks
        WHERE node_id='{node_id}'
        AND height={height}
        ORDER BY node_id
      """.format(
        node_id=node_id,
        height=height
      ))
      saved_adopted_time = cursor.fetchone()[0]

      if adopted < saved_adopted_time:
        print '--> Updating block adoption time from', saved_adopted_time, 'to', int(adopted)
        cursor.execute("""REFRESH TABLE blocks""")
        cursor.execute("""
          UPDATE blocks
          SET 
            adopted={adopted},
            provider='{provider}'
          WHERE node_id='{node_id}'
          AND height={height} 
        """.format(
          adopted=adopted/1000,
          provider=miner[0],
          node_id=node_id,
          height=height
        ))
        cursor.execute("""
          UPDATE blocks
          SET init_time={adopted}
          WHERE node_id='{node_id}'
          AND height={height} 
        """.format(
          adopted=adopted/1000,
          node_id=node_id,
          height=height+1
        ))

    print '-' * 12
      

      # for block in blocks:
      #   cursor.execute("""
      #     SELECT id, height
      #     FROM blocks
      #     WHERE id='{block_id}'
      #   """.format(
      #     block_id=block['id']
      #   ))
      #   block_data = cursor.fetchone()

      #   if height == block_data[1]:
      #     if miner_block['adopted'] + diff < block['adopted']:
      #       print 'UPDATE NEEDED:', (miner_block['adopted'] + diff), block['adopted']
      #       # UPDATE BLOCK ADOPTION TIME WHERE SAME HEIGHT
      #       # DELETE NEXT BLOCKS

        


      # 1.Find block by key height
      # 2.Check if adopted time > than sended clock creation time +  diff
      # 3.


      # print '--> TIME', self.init_time, miner_block[1], self.init_time + miner_block[1]

      # if not blocks:
      #   node_blocks.append({
      #     'id': miner_block[0],
      #     'adopted': float(self.init_time + miner_block[1]),
      #     'provider': miner[0]
      #   })
      # else:
      #   last_block = blocks[-1]
      #   tm = self.init_time + miner_block[1]
      #   # if last_block['adopted'] < tm:
          
          
      # sql_blocks = ''
      # for el in node_blocks:
      #   sql = """{{id='{block_id}',adopted={adopted}, provider='{provider}'}}""".format(
      #     block_id=el['id'],
      #     adopted=el['adopted'],
      #     provider=el['provider']
      #   )

      #   if sql_blocks == '':
      #     sql_blocks = sql
      #   else:
      #     sql_blocks = ','.join((sql_blocks, sql))

      # if not blocks and sql_blocks:
      #   print '--> Updating'
      #   cursor.execute("""
      #     UPDATE nodes
      #     SET blocks=[{blocks}]
      #     WHERE id='{node_id}'
      #   """.format(
      #     node_id=node_id,
      #     blocks=sql_blocks
      #   ))



    cursor.close()
    connection.close()

    if len(miners) == 0:
      return True

    self.send_blocks(height, miners)





em = Emulation()
@api.route('/emulations', methods=['POST'])
def generate_rest():
  return em.init()

@api.route('/emulations', methods=['GET'])  
def get_emulations_rest():
  return em.get_emulations()

@api.route('/emulations/<emulation_id>', methods=['GET'])
def get_emulation_rest(emulation_id):
  return em.get_emulation(emulation_id)

@api.route('/emulations/<emulation_id>', methods=['DELETE'])
def delete_emulation_rest(emulation_id):
  return em.delete_emulation(emulation_id)

@api.route('/save-cities', methods=['GET'])
def save_cities_to_db_rest():
  return em.save_cities_to_db()



