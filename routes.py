from flask import Blueprint

from controllers import ResitExamController

main = Blueprint('main', __name__)


@main.route('/')
def home():
    return "Hello, World!"


@main.route('/resit/list/<string:studentId>', methods=['GET'])
def resit_list(studentId):
    return ResitExamController.get_resit_exams(studentId)
