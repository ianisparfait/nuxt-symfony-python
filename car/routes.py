from flask import Flask, jsonify, request
from models import Car, db
import json

def init_routes(app):

    @app.route("/flask/", methods=["GET"])
    def hello():
        return jsonify({"Hello": "World"})

    @app.route("/flask/cars", methods=["GET"])
    def get_cars():
        cars = Car.query.all()
        return jsonify([car for car in cars])


    @app.route("/flask/cars/<int:id>", methods=["GET"])
    def get_car(id):
        car = Car.query.get(id)
        if car is None:
            abort(404)
        return jsonify(car)


    @app.route("/flask/cars/<int:id>", methods=["DELETE"])
    def delete_car(id):
        car = Car.query.get(id)
        if car is None:
            abort(404)
        db.session.delete(car)
        db.session.commit()
        return jsonify({'result': True})


    @app.route('/flask/cars', methods=['POST'])
    def create_car():
        data = json.loads(request.data)
        car = Car(
            name=data["name"],
            price=data["price"],
            image=data["image"]
        )
        db.session.add(car)
        db.session.commit()
        return jsonify(car)


    @app.route('/flask/cars/<int:id>', methods=['PUT'])
    def update_car(id):
        if not request.json:
            abort(400)
        car = Car.query.get(id)
        if car is None:
            abort(404)
        car.name = request.json.get('name', car.name)
        car.price = request.json.get('price', car.price)
        car.image = request.json.get('image', car.image)
        db.session.commit()
        return jsonify(car)

