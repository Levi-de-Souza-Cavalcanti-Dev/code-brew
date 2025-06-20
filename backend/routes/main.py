from flask import Blueprint, jsonify

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def home():
    return jsonify({"mensagem": "API do Code Brew funcionando!"})

@main_bp.route('/servicos')
def servicos():
    return jsonify([
        {"nome": "Desenvolvimento Web"},
        {"nome": "Automacoes"},
        {"nome": "Backend Solutions"}
    ]) 