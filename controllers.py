from flask import Flask, jsonify, request
from models import ResitExamModel, CourseModel

app = Flask(__name__)


@app.route('/resit/list/<ss_id>', methods=['GET'])
def get_resit_exams(ss_id):
    # Abrufen der Resit-Examen für die angegebenen ss_id
    resit_exams = ResitExamModel.get_resit_exams_by_ss_id(ss_id)

    if not resit_exams:
        return jsonify({"message": "No resit exams found for this student."}), 404

    return jsonify(resit_exams), 200


@app.route('/courses/<ss_id>', methods=['GET'])
def get_allCourses(ss_id):
    # Abrufen der Resit-Examen für die angegebenen ss_id
    courses = CourseModel.get_courses_by_ss_id(ss_id)

    if not courses:
        return jsonify({"message": "No courses found for this teacher."}), 404

    return jsonify(courses), 200


if __name__ == '__main__':
    app.run(debug=True, port=8080)
