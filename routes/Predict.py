from app import cross_origin, app
from Controllers.Predict import Predict
from utils.Decorator_Login import login_required


@app.route('/predict', methods=['POST'])
@cross_origin(headers=['Content- Type', 'Authorization'])
def predict():
    return Predict().get_prediction()
