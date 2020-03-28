import requests
from bs4 import BeautifulSoup

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbsparta

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://music.bugs.co.kr/chart',headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

music_info = soup.select('table.list.trackList.byChart > tbody > tr')
rank = 0
for music in music_info:
    title_el = music.select('p.title')
    singer_el = music.select('p.artist')
    if len(title_el) > 0 :
        rank += 1
        title = title_el[0].text
        singer = singer_el[0].text
        doc = {
            'rank' : rank,
            'singer': singer,
            'title' : title.replace('\n',""),

        }
        db.Music_Bugs.insert_one(doc)