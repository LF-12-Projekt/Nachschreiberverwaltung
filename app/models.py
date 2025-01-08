from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


# User Model
class User(db.Model):
    __tablename__ = 'accounts'

    name = db.Column(db.String(50), nullable=False, primary_key=True)
    role = db.Column(db.String(50), nullable=False)




