from app import cross_origin, app
from Controllers.Appointments import Appointment
from utils.Decorator_Login import login_required


@app.route('/appointment/hospital', methods=['POST'])
@login_required
def appointment():
    return Appointment().post_appointment_hospital()