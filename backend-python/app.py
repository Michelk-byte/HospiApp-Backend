from flask import Flask, render_template, session, redirect
from flask_pymongo import PyMongo
from functools import wraps
from Users import *
# import pymongo

app = Flask(__name__)
app.secret_key = b'\xcc^\x91\xea\x17-\xd0W\x03\xa7\xf8J0\xac8\xc5'

# Database
app.config["MONGO_URI"] = "mongodb+srv://MichelKhoury:mobileapp@cluster0.zdacn.mongodb.net/hospiapp?retryWrites=true" \
                          "&w=majority "
mongo = PyMongo(app)


# Decorators
def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            return redirect('/')

    return wrap


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/dashboard/')
@login_required
def dashboard():
    return render_template('dashboard.html')


@app.route('/user/signup', methods=['POST'])
def signup():
    return User().signup()


@app.route('/user/signout')
def signout():
    return User().signout()


@app.route('/user/login', methods=['POST'])
def login():
    return User().login()


if __name__ == '__main__':
    app.run(debug=True)
