from app import cross_origin, app
from Controllers.Appointments import Appointment
from utils.Decorator_Login import login_required


@app.route('/appointment/hospital', methods=['POST'])
@cross_origin(headers=['Content- Type', 'Authorization'])
def hos_appointment():
    return Appointment().post_appointment_hospital()


@app.route('/appointment/lab', methods=['POST'])
@cross_origin(headers=['Content- Type', 'Authorization'])
def lab_appointment():
    return Appointment().post_appointment_lab()


@app.route('/appointment/<id>', methods=['GET'])
@cross_origin(headers=['Content- Type', 'Authorization'])
def appointment(id):
    return Appointment().getAll_Appointments(id)
