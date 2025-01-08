from flask import Blueprint, render_template, request, redirect, url_for, flash, jsonify
from flask import request

from app.models import *

main = Blueprint('main', __name__)

# Temporary dummy data, wie prob von db übergeben
# Schema ist name : role
userTeacher = {
    "name": "lehrPerson",
    "userrole": "lehrer"
}
userStudent = {
    "name": "schulPerson",
    "userrole": "schueler"
}

users=[userTeacher,userStudent]

@main.route('/')
def home():
    return "Hello, World!"

#methods=['GET', 'POST'] überlegen ob so
@main.route('/auth/login', 'POST')
def login():
    if request.method != 'POST':
        return 405 # Method not allowed error
    else:
        # hier abgeändert
        name = request.form.get("name")

        # hier zukünftig richtige Datenbankabfrage
        for person in users:
            if name in person:
                return jsonify({"validation":True,"userrole":person.get("userrole")})
        else:
            flash("Ungültiger name")
            return redirect(url_for("login"))