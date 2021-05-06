from flask_mail import Message
from app import mail


def send_user_mail(email, link):
    msg = Message(
        body='Hello,\n\n' + "We are sad to know that you have forgot your password" + "\n\n" + "Anywho click on the link below and be careful next time: \n\nlink: " + link + "\n\nRegards,\n\nHospiApp Community",
        subject="RESET YOUR PASSWORD NOW!!",
        sender='mathiewleblanc2000@gmail.com',
        recipients=[email]
    )
    # msg.body = 'Hello Flask message sent from Flask-Mail'
    mail.send(msg)
