from flask import Flask, jsonify, request, session, redirect
from passlib.hash import pbkdf2_sha256
from app import mongo
import uuid


class User:
    def start_session(self, user):
        del user['password']
        session['logged_in'] = True
        session['user'] = user
        user['status'] = 200
        return jsonify(user), 200

    def signup(self):
        data = request.get_json(force=True)
        print(data)

        if data["pnumber"]:
            if not data["pnumber"][1:].replace(' ', '').isdigit():
                return jsonify({"message": "phone number contains letters!", "status": 400}), 200

            if data['pnumber'][0] != "+":
                return jsonify({"message": "phone number should start with +", "status": 400}), 200

        if data['password'] != data['verifypass']:
            return jsonify({"message": "you didnt verify your password", "status": 400}), 200

        # Create the user object
        user = {
            "_id": uuid.uuid4().hex,
            "name": data['name'],
            "email": data['email'],
            "password": data['password'],
            "pnumber": data['pnumber']
        }

        # Encrypt the password
        user['password'] = pbkdf2_sha256.encrypt(user['password'])

        # Check for existing email address
        if mongo.db.users.find_one({"email": user['email']}):
            return jsonify({"message": "Email address already in use", "status": 400}), 200

        if mongo.db.users.insert(user, w="majority"):
            return jsonify({"message": "Account Created!", "status": 200}), 200

        return jsonify({"message": "Signup failed", "status": 400}), 200

    def signout(self):
        session.clear()
        return redirect('/')

    def login(self):
        data = request.get_json(force=True)['action']['payload']
        print(data)
        user = mongo.db.users.find_one({
            "email": data['email']
        })

        if user and pbkdf2_sha256.verify(data['password'], user['password']):
            return self.start_session(user)

        return jsonify({"message": "Invalid login credentials", "status": 400}), 200
