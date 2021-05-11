import base64

from werkzeug.utils import secure_filename
from app import mongo
from flask import Flask, jsonify, request, session, redirect
from keras.models import model_from_json
import cv2
import os
import numpy as np
import io
from PIL import Image


class Predict:
    def get_prediction(self):
        file_binary = request.form.get('file')
        file_binary = file_binary[23:]
        file_binary = base64.b64decode(file_binary)
        image_stream = io.BytesIO(file_binary)
        file = Image.open(image_stream)
        file = file.convert('RGB')

        basepath = os.path.dirname(__file__)
        print(basepath)

        # file_path = os.path.join(basepath, 'static', 'upload', 'file.jpeg')
        file_path = os.path.abspath(os.path.join(basepath, '..', 'static', 'upload'))
        print(file_path)
        file.save(file_path + "/file.jpeg", "JPEG")

        labels = {
            0: {"Medicament_Name": "Acetaminophen",
                "description": "Acetaminophen is used to treat minor aches and pain and to reduce fever. It may also help treat pain from mild forms of arthritis.",
                "price": "4$",
                "number_of_caplets": "350 per bottle",
                "doses_per_day": "2 per day",
                "side_effects": "Acetaminophen is less likely to increase blood pressure or cause stomach bleeding. But it can cause liver damage"},
            1: {"Medicament_Name": "Flixonase",
                "description": "Fluticasone is used to relieve seasonal and year-round allergic and non-allergic nasal symptoms, such as stuffy/runny nose, itching, and sneezing. It can also help relieve allergy eye symptoms such as itchy, watery eyes",
                "price": "25$",
                "number_of_caplets": "equivalent to 3500 sprays",
                "doses_per_day": "3 sprays per day",
                "side_effects": "The most commonly reported side-effects are: sneezing. irritation or dryness in the nose or throat. bad taste or smell."},
            2: {"Medicament_Name": "Dorixina",
                "description": "Dorixina is a non-steroidal anti-inflammatory drug. It also has analgesic, antipyretic, and platelet-inhibitory actions.",
                "price": "30$",
                "number_of_caplets": "20 tablets",
                "doses_per_day": "25mg / ml",
                "side_effects": "Occasionally nausea, dizziness and somnolence, were mild and transient. On rare occasions, and administering high doses, it is possible the appearance of dry mouth or constipation."},
            3: {"Medicament_Name": "Paracetamol",
                "description": "Paracetamol is a pain reliever and a fever reducer. The exact mechanism of action of is not known. ",
                "price": "4$",
                "number_of_caplets": "15 tablets",
                "doses_per_day": "3-4 pills per day",
                "side_effects": "Side effects from paracetamol are rare but can include: an allergic reaction, which can cause a rash and swelling. flushing, low blood pressure and a fast heartbeat – this can sometimes happen when paracetamol is given in hospital into a vein in your arm."},
            4: {"Medicament_Name": "Panadol Night",
                "description": "Panadol Night is specially formulated for the night time relief of: Colds & Flu symptoms, Muscular aches & pains, Backache, Headache, Toothache, Period pain.",
                "price": "50$",
                "number_of_caplets": "20 tablets - 500 mg",
                "doses_per_day": "1-2 pills per week",
                "side_effects": "When using this product you may experience: Drowsiness, sedation, unsteadiness, dizziness, tiredness, blurred vision, or difficulty concentrating • Dry mouth • Feeling restless or excitable, confusion • Tingling sensation in the skin • Muscle twitching"},
        }

        # json_path = os.path.join(basepath, 'static', 'model', 'medicament_model.json')
        # h5_path = os.path.join(basepath, 'static', 'model', 'medicament_model.h5')
        json_path = os.path.abspath(os.path.join(basepath, '..', 'static', 'model', 'medicament_model.json'))
        h5_path = os.path.abspath(os.path.join(basepath, '..', 'static', 'model', 'medicament_model.h5'))

        json_file = open(json_path, 'r')
        loaded_model_json = json_file.read()
        json_file.close()

        loaded_model = model_from_json(loaded_model_json)
        loaded_model.load_weights(h5_path)
        print("Loaded model from disk")

        loaded_model.compile(loss='binary_crossentropy', optimizer='rmsprop', metrics=['accuracy'])

        img_array = cv2.imread(os.path.join(file_path, "file.jpeg"))
        new_array = cv2.resize(img_array, (150, 150))
        # plt.imshow(new_array)
        # plt.show()

        new_array = new_array.reshape(1, 150, 150, 3)
        pred = loaded_model.predict(new_array)
        pred = np.argmax(pred[0])
        pred = labels[pred]

        predictions = {
            "Medicament_Name": pred['Medicament_Name'],
            "description": pred['description'],
            "price": pred['price'],
            "number_of_caplets": pred['number_of_caplets'],
            "doses_per_day": pred['dose_per_day'],
            "side_effects": pred['side_effects']
        }
        return jsonify(predictions), 200
