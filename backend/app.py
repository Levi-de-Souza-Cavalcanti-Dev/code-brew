from flask import Flask
from flask_cors import CORS
from flask_mail import Mail
from config import Config

from routes.main import main_bp
from routes.contato import contato_bp
from routes.noticias import noticias_bp

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
mail = Mail(app)

# Registrar blueprints
app.register_blueprint(main_bp)
app.register_blueprint(contato_bp, url_prefix='/contato')
app.register_blueprint(noticias_bp, url_prefix='/noticias')

if __name__ == '__main__':
    app.run(debug=True) 