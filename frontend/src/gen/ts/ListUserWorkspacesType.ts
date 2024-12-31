import type { PaginatedListWorkspaceType } from "./PaginatedListWorkspaceType";
import type { ErrorInternalType } from "./ErrorInternalType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorRefreshTokenCannotBeEmptyType } from "./ErrorRefreshTokenCannotBeEmptyType";
import type { ErrorRefreshTokenExpiredType } from "./ErrorRefreshTokenExpiredType";
import type { ErrorRefreshTokenInvalidType } from "./ErrorRefreshTokenInvalidType";
import type { ErrorInsufficientBalanceType } from "./ErrorInsufficientBalanceType";
import type { ErrorForbiddenType } from "./ErrorForbiddenType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorUsernameOrEmailCannotBeEmptyType } from "./ErrorUsernameOrEmailCannotBeEmptyType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";

 export type ListUserWorkspacesPathParamsType = {
    /**
     * @type string
    */
    username: string;
};
export type ListUserWorkspacesQueryParamsType = {
    /**
     * @type string | undefined
    */
    search?: string;
    /**
     * @default 0
     * @type integer | undefined
    */
    offset?: number;
    /**
     * @default 20
     * @type integer | undefined
    */
    limit?: number;
};
/**
 * @description Successful Response
*/
export type ListUserWorkspaces200Type = PaginatedListWorkspaceType;
/**
 * @description Unprocessable Entity
*/
export type ListUserWorkspaces422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
/**
 * @description Successful Response
*/
export type ListUserWorkspacesQueryResponseType = PaginatedListWorkspaceType;
export type ListUserWorkspacesTypeQuery = {
    Response: ListUserWorkspacesQueryResponseType;
    PathParams: ListUserWorkspacesPathParamsType;
    QueryParams: ListUserWorkspacesQueryParamsType;
    Errors: ListUserWorkspaces422Type;
};
