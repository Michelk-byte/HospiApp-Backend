from utils.importlib import *
from flask import Flask, jsonify, request, session, redirect


class Appointment:
    def post_appointment_hospital(self):
        data = request.get_json(force=True)

        # check doctor availibility

        # check if another booked an appoitnment at the same time

        if mongo.db.appointment_hospital.insert(data, w="majority"):
            return jsonify({"message": "Appointment Booked!", "status": 200}), 200

    def post_appointment_lab(self):
        data = request.get_json(force=True)

        # check doctor availibility

        # check if another booked an appoitnment at the same time

        if mongo.db.appointment_lab.insert(data, w="majority"):
            return jsonify({"message": "Appointment Booked!", "status": 200}), 200

    def getAll_Appointments(self, id):
        hos_app = mongo.db.appointment_hospital.find({"userid": id})
        lab_app = mongo.db.appointment_lab.find({"userid": id})

        appointments_ = list(hos_app) + list(lab_app)

        appointments = {
            "appointments": appointments_,
            "status": 200
        }
        return jsonify(appointments), 200
