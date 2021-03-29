from flask import Flask, jsonify, request, session, redirect
from passlib.hash import pbkdf2_sha256
from app import mongo
import uuid


class User:
    def start_session(self, user):
        del user['password']
        session['logged_in'] = True
        session['user'] = user
        return jsonify(user), 200

    def signup(self):
        print(request.form)

        # Create the user object
        user = {
            "_id": uuid.uuid4().hex,
            "name": request.form.get('name'),
            "email": request.form.get('email'),
            "password": request.form.get('password')
        }

        # Encrypt the password
        user['password'] = pbkdf2_sha256.encrypt(user['password'])

        # Check for existing email address
        if mongo.db.users.find_one({"email": user['email']}):
            return jsonify({"error": "Email address already in use"}), 400

        if mongo.db.users.insert(user, w="majority"):
            return self.start_session(user)

        return jsonify({"error": "Signup failed"}), 400

    def signout(self):
        session.clear()
        return redirect('/')

    def login(self):
        data = request.get_json(force=True)
        user = mongo.db.users.find_one({
            "email": data['email']
        })

        if user and pbkdf2_sha256.verify(data['password'], user['password']):
            return self.start_session(user)

        return jsonify({"error": "Invalid login credentials"}), 401
