from flask import Blueprint, render_template

main = Blueprint('main', __name__)


@main.route('/')
def home():
    return "Hello, World!"



@main.route('/resit/list/{studentId}')
def resit_list(studentId):

    return
