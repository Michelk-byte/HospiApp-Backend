from app import mongo
from utils.importlib import *

class Hospital():
    def getAllHospitals(self):
        hospitals = mongo.db.hospital.find()
        hospitals = list(hospitals)
        hospitals[0]["status"] = 200
        return jsonify(hospitals), 200

    def getAllDoctors_by_Hospital(self, id):
        hospital = list(mongo.db.hospital.find({"_id": id}))
        doctors = mongo.db.doctor.find({"HospitalName": hospital[0]["HospitalName"]})
        doctors = list(doctors)
        doctors[0]["status"] = 200
        return jsonify(doctors), 200

    def getDoctor(self, id):
        doctor = list(mongo.db.doctor.find({"_id": id}))
        doctor = list(doctor)
        doctor[0]["status"] = 200
        return jsonify(doctor), 200
