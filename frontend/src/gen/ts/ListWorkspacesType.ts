import type { ListWorkspacesSortOptionsType } from "./ListWorkspacesSortOptionsType";
import type { DirectionType } from "./DirectionType";
import type { PaginatedListWorkspaceType } from "./PaginatedListWorkspaceType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type ListWorkspacesQueryParamsType = {
    /**
     * @type string | undefined
    */
    sort?: ListWorkspacesSortOptionsType;
    /**
     * @type string | undefined
    */
    direction?: DirectionType;
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
export type ListWorkspaces200Type = PaginatedListWorkspaceType;
/**
 * @description Request error
*/
export type ListWorkspaces400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type ListWorkspaces401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type ListWorkspaces404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type ListWorkspaces409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type ListWorkspaces412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type ListWorkspaces422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type ListWorkspaces500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type ListWorkspacesQueryResponseType = PaginatedListWorkspaceType;
export type ListWorkspacesTypeQuery = {
    Response: ListWorkspacesQueryResponseType;
    QueryParams: ListWorkspacesQueryParamsType;
    Errors: ListWorkspaces400Type | ListWorkspaces401Type | ListWorkspaces404Type | ListWorkspaces409Type | ListWorkspaces412Type | ListWorkspaces422Type | ListWorkspaces500Type;
};
