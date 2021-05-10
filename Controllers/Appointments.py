import uuid

from flask import Flask, jsonify, request, session, redirect
from app import mongo
import datetime
from dateutil import parser


class Appointment:
    def post_appointment_hospital(self):
        data = request.get_json(force=True)
        print(data)
        # check doctor availibility
        doctor = mongo.db.doctor.find_one({"_id": data["DoctorID"]})
        date = parser.parse(data['DateTime'])
        print(doctor)
        doctor_availibility_day = doctor['AvailabilityDay'].replace(" ", "").split("-")
        if date.strftime('%A') not in doctor_availibility_day:
            return jsonify({"message": "Doctor Not Available that day", "status": 400}), 200

        doctor_availibility_hours = doctor['AvailabilityTime'].replace(" ", "").split("->")

        start = float(doctor_availibility_hours[0][:-2])
        end = start + float(doctor_availibility_hours[1][:-2]) + 3
        print("start hour = " + str(start))
        print("end hour = " + str(end))
        if not (start <= date.hour < end):
            return jsonify({"message": "Doctor Not Available on this hour", "status": 400}), 200

        # Check if you didnt book two appointments at the same time:
        if len(list(
                mongo.db.appointment_hospital.find({"DateTime": data["DateTime"], "userid": data["_id"]}))) > 0:
            return jsonify(
                {"message": "You already booked an appointment at this hour! Check your list of appointments!",
                 "status": 400}), 200

        # check if ypu have a test appointment at this hour
        if len(list(
                mongo.db.appointment_lab.find({"DateTime": data["DateTime"], "userid": data["_id"]}))) > 0:
            return jsonify(
                {"message": "You already booked a lab appointment at this hour! Check your list of appointments!",
                 "status": 400}), 200

        # check if another patient booked an appoitnment at the same time
        if len(list(
                mongo.db.appointment_hospital.find({"DateTime": data["DateTime"], "DoctorID": data["DoctorID"]}))) > 0:
            return jsonify({"message": "Appointment booked by another patient!", "status": 400}), 200

        appointment = {
            "_id": uuid.uuid4().hex,
            "userid": data["_id"],
            "DoctorID": data["DoctorID"],
            "DateTime": data["DateTime"]
        }

        if mongo.db.appointment_hospital.insert(appointment, w="majority"):
            return jsonify({"message": "Appointment Booked!", "status": 200}), 200

    def post_appointment_lab(self):
        data = request.get_json(force=True)
        print(data)

        # check labtest availibility
        test = mongo.db.labtest.find_one({"_id": data["TestID"]})
        date = parser.parse(data['DateTime'])
        print(test)
        lab_availibility_day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] if test[
                                                                                               "testday"] == "Weekdays" else \
            test['testday'].replace(" ", "").split("-")
        print("current day: " + date.strftime('%A'))
        print(lab_availibility_day)
        if date.strftime('%A') not in lab_availibility_day:
            return jsonify({"message": "Lab Not Available that day", "status": 400}), 200

        test_availibility_hours = test['testtime'].replace(" ", "").split("->")

        start = float(test_availibility_hours[0][:-2])
        end = start + float(test_availibility_hours[1][:-2]) + 3
        print("start hour = " + str(start))
        print("end hour = " + str(end))
        if not (start <= date.hour < end):
            return jsonify({"message": "Lab Not Available on this hour", "status": 400}), 200

        if len(list(
                mongo.db.appointment_lab.find({"DateTime": data["DateTime"], "userid": data["_id"]}))) > 0:
            return jsonify(
                {"message": "You already booked an appointment at this hour! Check your list of appointments!",
                 "status": 400}), 200

        # check if ypu have a test appointment at this hour
        if len(list(
                mongo.db.appointment_hospital.find({"DateTime": data["DateTime"], "userid": data["_id"]}))) > 0:
            return jsonify(
                {"message": "You already booked a doctor appointment at this hour! Check your list of appointments!",
                 "status": 400}), 200

        # check if another patient booked an appoitnment at the same time
        if len(list(
                mongo.db.appointment_lab.find({"DateTime": data["DateTime"], "DoctorID": data["TestID"]}))) > 0:
            return jsonify({"message": "Appointment booked by another patient!", "status": 400}), 200

        # Check if you dont book two appointments at the same time:

        appointment = {
            "_id": uuid.uuid4().hex,
            "userid": data["_id"],
            "TestID": data["TestID"],
            "DateTime": data["DateTime"]
        }

        if mongo.db.appointment_lab.insert(appointment, w="majority"):
            return jsonify({"message": "Appointment Booked!", "status": 200}), 200

    def getAll_Appointments(self, id):
        hos_app = mongo.db.appointment_hospital.find({"userid": id})
        lab_app = mongo.db.appointment_lab.find({"userid": id})

        appointments_tmp = list(hos_app) + list(lab_app)

        appointments_ = []

        for app in appointments_tmp:
            if 'DoctorID' in app:
                doctor = mongo.db.doctor.find_one({"_id": app["DoctorID"]})
                hospital = mongo.db.hospital.find_one({"HospitalName": doctor["HospitalName"]})
                name = doctor['DoctorName']
                location_name = doctor['HospitalName']
                location = hospital["HospitalLocation"]
                location_id = hospital["_id"]
                asset_id = doctor["_id"]
                type = "Doctor"
            else:
                test = mongo.db.labtest.find_one({"_id": app["TestID"]})
                lab = mongo.db.lab.find_one({"Lab": test["Lab"]})
                name = test['testtype']
                location_name = test['Lab']
                location = lab["LabLocation"]
                location_id = lab["_id"]
                asset_id = test["_id"]
                type = "Test"

            app_date = parser.parse(app['DateTime']).replace(tzinfo=None)
            day_left = (app_date - datetime.datetime.now()).days


            appointment = {
                "_id":  app["_id"],
                "asset_id": asset_id,
                "location_id": location_id,
                "Type": type,
                "Name": name,
                "locationName": location_name,
                "Location": location,
                "DateTime": app['DateTime'],
                "DayLeft": day_left
            }

            datetime_ = parser.parse(appointment['DateTime'])
            datetime_ = str(datetime_.year) + "-" + str(datetime_.month) + "-" + str(datetime_.day)
            appointment['DateTime'] = datetime_

            appointments_.append(appointment)

        appointments = {
            "appointments": appointments_,
            "status": 200
        }
        return jsonify(appointments), 200
