import requests
from bs4 import BeautifulSoup
from collections import OrderedDict

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbsparta


headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://www.melon.com/chart/index.htm',headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

music_info = soup.select('tr.lst50 > td > div')

rank = 0
for music in music_info :
    title_el = music.select('.ellipsis.rank01')
    singer_el = music.select('span.checkEllipsis')
    if len(title_el) > 0:
        rank += 1
        title = title_el[0].text.rstrip()
        singer = singer_el[0].text.rstrip()

        doc = {
            'rank' : rank,
            'singer' : singer,
            'title' : title

        }
        db.Music_Melon.insert_one(doc)
