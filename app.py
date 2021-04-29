from flask import Flask
from flask_cors import CORS, cross_origin
from flask_pymongo import PyMongo

app = Flask(__name__)
# app.secret_key = b'\xcc^\x91\xea\x17-\xd0W\x03\xa7\xf8J0\xac8\xc5'
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SECRET_KEY'] = b'\xcc^\x91\xea\x17-\xd0W\x03\xa7\xf8J0\xac8\xc5'

# Database
app.config["MONGO_URI"] = "mongodb+srv://MichelKhoury:mobileapp@cluster0.zdacn.mongodb.net/hospiapp?retryWrites=true" \
                          "&w=majority"
mongo = PyMongo(app)
cors = CORS(app, resources={r"/*": {"origins": "*"}})


from routes.Hospital import *
from routes.Lab import *
from routes.Users import *
from routes.Appointments import *

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
