from app import cross_origin, app
from Controllers.Users import User
from utils.Decorator_Login import login_required


@app.route('/user/signup', methods=['POST'])
@cross_origin(headers=['Content- Type', 'Authorization'])
def signup():
    return User().signup()


@app.route('/user/signout', methods=['GET'])
@cross_origin(headers=['Content- Type', 'Authorization'])
def signout():
    User().signout()


@app.route('/user/login', methods=['POST'])
@cross_origin(headers=['Content- Type', 'Authorization'])
def login():
    return User().login()


@app.route('/user/<id>', methods=['GET'])
@cross_origin(headers=['Content- Type', 'Authorization'])
def get_credentials(id):
    return User().get_credentials(id)


@app.route('/user/editprofile/<id>', methods=['PUT'])
@login_required
@cross_origin(headers=['Content- Type', 'Authorization'])
def edit_profile(id):
    return User().edit_profile(id)


@app.route('/user/changepassword/<id>', methods=['PUT'])
@login_required
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def change_password(id):
    return User().changepassword(id)
