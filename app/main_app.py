import os
import threading

from flask import Flask
from flask_cors import CORS

from data.database import db
from app.db_config import configure_database
from app.blueprints import user_blueprint, api_blueprint, stream_blueprint, update_blueprint


def create_app():
    app = Flask(__name__)
    app.secret_key = os.environ.get("SECRET_KEY") or os.urandom(24)
    app.config["JSONIFY_PRETTYPRINT_REGULAR"] = True
    CORS(app)
    configure_database(app)
    app.register_blueprint(user_blueprint, url_prefix="/user")
    app.register_blueprint(api_blueprint, url_prefix="/api")
    app.register_blueprint(stream_blueprint, url_prefix="/stream")
    app.register_blueprint(update_blueprint, url_prefix="/update")

    # Initialize the database.
    db.init_app(app)
    with app.app_context():
        db.create_all()
    return app


app = create_app()
