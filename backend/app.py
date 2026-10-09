import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

DATABASE = "technet.db"


def create_database():
    connection = sqlite3.connect(DATABASE)
    cursor = connection.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS enquiries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)

    connection.commit()
    connection.close()


@app.route("/")
def home():
    return "TechNet Solutions Backend is Running!"


@app.route("/api/contact", methods=["POST"])
def contact():

    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    phone = data.get("phone")
    message = data.get("message")

    if not name or not email or not message:
        return jsonify({
            "success": False,
            "message": "Name, email and message are required."
        }), 400

    connection = sqlite3.connect(DATABASE)
    cursor = connection.cursor()

    cursor.execute("""
        INSERT INTO enquiries
        (name, email, phone, message)
        VALUES (?, ?, ?, ?)
    """, (name, email, phone, message))

    connection.commit()
    connection.close()

    return jsonify({
        "success": True,
        "message": "Your message has been received. Thank you!"
    })


@app.route("/api/enquiries", methods=["GET"])
def get_enquiries():

    connection = sqlite3.connect(DATABASE)
    connection.row_factory = sqlite3.Row

    cursor = connection.cursor()

    cursor.execute("""
        SELECT * FROM enquiries
        ORDER BY created_at DESC
    """)

    enquiries = cursor.fetchall()

    connection.close()

    return jsonify([dict(row) for row in enquiries])


if __name__ == "__main__":
    create_database()
 
app.run(
        debug=True,
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5000))
    )