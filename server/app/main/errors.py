from flask import render_template, request, jsonify, make_response
from . import main

@main.app_errorhandler(403)
def forbidden(e):
    response = make_response(jsonify({'error': 'forbidden', 'message': '{0}'.format(e)}))
    response.status_code = 403
    return response

@main.app_errorhandler(404)
def page_not_found(e):
    response = make_response(jsonify({'error': 'not found', 'message': '{0}'.format(e)}))
    response.status_code = 404
    return response

@main.app_errorhandler(405)
def method_not_allowed(e):
    response = make_response(jsonify({'error': 'method not allowed', 'message': '{0}'.format(e)}))
    response.status_code = 405
    return response

@main.app_errorhandler(500)
def internal_server_error(e):
    response = make_response(jsonify({'error': 'internal server error', 'message': '{0}'.format(e)}))
    response.status_code = 500
    return response
