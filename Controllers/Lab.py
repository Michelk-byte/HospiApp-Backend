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

    def getAllTypes(self, lab_id):
        lab = list(mongo.db.lab.find({"_id": lab_id}))
        test = mongo.db.labtest.find({"Lab": lab[0]["Lab"]})
        tests = list(test)

        all_types = []

        for test in tests:
            all_types.append(test['testtype'])

        all_types = list(set(all_types))

        types = {
            "all_types": all_types,
            "status": 200
        }

        return jsonify(types), 200

    def get_AllTests_by_Types(self):
        id = request.args.get('id')
        type = request.args.get('type')
        types = type.split(",")

        all_types_test = []
        lab = list(mongo.db.lab.find({"_id": id}))
        for type in types:
            test = mongo.db.labtest.find({"Lab": lab[0]["Lab"], "testtype": type})
            tests = list(test)
            for ty in tests:
                all_types_test.append(ty)
        print(all_types_test)

        tests_ = []

        for test in all_types_test:
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