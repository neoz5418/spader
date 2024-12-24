from contextlib import asynccontextmanager

from starlette.middleware.cors import CORSMiddleware
import uvicorn
from fastapi.routing import APIRoute
from fastapi.middleware.gzip import GZipMiddleware
from fastapi.exceptions import RequestValidationError
from starlette.responses import JSONResponse
from starlette.types import Message
from fastapi import (
    FastAPI,
    Depends,
    Request,
    Response,
    HTTPException,
)
from fastapi.encoders import jsonable_encoder
from starlette.background import BackgroundTask
from dependencies import active_connections_set
from routers import workspaces, users, instances, oidc
from services.common import (
    error_from_exception,
    Errors,
)
from services.logger import setup_logging
from services.db import get_session, create_db_and_tables, init_admin_user, init_data
import logging

setup_logging()
# setup_logging(True)

logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(a: FastAPI):
    await create_db_and_tables()
    await init_admin_user()
    await init_data()
    yield
    # TODO: clear is not working
    for websocket in active_connections_set:
        await websocket.close(code=1001)


app = FastAPI(
    title="spader-api",
    version="1.0.0",
    description="Spader API",
    responses={
        "422": {
            "model": Errors,
        },
    },
    dependencies=[Depends(get_session)],
    lifespan=lifespan,
)


@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException):
    err = error_from_exception(request, exc)
    return JSONResponse(jsonable_encoder(err), status_code=err.status_code)


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    err = error_from_exception(request, exc)
    return JSONResponse(jsonable_encoder(err), status_code=err.status_code)


@app.exception_handler(Exception)
async def exception_handler(request: Request, exc: Exception):
    err = error_from_exception(request, exc)
    return JSONResponse(jsonable_encoder(err), status_code=err.status_code)


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
        logger.exception(
            {
                "request_body": request_body.decode("utf-8"),
                "request_headers": dict(request.headers),
                "request_query_params": dict(request.query_params),
                "request_method": request.method,
                "request_url": str(request.url),
                "error_message": str(exc),
            }
        )
        raise exc

    response_body = b""
    async for chunk in response.body_iterator:
        response_body += chunk
    task = BackgroundTask(
        logger.info,
        {
            "request_body": request_body.decode("utf-8"),
            "request_headers": dict(request.headers),
            "request_query_params": dict(request.query_params),
            "request_method": request.method,
            "request_url": str(request.url),
            "response_body": response_body.decode("utf-8"),
            "response_headers": dict(response.headers),
            "response_media_type": response.media_type,
            "response_status_code": response.status_code,
        },
    )
    return Response(
        content=response_body,
        status_code=response.status_code,
        headers=dict(response.headers),
        media_type=response.media_type,
        background=task,
    )


app.add_middleware(GZipMiddleware, minimum_size=1000, compresslevel=5)

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
