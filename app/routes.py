from flask import Blueprint, render_template, request, redirect, url_for, flash, jsonify
from flask import request

from app.models import *

main = Blueprint('main', __name__)

# Temporary dummy data, wie prob zukuenftig von db
userTeacher = {
    "name": "lehrPerson",
    "role": "lehrer"
}
userStudent = {
    "name": "schulPerson",
    "role": "schueler"
}

users=[userTeacher,userStudent]

@main.route('/')
def home():
    return "Hello, World!"


@main.route('/auth/login', methods=['GET', 'POST'])
def login():
    if request.method != 'POST':
        return 405 # Method not allowed error
    else:
        name = request.form.get("name")

        # hier zukünftig richtige Datenbankabfrage - ausgelagert nach models
        for person in users:
            if name in person:
                return jsonify({"validation":True,"role":person.get("role")})
        else:
            flash("Ungültiger name")
            return redirect(url_for("auth/login"))