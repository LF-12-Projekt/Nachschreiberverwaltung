from flask import Flask, jsonify, request
from models import ResitExamModel

app = Flask(__name__)


@app.route('/resit/list/<ss_id>', methods=['GET'])
def get_resit_exams(ss_id):
    # Abrufen der Resit-Examen für die angegebenen ss_id
    resit_exams = ResitExamModel.get_resit_exams_by_student_id(ss_id)

    if not resit_exams:
        return jsonify({"message": "No resit exams found for this student."}), 404

    return jsonify(resit_exams), 200


if __name__ == '__main__':
    app.run(debug=True)
