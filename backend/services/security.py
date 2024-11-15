import logging
import secrets
import string
from datetime import datetime, timedelta, timezone
from typing import Optional, Union

import jwt
from argon2 import PasswordHasher

from settings import get_settings

ph = PasswordHasher()

API_KEY_PREFIX = "spader-api"
JWT_TOKEN_EXPIRE_MINUTES = 120

logger = logging.getLogger(__name__)


def verify_hashed_secret(hashed: Union[str, bytes], plain: Union[str, bytes]) -> bool:
    try:
        return ph.verify(hashed, plain)
    except Exception as e:
        logger.exception(e)
        return False


def get_secret_hash(plain: Union[str, bytes]):
    return ph.hash(plain)


def generate_secure_password(length=12):
    if length < 8:
        raise ValueError("Password length should be at least 8 characters")

    special_characters = "!@#$%^&*_+"
    characters = string.ascii_letters + string.digits + special_characters
    while True:
        password = "".join(secrets.choice(characters) for i in range(length))
        if (
            any(c.islower() for c in password)
            and any(c.isupper() for c in password)
            and any(c.isdigit() for c in password)
            and any(c in special_characters for c in password)
        ):
            return password


# TODO: split access token and refresh token into two classes for security
#       Now you can actually use access token to refresh, it's a bug that needs to be fixed!
class JWTManager:
    def __init__(
        self,
        secret_key: str,
        algorithm: str = "HS256",
        expires_delta: Optional[timedelta] = None,
    ):
        if expires_delta is None:
            expires_delta = timedelta(minutes=JWT_TOKEN_EXPIRE_MINUTES)
        self.secret_key = secret_key
        self.algorithm = algorithm
        self.expires_delta = expires_delta

    def _create_jwt_token(
        self, username: str, expires_delta: Optional[timedelta] = None
    ):
        if expires_delta is None:
            expires_delta = self.expires_delta
        to_encode = {"sub": username}
        expire = datetime.now(timezone.utc) + expires_delta
        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(to_encode, self.secret_key, algorithm=self.algorithm)
        return encoded_jwt

    def create_access_token(self, username: str):
        return self._create_jwt_token(username)

    def create_refresh_token(self, username: str):
        return self._create_jwt_token(username, expires_delta=self.expires_delta * 24)

    def decode_jwt_token(self, token: str):
        return jwt.decode(token, self.secret_key, algorithms=[self.algorithm])


jwt_manager = JWTManager(get_settings().jwt_secret_key)
