from app import mongo
from utils.importlib import *


class Lab():
    def getAllLabs(self):
        labs = mongo.db.lab.find()
        return jsonify(list(labs)), 200

    def getAllTests_by_Lab(self, id):
        lab = list(mongo.db.lab.find({"_id": id}))
        test = mongo.db.labtest.find({"Lab": lab[0]["Lab"]})
        return jsonify(list(test)), 200
