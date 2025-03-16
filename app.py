from flask import Flask, session
from routes import main_routes
from config import Config
from DBConfig.db import init_db
from flask_session import Session
from datetime import timedelta

app = Flask(__name__)
app.config.from_object(Config)

# Initialize MySQL
init_db(app)

#  Initialize Flask-Session
Session(app)

#  Make session permanent
@app.before_request
def make_session_permanent():
    session.permanent = True
    app.permanent_session_lifetime = timedelta(hours=24)

#  Register the Blueprint
app.register_blueprint(main_routes)

#  Run the app
if __name__ == "__main__":
    app.run(debug=True)
