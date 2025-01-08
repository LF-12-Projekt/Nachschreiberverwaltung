import os

"""Konfiguration für die Datenbank"""


class Config:
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'mysql+pymysql://root:@localhost:3306/UserMakeupExamDB'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
