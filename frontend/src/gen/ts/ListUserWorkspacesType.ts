import type { PaginatedListWorkspaceType } from "./PaginatedListWorkspaceType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
 * @description Request error
*/
export type ListUserWorkspaces400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type ListUserWorkspaces401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type ListUserWorkspaces404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type ListUserWorkspaces409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type ListUserWorkspaces412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type ListUserWorkspaces422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type ListUserWorkspaces500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type ListUserWorkspacesQueryResponseType = PaginatedListWorkspaceType;
export type ListUserWorkspacesTypeQuery = {
    Response: ListUserWorkspacesQueryResponseType;
    PathParams: ListUserWorkspacesPathParamsType;
    QueryParams: ListUserWorkspacesQueryParamsType;
    Errors: ListUserWorkspaces400Type | ListUserWorkspaces401Type | ListUserWorkspaces404Type | ListUserWorkspaces409Type | ListUserWorkspaces412Type | ListUserWorkspaces422Type | ListUserWorkspaces500Type;
};
