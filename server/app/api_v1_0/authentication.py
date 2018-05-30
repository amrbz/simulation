from flask import g, jsonify
from flask_httpauth import HTTPTokenAuth
from .errors import unauthorized, forbidden
from . import api
import jwt


# auth = HTTPBasicAuth()
auth = HTTPTokenAuth(scheme='Token')

# @auth.verify_password
# def verify_password(username, password):
#     g.app = username == 'amrbz' and password == 'pass'
#     return g.app


@auth.verify_token
def verify_token(token):
    # print token
    # eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6InBhc3N3b3JkIiwidXNlciI6InVzZXJuYW1lIn0.AJ5WuVAXmkGCObxOzAzzFroO7kV5lzZuSiJZkyuE6Pw
    # eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6InBhc3N3b3JkIiwidXNlciI6InVzZXJuYW1lIn0.XuPjoVoG7PBYyaMpIZpLyAKXMDwl2M5qAIvJ9BqEP_8
    # print jwt.encode({'user': 'username', 'password': 'password'}, g.secret_key)
    result = jwt.encode({'user': 'username', 'password': 'password'}, g.secret_key) == token
    # print
    return result

@auth.error_handler
def auth_error():
    return unauthorized('Invalid credentials')


@api.before_request
#@auth.login_required
def before_request():
    if auth.verify_token == False:
        return forbidden('Unconfirmed account')
