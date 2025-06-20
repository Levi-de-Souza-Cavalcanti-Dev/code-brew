from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv

load_dotenv()  
app = Flask(__name__)
CORS(app)

app.config['MAIL_SERVER'] = os.environ.get('MAIL_SERVER')
app.config['MAIL_PORT'] = os.environ.get('MAIL_PORT')
app.config['MAIL_USE_TLS'] = os.environ.get('MAIL_USE_TLS')
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.environ.get('MAIL_DEFAULT_SENDER')

mail = Mail(app)

@app.route('/')
def home():
    return jsonify({"mensagem": "API do Code Brew funcionando!"})

@app.route('/servicos')
def servicos():
    return jsonify([
        {"nome": "Desenvolvimento Web"},
        {"nome": "Automacoes"},
        {"nome": "Backend Solutions"}
    ])

@app.route('/contato', methods=['POST'])
def contato():
    data = request.json
    if not data or not all(k in data for k in ('nome', 'email', 'mensagem')):
        return jsonify({"status": "Dados inválidos"}), 400
    
    recipient = os.environ.get('MAIL_USERNAME')
    if not recipient:
        return jsonify({"status": "Destinatário de e-mail não configurado"}), 500
    
    msg = Message(
        subject='Nova mensagem de contato do site',
        recipients=[recipient],
        sender=os.environ.get('MAIL_DEFAULT_SENDER'),
        body=f"Nome: {data['nome']}\nEmail: {data['email']}\nMensagem: {data['mensagem']}"
    )
    mail.send(msg)
    return jsonify({"status": "Mensagem enviada para o email da empresa!"}), 200

if __name__ == '__main__':
    app.run(debug=True) 