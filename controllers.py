from flask import Flask, jsonify, request
from models import ResitExamModel, LoginModel, CourseModel
from flask_cors import CORS

app = Flask(__name__)
@app.route('/', methods=['GET'])
def home():
    return "Hello World"

@app.route('/<username>', methods=['GET'])
def login(username):
    # Return der Userdaten, inklusive Rolle und ssId
    userdata = LoginModel.check_login_data(username)

    if not userdata:
        return jsonify({"message": "No user found for this username."}), 404

    return jsonify(userdata), 200

CORS(app)
@app.route('/resit/list/<ss_id>', methods=['GET'])
def get_resit_exams(ss_id):
    # Abrufen der Nachschreibeklausuren für die angegebenen ss_id
    resit_exams = ResitExamModel.get_resit_exams_by_ss_id(ss_id)

    if not resit_exams:
        return jsonify({"message": "No resit exams found for this student."}), 404

    return jsonify(resit_exams), 200


@app.route('/courses/<ss_id>', methods=['GET'])
def get_allCourses(ss_id):
    # Abrufen der Kurse für die angegebenen ss_id
    courses = CourseModel.get_courses_by_ss_id(ss_id)

    if not courses:
        return jsonify({"message": "No courses found for this teacher."}), 404

    return jsonify(courses), 200


@app.route('/resit/course/<course_id>', methods=['GET'])
def get_resit_exams_by_course(course_id):
    # Abrufen der Nachschreibeklausuren für den angegebenen Kurs, vorher den header prüfen
    header = request.headers.get('X-User-Role')
    if header != 'teacher':
        return jsonify({"message": "You are not authorized to access this resource."}), 403

    resit_exams_by_course = ResitExamModel.get_resit_exams_by_course(course_id)

    if not resit_exams_by_course:
        return jsonify({"message": "No resit exams found for this course."}), 404

    return jsonify(resit_exams_by_course), 200


if __name__ == '__main__':
    app.run(debug=True, port=8080)
