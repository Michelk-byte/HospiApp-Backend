from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin
from functools import wraps

''
# import pymongopip install flask-cors --upgrade

app = Flask(__name__)
# app.secret_key = b'\xcc^\x91\xea\x17-\xd0W\x03\xa7\xf8J0\xac8\xc5'
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SECRET_KEY'] = b'\xcc^\x91\xea\x17-\xd0W\x03\xa7\xf8J0\xac8\xc5'
app.config['JWT_ACCESS_LIFESPAN'] = {'hours': 24}
app.config['JWT_REFRESH_LIFESPAN'] = {'days': 30}

# Database
app.config["MONGO_URI"] = "mongodb+srv://MichelKhoury:mobileapp@cluster0.zdacn.mongodb.net/hospiapp?retryWrites=true" \
                          "&w=majority"
mongo = PyMongo(app)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

from Controllers.Users import *
from Controllers.Hospital import *
from Controllers.Lab import *


# # Decorators
def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            return jsonify({"message": "You need to authenticate first", "status": 400}), 200

    return wrap


@app.route('/user/signup', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def signup():
    return User().signup()


@app.route('/user/signout')
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def signout():
    return User().signout()


@app.route('/user/login', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def login():
    return User().login()


@app.route('/user/editprofile/<id>', methods=['PUT'])
@login_required
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def edit_profile(id):
    return User().edit_profile(id)


@app.route('/user/changepassword/<id>', methods=['PUT'])
@login_required
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def change_password(id):
    return User().changepassword(id)


@app.route('/user/hospital')
@login_required
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def hospital():
    return Hospital().getAllHospitals()


@app.route('/user/hospital/<id>')
@login_required
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def doctor_hs(id):
    return Hospital().getAllDoctors_by_Hospital(id)


@app.route('/user/doctor/<id>')
@login_required
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def doctor(id):
    return Hospital().getDoctor(id)


@app.route('/user/lab')
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def lab():
    return Lab().getAllLabs()


@app.route('/user/lab/<id>')
@login_required
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def test_lab(id):
    return Lab().getAllTests_by_Lab(id)


@app.route('/user/test/<id>')
@login_required
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def test(id):
    return Lab().getTest(id)


if __name__ == '__main__':
    app.run(debug=True)

#
# @app.route('/')
# def home():
#     return render_template('home.html')
#
#
# @app.route('/dashboard/')
# @login_required
# def dashboard():
#     return render_template('dashboard.html')
