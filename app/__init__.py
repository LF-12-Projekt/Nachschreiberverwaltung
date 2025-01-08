from flask import Flask

from app.models import db
from config import Config


def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    # Routen registrieren
    from .routes import main
    app.register_blueprint(main)

    with app.app_context():
        db.create_all()

    return app
