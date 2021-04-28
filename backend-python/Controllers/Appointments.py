from utils.importlib import *


class Appointment:
    def post_appointment_hospital(self):
        data = request.get_json(force=True)

        # check doctor availibility

        # check if another booked an appoitnment at the same time

        if mongo.db.appointment_hospital.insert(data, w="majority"):
            return jsonify({"message": "Appointment Booked!", "status": 200}), 200
