from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass

db = SQLAlchemy()

@dataclass
class Car(db.Model):
    __tablename__ = 'car'

    id:id = db.Column(db.Integer, primary_key=True)
    name:str = db.Column(db.String(100), nullable=False)
    price:str = db.Column(db.String(100), nullable=True)
    image:str = db.Column(db.String(255), nullable=True)

    def __int__(self, name, price, image):

        self.name = name
        self.price = price
        self.image = image

    @property
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'image': self.image
        }