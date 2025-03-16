from flask_mysqldb import MySQL

mysql = None

def init_db(app):
    global mysql
    mysql = MySQL(app)
