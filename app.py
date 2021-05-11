from flask import Flask
from flask_cors import CORS, cross_origin
from flask_pymongo import PyMongo
from flask_mail import Mail

app = Flask(__name__)
# app.secret_key = b'\xcc^\x91\xea\x17-\xd0W\x03\xa7\xf8J0\xac8\xc5'
app.config['CORS_HEADERS'] = 'Content-Type'
# app.config['SECRET_KEY'] = b'\xcc^\x91\xea\x17-\xd0W\x03\xa7\xf8J0\xac8\xc5'
app.config['SECRET_KEY'] = b'\xcc^\x91\xea\x17-\xd0W\x03\xa7\xf8J0\xac8\xc5'
app.config['SESSION_COOKIE_HTTPONLY'] = True
app.config['REMEMBER_COOKIE_HTTPONLY'] = True
app.config['SESSION_COOKIE_SAMESITE'] = 'Strict'

#config mail
app.config.update(dict(
    DEBUG=True,
    MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT=587,
    MAIL_USE_TLS=True,
    MAIL_USE_SSL=False,
    MAIL_USERNAME='',
    MAIL_PASSWORD='',
))

mail = Mail(app)


# Database
app.config["MONGO_URI"] = "" # MongoDB URI
mongo = PyMongo(app)
cors = CORS(app, resources={r"/*": {"origins": "*"}})


from routes.Hospital import *
from routes.Lab import *
from routes.Users import *
from routes.Appointments import *
from routes.Forget_Pass import *
from routes.Predict import *

if __name__ == '__main__':
    app.run(debug=True)



