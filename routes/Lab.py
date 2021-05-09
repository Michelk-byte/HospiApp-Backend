from app import cross_origin, app
from Controllers.Lab import Lab
from utils.Decorator_Login import login_required


@app.route('/user/lab', methods=['GET'])
@cross_origin(headers=['Content- Type', 'Authorization'])
def lab():
    return Lab().getAllLabs()


@app.route('/user/lab/<id>', methods=['GET'])
@cross_origin(headers=['Content- Type', 'Authorization'])
def test_lab(id):
    return Lab().getAllTests_by_Lab(id)


@app.route('/user/test/<id>', methods=['GET'])
@cross_origin(headers=['Content- Type', 'Authorization'])
def test(id):
    return Lab().getTest(id)


@app.route('/user/test/type/<id>', methods=['GET'])
@cross_origin(headers=['Content- Type', 'Authorization'])
def all_types(id):
    return Lab().getAllTypes(id)


@app.route('/user/testbytype', methods=['GET'])
@cross_origin(headers=['Content- Type', 'Authorization'])
def all_test_by_type():
    return Lab().get_AllTests_by_Types()
