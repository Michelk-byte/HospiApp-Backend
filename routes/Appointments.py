from app import cross_origin, app
from Controllers.Appointments import Appointment
from utils.Decorator_Login import login_required


@app.route('/appointment/hospital', methods=['POST'])
@login_required
def hos_appointment():
    return Appointment().post_appointment_hospital()


@app.route('/appointment/lab', methods=['POST'])
@login_required
def lab_appointment():
    return Appointment().post_appointment_lab()


@app.route('/appointment/<id>', methods=['GET'])
@login_required
def appointment(id):
    return Appointment().getAll_Appointments(id)
