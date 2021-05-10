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
            0: "Acetaminophen",
            1: "Flixonase",
            2: "Dorixina",
            3: "Paracetamol",
            4: "Panadol Night"
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

        predictions = {
            "Medicament_Name": labels[np.argmax(pred[0])]

        }
        return jsonify(predictions), 200
