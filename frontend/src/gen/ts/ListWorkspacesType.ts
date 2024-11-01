import type { ListWorkspacesSortOptionsType } from "./ListWorkspacesSortOptionsType";
import type { DirectionType } from "./DirectionType";
import type { PaginatedListWorkspaceType } from "./PaginatedListWorkspaceType";
import type { ErrorType } from "./ErrorType";

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
export type ListWorkspaces200Type = PaginatedListWorkspaceType;
/**
 * @description Request error
*/
export type ListWorkspaces400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type ListWorkspaces401Type = ErrorType;
/**
 * @description Not found
*/
export type ListWorkspaces404Type = ErrorType;
/**
 * @description Validation error
*/
export type ListWorkspaces422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type ListWorkspaces429Type = ErrorType;
/**
 * @description Internal server error
*/
export type ListWorkspaces500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type ListWorkspaces503Type = ErrorType;
/**
 * @description Successful Response
*/
export type ListWorkspacesQueryResponseType = PaginatedListWorkspaceType;
export type ListWorkspacesTypeQuery = {
    Response: ListWorkspacesQueryResponseType;
    QueryParams: ListWorkspacesQueryParamsType;
    Errors: ListWorkspaces400Type | ListWorkspaces401Type | ListWorkspaces404Type | ListWorkspaces422Type | ListWorkspaces429Type | ListWorkspaces500Type | ListWorkspaces503Type;
};