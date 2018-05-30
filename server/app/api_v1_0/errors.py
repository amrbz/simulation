from flask import jsonify, make_response
from app.exceptions import ValidationError
from . import api


def bad_request(message):
    response = make_response(jsonify({'error': 'bad request', 'message': '{0}'.format(message)}))
    response.status_code = 400
    return response

def unauthorized(message):
    response = make_response(jsonify({'error': 'unauthorized', 'message': '{0}'.format(message)}))
    response.status_code = 401
    return response

def forbidden(message):
    response = make_response(jsonify({'error': 'forbidden', 'message': '{0}'.format(message)}))
    response.status_code = 403
    return response

def unavailable(message):
    response = make_response(jsonify({'error': 'service unavailable', 'message': '{0}'.format(message)}))
    response.status_code = 503
    return response

@api.errorhandler(ValidationError)
def validation_error(e):
    return bad_request(e)
