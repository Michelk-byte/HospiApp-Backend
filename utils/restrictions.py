from flask import jsonify
import re


def restrictions(data, profile, editprofile):
    pattern = re.compile(r"[$&+,:;=?#|'<>.^*()%!-]")

    def hasNumbers(inputString):
        return any(char.isdigit() for char in inputString)

    if profile:
        #firstname
        if len(data["firstname"]) == 0:
            return jsonify({"message": "Firstname empty", "status": 400}), 200

        if len(data["firstname"]) > 10:
            return jsonify({"message": "Firstname too long", "status": 400}), 200

        if len(pattern.findall(data['firstname'])) > 0:
            return jsonify({"message": "Firstname contains special characters", "status": 400}), 200

        if hasNumbers(data["firstname"]):
            return jsonify({"message": "Firstname contains numbers!", "status": 400}), 200

        #lastname
        if len(data["lastname"]) == 0:
            return jsonify({"message": "Lastname empty", "status": 400}), 200

        if len(data["lastname"]) > 10:
            return jsonify({"message": "Lastname too long", "status": 400}), 200

        if len(pattern.findall(data['lastname'])) > 0:
            return jsonify({"message": "Lastname contains special characters", "status": 400}), 200

        if hasNumbers(data["lastname"]):
            return jsonify({"message": "Lastname contains numbers!", "status": 400}), 200

        #username
        if len(data["username"]) == 0:
            return jsonify({"message": "Username empty", "status": 400}), 200

        if len(data["username"]) > 10:
            return jsonify({"message": "Username too long", "status": 400}), 200

        if len(pattern.findall(data['username'])) > 0:
            return jsonify({"message": "Username contains special characters", "status": 400}), 200


        #phone number
        if len(data["pnumber"]) == 0:
            return jsonify({"message": "Phone number empty", "status": 400}), 200

        if not data["pnumber"][1:].replace(' ', '').isdigit():
            return jsonify({"message": "phone number contains letters!", "status": 400}), 200

        if data['pnumber'][0] != "+":
            return jsonify({"message": "phone number should start with +", "status": 400}), 200

        # check email if valid
        if '@' not in data['email']:
            return jsonify({"message": "Invalid domain email", "status": 400}), 200
        domain = data['email'].split('@')
        if len(domain) != 2:
            return jsonify({"message": "Invalid domain email", "status": 400}), 200

        domain = domain[1]
        if domain not in ['gmail.com', 'hotmail.com', 'outlook.com']:
            return jsonify({"message": "Invalid domain email", "status": 400}), 200

        if len(pattern.findall(domain[0])) > 0:
            return jsonify({"message": "Email contains special characters", "status": 400}), 200

        if len(data["email"]) == 0:
            return jsonify({"message": "Email empty", "status": 400}), 200

        if len(data['location']) == 0:
            return jsonify({"message": "Location empty", "status": 400}), 200

        if hasNumbers(data['location']):
            return jsonify({"message": "Location contains numbers!", "status": 400}), 200

        pattern_tmp = re.compile(r"[$&+:;=?@#|'<>.^*()%!-]")
        if len(pattern_tmp.findall(data['location'])) > 0:
            return jsonify({"message": "Location contains special characters", "status": 400}), 200

        if len(data['location'].split(',')) == 1:
            return jsonify(
                {"message": "Location should be comma seperated ex: Lebanon, Beirut, Dbayeh....", "status": 400}), 200

    if editprofile:
        if data['password'] != data['verifypass']:
            return jsonify({"message": "you didnt verify your password", "status": 400}), 200

        if len(data["password"]) == 0:
            return jsonify({"message": "Password empty", "status": 400}), 200

        if len(data["verifypass"]) == 0:
            return jsonify({"message": "Verify Password empty", "status": 400}), 200
