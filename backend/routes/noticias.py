from flask import Blueprint, jsonify, current_app
from services.news_service import get_tech_news

noticias_bp = Blueprint('noticias', __name__)
 
@noticias_bp.route('/', methods=['GET'])
def noticias():
    news = get_tech_news(current_app.config['NEWS_API_KEY'])
    return jsonify(news) 