from app import cross_origin, app
from Controllers.Lab import Lab
from utils.Decorator_Login import login_required


@app.route('/user/lab', methods=['GET'])
@login_required
@cross_origin(headers=['Content- Type', 'Authorization'])
def lab():
    return Lab().getAllLabs()


@app.route('/user/lab/<id>', methods=['GET'])
@login_required
@cross_origin(headers=['Content- Type', 'Authorization'])
def test_lab(id):
    return Lab().getAllTests_by_Lab(id)


@app.route('/user/test/<id>', methods=['GET'])
@login_required
@cross_origin(headers=['Content- Type', 'Authorization'])
def test(id):
    return Lab().getTest(id)
