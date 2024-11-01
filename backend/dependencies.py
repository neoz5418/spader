from typing import Annotated
from fastapi import Depends
from sqlmodel.ext.asyncio.session import AsyncSession

from routers.types import User
from services.db import get_session
from services.auth import get_current_user, get_admin_user
from services.common import ListParams

SessionDep = Annotated[AsyncSession, Depends(get_session)]
ListParamsDep = Annotated[ListParams, Depends(ListParams)]
CurrentUserDep = Depends(get_current_user)
CurrentAdminUserDep = Depends(get_admin_user)
CurrentUserDepAnnotated = Annotated[User, CurrentUserDep]
CurrentAdminUserDepAnnotated = Annotated[User, CurrentAdminUserDep]