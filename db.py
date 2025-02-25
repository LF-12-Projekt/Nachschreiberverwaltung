import pymysql.cursors


def get_db_connection():
    connection = pymysql.connect(
        host='localhost',
        user='root',  # Benutzername anpassen
        password='',  # Passwort anpassen
        database='MakeupExamDB',
        cursorclass=pymysql.cursors.DictCursor
    )
    return connection
