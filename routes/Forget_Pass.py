from flask import render_template, request
from app import cross_origin, app

from Controllers.Forget_Pass import Forget_Pass


@app.route('/changepassword/<id_user>')
def home(id_user):
    return Forget_Pass().display(id_user)


@app.route('/user/reset/password', methods=['POST'])
def reset_password():
    return Forget_Pass().reset()


@app.route('/send/mail/link', methods=['POST'])
def send_mail():
    return Forget_Pass().send_mail()
