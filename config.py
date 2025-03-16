import os
from datetime import timedelta

class Config:
    SECRET_KEY = "yesitisasupersecretkey"
    
    #  MySQL Configuration
    MYSQL_HOST = 'localhost'
    MYSQL_USER = 'root'
    MYSQL_PASSWORD = 'root'
    MYSQL_PORT = 3306
    MYSQL_DB = 'GET_IT_CHECKED_DB'
    MYSQL_CURSORCLASS = 'DictCursor'

    #  Session Configuration
    SESSION_TYPE = 'filesystem'
