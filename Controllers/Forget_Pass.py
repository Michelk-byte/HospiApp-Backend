from flask import request, jsonify, render_template
from passlib.handlers.pbkdf2 import pbkdf2_sha256
from utils.Mail_Sender import send_user_mail
from app import mongo


class Forget_Pass:
    def display(self, id_user):
        user = mongo.db.users.find_one({"_id": id_user})
        return render_template('home.html', var=user)

    def reset(self):
        if request.form['password'] == request.form['verifypassword']:
            mongo.db.users.update_one({
                "_id": request.form['id']
            }, {
                '$set': {
                    "password": pbkdf2_sha256.encrypt(request.form.get('password'))
                }
            })
            return {"message": "Password changed!"}, 200
        return jsonify({"error": "You didnt verify your old password"}), 400

    def send_mail(self):
        data = request.get_json(force=True)
        if len(data['email']) == 0:
            return jsonify({"message": "Insert your email in the email text box!", "status": 400}), 200
        user = mongo.db.users.find_one({"email": data['email']})
        print(user)
        if not user:
            return jsonify({"message": "You have never signed in with this account!", "status": 400}), 200
        try:
            send_user_mail(data['email'], request.base_url[:-14] + "changepassword/" + user['_id'])
            return jsonify({"message": "A link has been sent to your private email", "status": 200}), 200
        except:
            return jsonify({"message": "An Error Occurred!", "status": 400}), 200
