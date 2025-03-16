from flask_mysqldb import MySQL

def init_mysql(app):
    # MySQL Configuration
    app.config['MYSQL_HOST'] = 'localhost'
    app.config['MYSQL_USER'] = 'root'
    app.config['MYSQL_PASSWORD'] = 'Sachin@927'
    app.config['MYSQL_PORT'] = 3306
    app.config['MYSQL_DB'] = 'getitchecked'
    app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
    
    # Initialize MySQL
    mysql = MySQL(app)
    return mysql
