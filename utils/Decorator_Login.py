from flask import session, jsonify
from functools import wraps


# # Decorators
def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            return jsonify({"message": "You need to authenticate first", "status": 400}), 200

    return wrap
