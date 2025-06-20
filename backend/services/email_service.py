from flask_mail import Message
from flask import current_app
from flask_mail import Mail
import os

def send_email(subject, recipients, body):
    mail = Mail(current_app)
    sender = os.environ.get('MAIL_DEFAULT_SENDER')
    try:
        msg = Message(
            subject=subject,
            recipients=recipients,
            sender=sender,
            body=body
        )
        mail.send(msg)
        return True
    except Exception as e:
        print('Erro ao enviar e-mail:', e)
        return False 