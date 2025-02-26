from datetime import datetime, timedelta

from db import get_db_connection


class ResitExamModel:
    @staticmethod
    def get_resit_exams_by_student_id(ss_id):
        connection = get_db_connection()
        try:
            with connection.cursor() as cursor:
                query = """
                    SELECT r.resitId, r.resitName, r.date, r.time, ro.roomName AS room
                    FROM ResitExamCourse r
                    JOIN StudentCourse sc ON sc.courseId = r.courseId
                    JOIN Room ro ON ro.roomId = r.room
                    WHERE sc.ssId = %s
                """
                cursor.execute(query, (ss_id,))
                resit_exams = cursor.fetchall()

                exams = []
                for exam in resit_exams:
                    resit_id = exam['resitId']
                    resit_name = exam['resitName']
                    date = exam['date']
                    time = exam['time']
                    room = exam['room']
                    # Umwandeln der `time` (timedelta) in Stunden:Minuten:Sekunden
                    if isinstance(time, timedelta):  # Wenn `time` ein timedelta Objekt ist
                        total_seconds = int(time.total_seconds())
                        hours = total_seconds // 3600
                        minutes = (total_seconds % 3600) // 60
                        seconds = total_seconds % 60
                        time_str = f"{hours:02}:{minutes:02}:{seconds:02}"
                    else:
                        time_str = time

                    # Umwandeln der `date` in das Format YYYY-MM-DD
                    date_str = date.strftime('%Y-%m-%d') if isinstance(date, datetime) else date

                    # Hinzufügen der Daten zum Ergebnis
                    exams.append({
                        'resitId': resit_id,
                        'resitName': resit_name,
                        'date': date_str,
                        'time': time_str,
                        'room': room
                    })

                return exams
        finally:
            connection.close()


class LoginModel:
    @staticmethod
    def check_login_data(username):
        connection = get_db_connection()
        try:
            with connection.cursor() as cursor:
                query = """
                    SELECT ssId, username, role
                    FROM User
                    WHERE username = %s
                """
                cursor.execute(query, (username,))
                userdata = cursor.fetchall()

                return userdata
        finally:
            connection.close()