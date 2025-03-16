from flask import Flask
from config.config import init_mysql
from flask_session import Session
from routes import main_routes  # Import Blueprint

app = Flask(__name__)
app.secret_key = "yesitisasupersecretkey"

# Initialize MySQL
mysql = init_mysql(app)

# Flask-Session Configuration
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

# Register Blueprints
app.register_blueprint(main_routes)

if __name__ == "__main__":
    app.run(debug=True)
