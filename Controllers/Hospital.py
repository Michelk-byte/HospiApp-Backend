from app import mongo
from flask import Flask, jsonify, request, session, redirect


class Hospital:
    def getAllHospitals(self):
        hospitals = mongo.db.hospital.find()
        hospitals = list(hospitals)
        hospitals[0]["status"] = 200
        return jsonify(hospitals), 200

    def getAllDoctors_by_Hospital(self, id):
        hospital = list(mongo.db.hospital.find({"_id": id}))
        doctors = mongo.db.doctor.find({"HospitalName": hospital[0]["HospitalName"]})
        doctors = list(doctors)

        doctors_ = []
        for doctor in doctors:
            d = {
                "_id": doctor["_id"],
                "DoctorName": doctor["DoctorName"],
                "DoctorPicture": doctor["DoctorPicture"],
                "DoctorDescription": doctor["DoctorDescription"],
                "DoctorSpecialty": doctor['DoctorSpecialty']
            }

            doctors_.append(d)

        doctors_api = {
            "doctors": doctors_,
            "status": 200
        }

        return jsonify(doctors_api), 200

    def getDoctor(self, id):
        doctor = list(mongo.db.doctor.find({"_id": id}))
        doctor = list(doctor)
        doctor[0]["status"] = 200

        return jsonify(doctor), 200
