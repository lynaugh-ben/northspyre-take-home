from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class Task(db.Model):
    __tablename__ = 'tasks'  # Specify the table name explicitly
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    completed = db.Column(db.Boolean, default=False)