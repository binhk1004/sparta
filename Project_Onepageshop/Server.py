from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

from pymongo import MongoClient           # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)
client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
db = client.dbsparta                      # 'dbsparta'라는 이름의 db를 만듭니다.

## HTML을 주는 부분
@app.route('/')
def home():
    return render_template('Project.html')

## API 역할을 하는 부분
@app.route('/order', methods=['POST'])
def order_start():
    name_receive = request.form['name_give']
    count_receive = request.form['count_give']
    address_receive = request.form['address_give']
    phone_receive = request.form['phone_give']

    info = {
        'name' : name_receive,
        'count' : count_receive,
        'address' : address_receive,
        'phone' : phone_receive
    }

    db.shopDB.insert_one(info)

    return jsonify({'result':'success', 'msg': '주문정보가 정상적으로 저장 되었습니다.'})


@app.route('/order', methods=['GET'])
def show_list():
    lists = list(db.shopDB.find({},{'_id':0}))
    return jsonify({'result': 'success', 'lists': lists})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5001, debug=True)