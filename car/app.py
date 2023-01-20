from flask import Flask
from models import db, Car
from routes import init_routes
import json

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://admin:admin@db:3306/symfony_authapi"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

@app.before_first_request
def create_table():
    db.create_all()

init_routes(app)
