import requests
from bs4 import BeautifulSoup

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbsparta

# 타겟 URL을 읽어서 HTML를 받아오고,
headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://movie.naver.com/movie/sdb/rank/rmovie.nhn?sel=pnt&date=20200303',headers=headers)

# # HTML을 BeautifulSoup이라는 라이브러리를 활용해 검색하기 용이한 상태로 만듦
# # soup이라는 변수에 "파싱 용이해진 html"이 담긴 상태가 됨
# # 이제 코딩을 통해 필요한 부분을 추출하면 된다.
soup = BeautifulSoup(data.text, 'html.parser')

#############################
# (입맛에 맞게 코딩)
#############################

movie_info = soup.select('table.list_ranking > tbody > tr')
rank = 0
for movie in movie_info:
    title_el = movie.select('a')
    point_el = movie.select('td.point')
    if len(title_el) > 0:
        rank += 1
        title = title_el[0].text
        point = point_el[0].text

        doc = {
            'rank': rank,
            'title': title,
            'star': point
        }
        print(doc)
        # db.movies.insert_one(doc)
        rank += 1






