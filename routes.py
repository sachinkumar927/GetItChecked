from flask import Blueprint, render_template,session, redirect,url_for

main_routes = Blueprint("main_routes", __name__)

@main_routes.route("/")
def init():
    return render_template('index.html') 

@main_routes.route('/home')
def home():
    return render_template('home.html')

@main_routes.route('/sample')
def sample():
    return render_template('sample.html')


@main_routes.route('/register')
def register():
    return render_template('register.html')  # Registration Page

@main_routes.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('home'))

@main_routes.route('/student')
def student():
    return render_template('student.html')

@main_routes.route('/faculty')
def faculty():
    return render_template('faculty.html')

@main_routes.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@main_routes.route('/addAssignment')
def addAssignment():
    return render_template('addAssignment.html')

@main_routes.route('/upload')
def upload():
    return render_template('upload.html')