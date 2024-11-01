import type { PaginatedListWorkspaceType } from "./PaginatedListWorkspaceType";
import type { ErrorType } from "./ErrorType";

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
     * @default 20
     * @type integer | undefined
    */
    limit?: number;
    /**
     * @default 1
     * @type integer | undefined
    */
    page?: number;
    /**
     * @default ""
     * @type string | undefined
    */
    before?: string;
    /**
     * @default ""
     * @type string | undefined
    */
    after?: string;
};
/**
 * @description Successful Response
*/
export type ListUserWorkspaces200Type = PaginatedListWorkspaceType;
/**
 * @description Request error
*/
export type ListUserWorkspaces400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type ListUserWorkspaces401Type = ErrorType;
/**
 * @description Not found
*/
export type ListUserWorkspaces404Type = ErrorType;
/**
 * @description Validation error
*/
export type ListUserWorkspaces422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type ListUserWorkspaces429Type = ErrorType;
/**
 * @description Internal server error
*/
export type ListUserWorkspaces500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type ListUserWorkspaces503Type = ErrorType;
/**
 * @description Successful Response
*/
export type ListUserWorkspacesQueryResponseType = PaginatedListWorkspaceType;
export type ListUserWorkspacesTypeQuery = {
    Response: ListUserWorkspacesQueryResponseType;
    PathParams: ListUserWorkspacesPathParamsType;
    QueryParams: ListUserWorkspacesQueryParamsType;
    Errors: ListUserWorkspaces400Type | ListUserWorkspaces401Type | ListUserWorkspaces404Type | ListUserWorkspaces422Type | ListUserWorkspaces429Type | ListUserWorkspaces500Type | ListUserWorkspaces503Type;
};