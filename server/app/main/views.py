import os
from flask import render_template
from . import main


@main.route('/', methods=['GET'])
def index():
    env = 'ENV: {0}'.format(os.getenv('FLASK_CONFIG') or 'default')
    return render_template('index.html', env=env), 200
