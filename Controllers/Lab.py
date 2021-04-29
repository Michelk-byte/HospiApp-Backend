from app import mongo
from flask import Flask, jsonify, request, session, redirect


class Lab:
    def getAllLabs(self):
        labs = mongo.db.lab.find()
        labs = list(labs)
        labs[0]["status"] = 200
        return jsonify(labs), 200

    def getAllTests_by_Lab(self, id):
        lab = list(mongo.db.lab.find({"_id": id}))
        test = mongo.db.labtest.find({"Lab": lab[0]["Lab"]})
        tests = list(test)

        tests_ = []
        for test in tests:
            t = {
                "_id": test["_id"],
                "testtype": test["testtype"],
                "testphoto": test["testphoto"],
                "labtestdescription": test["labtestdescription"]
            }

            tests_.append(t)

        tests_api = {
            "tests": tests_,
            "status": 200
        }

        return jsonify(tests_api), 200

    def getTest(self, id):
        test = list(mongo.db.labtest.find({"_id": id}))
        test = list(test)
        test[0]["status"] = 200
        return jsonify(test), 200
