import os
import pandas as pd
from keras.models import model_from_json
import numpy as np
import cv2



# i = 157
# for file in os.listdir("../medicaments"):
#     old_file = os.path.join("../medicaments", file)
#     new_file = os.path.join("../medicaments", str(i) + ".jpeg")
#     os.rename(old_file, new_file)
#     i += 1

labels = {
    0: "Acetaminophen",
    1: "Flixonase",
    2: "Dorixina",
    3: "Paracetamol",
    4: "Panadol Night"
}

# y_label = [0 for i in range(32)] + [3 for i in range(32,76)] + [2 for i in range(76,118)] + [1 for i in range(118,157)] + [4 for i in range(157,198)]
# photo_df = pd.DataFrame({"photo": [str(i) + ".png" for i in range(198)], "label": y_label})
# photo_df.to_csv("medicament.csv", index=False)

# load json and create model
# json_file = open('../static/model/medicament_model.json', 'r')
# loaded_model_json = json_file.read()
# json_file.close()
# loaded_model = model_from_json(loaded_model_json)
# # load weights into new model
# loaded_model.load_weights("../model/medicament_model.h5")
# print("Loaded model from disk")
#
# loaded_model.compile(loss='binary_crossentropy', optimizer='rmsprop', metrics=['accuracy'])
#
# path = "/home/michel/Desktop/MobileDev/HospiApp/MobileDev/medicaments"
# img ="12.jpeg"
# img_array = cv2.imread(os.path.join(path,img))
# new_array = cv2.resize(img_array,(150,150))
# # plt.imshow(new_array)
# # plt.show()
#
# new_array = new_array.reshape(1 , 150 , 150 , 3)
# pred = loaded_model.predict(new_array)
# print(labels[np.argmax(pred[0])])