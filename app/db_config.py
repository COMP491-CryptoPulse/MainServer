import os

config_path = os.path.dirname(__file__)
app_db_uri = os.environ.get('DATABASE_URL')
data_db_uri = os.environ.get('DATABASE_URL')
stream_db_uri = os.environ.get('DATABASE_URL')
aggregate_db_uri = os.environ.get('DATABASE_URL')


SQLALCHEMY_DATABASE_URI = app_db_uri
SQLALCHEMY_BINDS = {
    "app": app_db_uri,
    "data": data_db_uri,
    "stream": stream_db_uri,
    "aggregate": aggregate_db_uri
}


def configure_database(app):
    app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
    app.config["SQLALCHEMY_BINDS"] = SQLALCHEMY_BINDS
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    # app.config["SQLALCHEMY_ECHO"] = True
