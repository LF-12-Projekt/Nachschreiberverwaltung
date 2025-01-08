from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

db = SQLAlchemy()


# User Model
class User(db.Model):
    __tablename__ = 'accounts'

    name = db.Column(db.String(50), nullable=False, primary_key=True)
    role = db.Column(db.String(50), nullable=False)

    # Beziehung Schüler/Nachschreibeklausur
    exams = relationship("Exam", secondary="exam_registrations", back_populates="students")

    # Beziehung Lehrkraft/Nachschreibeklausur
    teaching_exams = relationship("Exam", back_populates="teacher")


# Course Model
class Course(db.Model):
    __tablename__ = 'courses'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    exams = relationship("Exam", secondary="resit_exam_registrations", back_populates="courses")


class Exam(db.Model):
    __tablename__ = 'exams'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    exam_date = db.Column(db.Date, nullable=False)

    # m zu n Beziehung zu Kursen (Über die Assoziationstabelle resit_exam_registrations)
    courses = relationship("Course", secondary="resit_exam_registrations", back_populates="exams")

    # Beziehung zu den Schülern
    students = relationship("User", secondary="resit_exam_registrations", back_populates="exams")

    # Beziehung zu den Lehrern
    teacher_name = db.Column(db.String(50), ForeignKey('users.name'))
    teacher = relationship("User", back_populates="teaching_exams")

# Künstliche Tabelle für Schüler und Nachschreibeklausuren
class ResitExamRegistration(db.Model):
    __tablename__ = 'resit_exam_registrations'

    user_name = db.Column(db.String(50), ForeignKey('users.name'), primary_key=True)
    exam_id = db.Column(db.Integer, ForeignKey('exams.id'), primary_key=True)

    # Beziehungen
    user = relationship("User", back_populates="exams")
    exam = relationship("Exam", back_populates="students")