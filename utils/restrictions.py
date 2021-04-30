from flask import jsonify


def restrictions(data, profile, editprofile):
    if profile:
        if len(data["name"]) == 0:
            return jsonify({"message": "Username empty", "status": 400}), 200

        def hasNumbers(inputString):
            return any(char.isdigit() for char in inputString)

        if hasNumbers(data["name"]):
            return jsonify({"message": "Username contains numbers!", "status": 400}), 200

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

        if len(data["email"]) == 0:
            return jsonify({"message": "Email empty", "status": 400}), 200

    if editprofile:
        if data['password'] != data['verifypass']:
            return jsonify({"message": "you didnt verify your password", "status": 400}), 200

        if len(data["password"]) == 0:
            return jsonify({"message": "Password empty", "status": 400}), 200

        if len(data["verifypass"]) == 0:
            return jsonify({"message": "Verify Password empty", "status": 400}), 200