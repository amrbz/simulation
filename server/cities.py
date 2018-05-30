
import csv

with open('cities.csv', 'rb') as csvfile:
  spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')

  i = 0
  reader = csv.DictReader(csvfile)
  for row in reader:
    city = row['city']
    city_ascii = row['city_ascii']
    lat = row['lat']
    lng = row['lng']
    pop = row['pop']
    country = row['country']
    iso2 = row['iso2']
    iso3 = row['iso3']
    province = row['province']

    i += 1
    if i == 7:
      break