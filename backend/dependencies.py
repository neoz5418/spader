from typing import Annotated
from fastapi import Depends, Security
from sqlmodel.ext.asyncio.session import AsyncSession

from routers.types import User
from services.db import get_session
from services.auth import get_current_user, get_admin_user
from services.common import ListParams, PERMISSION_GLOBAL_ADMIN, PERMISSION_REGULAR_USER

SessionDep = Annotated[AsyncSession, Depends(get_session)]
ListParamsDep = Annotated[ListParams, Depends(ListParams)]
CurrentUserDep = Security(get_current_user, scopes=PERMISSION_REGULAR_USER)
CurrentAdminUserDep = Security(get_admin_user, scopes=PERMISSION_GLOBAL_ADMIN)
CurrentUserDepAnnotated = Annotated[User, CurrentUserDep]
CurrentAdminUserDepAnnotated = Annotated[User, CurrentAdminUserDep]
