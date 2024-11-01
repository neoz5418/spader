import os
from contextlib import asynccontextmanager
from starlette.middleware.cors import CORSMiddleware
import uvicorn
from fastapi.routing import APIRoute
from starlette.responses import JSONResponse
from starlette.types import Message
from fastapi import FastAPI, status, Depends, Request, Response
from fastapi.encoders import jsonable_encoder
from fastapi.exceptions import RequestValidationError
from fastapi.responses import PlainTextResponse
from fastapi.security import OAuth2PasswordBearer
from starlette.exceptions import HTTPException as StarletteHTTPException
from starlette.background import BackgroundTask
from routers import workspaces, users, instances, types, oidc
from services.security import JWTManager
from services.logging import setup_logging
from services.db import get_session, create_db_and_tables, init_admin_user
import logging

setup_logging()

logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(a: FastAPI):
    await create_db_and_tables()
    await init_admin_user()
    yield

app = FastAPI(
    title="spader-api",
    version="1.0.0",
    description="Spader API",
    responses={
        status.HTTP_400_BAD_REQUEST: {
            "model": types.Error,
            "description": "Request error",
        },
        status.HTTP_422_UNPROCESSABLE_ENTITY: {
            "model": types.Error,
            "description": "Validation error",
        },
        status.HTTP_429_TOO_MANY_REQUESTS: {
            "model": types.Error,
            "description": "Rate limit exceeded",
        },
        status.HTTP_503_SERVICE_UNAVAILABLE: {
            "model": types.Error,
            "description": "Service unavailable",
        },
        status.HTTP_401_UNAUTHORIZED: {
            "model": types.Error,
            "description": "Unauthorized",
        },
        status.HTTP_404_NOT_FOUND: {
            "model": types.Error,
            "description": "Not found",
        },
        status.HTTP_500_INTERNAL_SERVER_ERROR: {
            "model": types.Error,
            "description": "Internal server error",
        },
    },
    dependencies=[Depends(get_session)],
    lifespan=lifespan,
)


@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse(jsonable_encoder(exc.detail), status_code=exc.status_code)


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):
    return JSONResponse(jsonable_encoder(types.Error.from_exception(exc)), status_code=400)

async def set_body(request: Request, body: bytes):
    """Utility function to recreate the body of a request"""

    async def receive() -> Message:
        return {"type": "http.request", "body": body}

    request._receive = receive

@app.middleware("http")
async def middleware_logger(request: Request, call_next):
    request_body = await request.body()
    await set_body(request, request_body)
    try:
        response = await call_next(request)
    except Exception as exc:
        logger.exception({
            "request_body": request_body.decode("utf-8"),
            "request_headers": dict(request.headers),
            "request_query_params": dict(request.query_params),
            "request_method": request.method,
            "request_url": str(request.url),
            "error_message": str(exc),
        })
        raise exc

    response_body = b""
    async for chunk in response.body_iterator:
        response_body += chunk
    task = BackgroundTask(logger.info,{
        "request_body": request_body.decode("utf-8"),
        "request_headers": dict(request.headers),
        "request_query_params": dict(request.query_params),
        "request_method": request.method,
        "request_url": str(request.url),
        "response_body": response_body.decode("utf-8"),
        "response_headers": dict(response.headers),
        "response_media_type": response.media_type,
        "response_status_code": response.status_code,
    })
    return Response(
        content=response_body,
        status_code=response.status_code,
        headers=dict(response.headers),
        media_type=response.media_type,
        background=task,
    )

origins = [
    "*",
    # "http://localhost",
    # "http://localhost:8080",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router)
app.include_router(workspaces.router)
app.include_router(instances.router)
app.include_router(oidc.router)
for route in app.routes:
    if isinstance(route, APIRoute):
        route.operation_id = route.name
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)