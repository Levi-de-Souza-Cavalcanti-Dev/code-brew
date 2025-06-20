from flask import Blueprint, request, jsonify, current_app
from flask_mail import Message
from services.email_service import send_email
import os

contato_bp = Blueprint('contato', __name__)

@contato_bp.route('/', methods=['POST'])
def contato():
    data = request.json
    if not data or not all(k in data for k in ('nome', 'email', 'mensagem')):
        return jsonify({"status": "Dados inválidos"}), 400
    recipient = os.environ.get('MAIL_USERNAME')
    if not recipient:
        return jsonify({"status": "Destinatário de e-mail não configurado"}), 500
    status = send_email(
        subject='Nova mensagem de contato do site',
        recipients=[recipient],
        body=f"Nome: {data['nome']}\nEmail: {data['email']}\nMensagem: {data['mensagem']}"
    )
    if status:
        return jsonify({"status": "Mensagem enviada para o email da empresa!"}), 200
    else:
        return jsonify({"status": "Erro ao enviar e-mail."}), 500 