
CREATE TABLE cities (
  id string,
  city string,
  city_ascii string,
  lat float,
  lng float,
  pop float,
  country string,
  iso2 string,
  iso3 string,
  province string,
  probability float
);


-- CREATE TABLE nodes (
--   id string,
--   location_id string,
--   tree array(object as (
--     node_id string,
--     distance float
--   )),
--   blocks array(object as (
--     id string,
--     provider string,
--     adopted TIMESTAMP
--   )),
--   emulation_id string,
--   stake INT
-- );


CREATE TABLE nodes (
  id string,
  location_id string,
  tree array(object as (
    node_id string,
    distance float
  )),
  emulation_id string,
  stake INT
);


CREATE TABLE blocks (
  id string,
  node_id string,
  height int,
  nonce int,
  init_time TIMESTAMP,
  mining_time float,
  adopted TIMESTAMP,
  provider string
);


CREATE TABLE emulations (
  id string,
  nodes_qty int,
  ping float,
  validation_time float,
  block_size float,
  block_freq int,
  bandwidth float,
  iterations int,
  with_forks boolean,
  description string,
  scaling_factor float,
  created TIMESTAMP
);
