from flask import Flask
from app.models import db
from config import Config


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialisieren
    db.init_app(app)

    # Routen registrieren
    from .routes import main
    app.register_blueprint(main)

    # Tabellen erstellen
    with app.app_context():
        db.create_all()

    return app
