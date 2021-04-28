from app import cross_origin, app
from Controllers.Hospital import Hospital
from utils.Decorator_Login import login_required


@app.route('/user/hospital', methods=['GET'])
@login_required
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def hospital():
    return Hospital().getAllHospitals()


@app.route('/user/hospital/<id>', methods=['GET'])
@login_required
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def doctor_hs(id):
    return Hospital().getAllDoctors_by_Hospital(id)


@app.route('/user/doctor/<id>', methods=['GET'])
@login_required
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def doctor(id):
    return Hospital().getDoctor(id)
