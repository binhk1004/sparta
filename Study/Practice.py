from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbsparta

point = db.movies.find_one({'title':'어벤져스: 엔드게임'})
db.movies.update_many({'star':point},{'$set': {'star': 0} })