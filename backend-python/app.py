from flask import Flask, render_template, session, redirect
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin
from functools import wraps
from Users import *

# import pymongo

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
CORS(app, supports_credentials=True)


# # Decorators
# def login_required(f):
#     @wraps(f)
#     def wrap(*args, **kwargs):
#         if 'logged_in' in session:
#             return f(*args, **kwargs)
#         else:
#             return redirect('/')
#
#     return wrap

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


if __name__ == '__main__':
    app.run(debug=True)
