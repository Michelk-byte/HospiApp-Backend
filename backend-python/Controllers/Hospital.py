from app import mongo
from utils.importlib import *

class Hospital():
    def getAllHospitals(self):
        hospitals = mongo.db.hospital.find()
        return jsonify(list(hospitals)), 200

    def getAllDoctors_by_Hospital(self, id):
        hospital = list(mongo.db.hospital.find({"_id": id}))
        doctors = mongo.db.doctor.find({"HospitalName": hospital[0]["HospitalName"]})
        return jsonify(list(doctors)), 200
