from app import mongo
from utils.restrictions import restrictions
from flask import Flask, jsonify, request, session, redirect
from passlib.hash import pbkdf2_sha256
from dateutil import parser
import uuid


class User:
    def start_session(self, user):
        del user['password']
        session['logged_in'] = True
        session['user'] = user
        user = {"sid": user['_id'], 'status': 200}
        print(session)
        return jsonify(user), 200

    def signup(self):
        data = request.get_json(force=True)
        data['email'] = data['email'].lower().strip()
        print(data)

        # Check for restrictions
        if restrictions(data, True, True, True):
            return restrictions(data, True, True, True)

        # Create the user object
        user = {
            "_id": uuid.uuid4().hex,
            "username": data['username'],
            "firstname": data['firstname'],
            "lastname": data['lastname'],
            "email": data['email'],
            "password": data['password'],
            "pnumber": data['pnumber'],
            "height": data["height"],
            "weight": data["weight"],
            "date_of_birth": data["date_of_birth"],
            "location": data["location"],
            "bloodtype": data["bloodtype"],
            "gender": data['gender']
        }

        # Encrypt the password
        user['password'] = pbkdf2_sha256.encrypt(user['password'])

        # Check for existing email address
        if mongo.db.users.find_one({"email": user['email']}):
            return jsonify({"message": "Email address already in use", "status": 400}), 200

        # Check for existing username
        if mongo.db.users.find_one({"username": user['username']}):
            return jsonify({"message": "Username already in use", "status": 400}), 200

        if mongo.db.users.insert(user, w="majority"):
            return jsonify({"message": "Account Created!", "status": 200}), 200

        return jsonify({"message": "Signup failed", "status": 400}), 200

    def signout(self):
        session.clear()
        return "", 204

    def login(self):
        data = request.get_json(force=True)
        print(data)
        user_email = mongo.db.users.find_one({
            "email": data['name']
        })

        user_username = mongo.db.users.find_one({
            "username": data['name']
        })

        if user_username or user_email:
            user = user_username if user_username else user_email
            if pbkdf2_sha256.verify(data['password'], user['password']):
                return self.start_session(user)

        return jsonify({"message": "Invalid login credentials", "status": 400}), 200

    def get_credentials(self, id):
        user = mongo.db.users.find_one({
            "_id": id
        })
        user["status"] = 200
        birthdate = user['date_of_birth']
        birthdate = parser.parse(birthdate)
        birthdate = str(birthdate.month) + "/" + str(birthdate.day) + "/" + str(birthdate.year)
        del user['password']
        user['date_of_birth'] = birthdate
        return jsonify(user), 200

    def edit_profile(self, id):
        data = request.get_json(force=True)
        print(data)

        if restrictions(data, True, False, False):
            return restrictions(data, True, False, False)

        mongo.db.users.update_one({
            "_id": id
        }, {
            '$set': {
                "firstname": data['firstname'],
                "lastname": data['lastname'],
                "email": data['email'],
                "pnumber": data['pnumber'],
                "height": data["height"],
                "weight": data["weight"],
                "date_of_birth": data["date_of_birth"],
                "location": data["location"],
                "bloodtype": data["bloodtype"],
                "gender": data['gender']
            }
        })
        print(mongo.db.users.find_one({"_id": id}))

        return jsonify({"message": "Profile Updated", "status": 200}), 200

    def changepassword(self, id):
        data = request.get_json(force=True)

        if restrictions(data, False, True, False):
            return restrictions(data, False, True, False)

        user = mongo.db.users.find_one({
            "_id": id
        })
        old_password_user = user

        if pbkdf2_sha256.verify(data['oldpassword'], old_password_user['password']):
            if data['password'] == data['verifypass']:
                mongo.db.users.update_one({
                    "_id": id
                }, {
                    '$set': {
                        "password": pbkdf2_sha256.encrypt(data['password'])
                    }
                })
                print(user["email"])
                print(request.form.get('password'))
                return jsonify({"message": "Password Changed!!", "status": 200}), 200
            return jsonify({"message": "You didnt confirm your new password", "status": 400}), 200

        return jsonify({"message": "Old password Incorrect", "status": 400}), 200
