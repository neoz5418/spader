import type { CursorListOperationType } from "./CursorListOperationType";
import type { ErrorType } from "./ErrorType";

 export type ListWorkspaceOperationsPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    zone: string;
};
export type ListWorkspaceOperationsQueryParamsType = {
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
export type ListWorkspaceOperations200Type = CursorListOperationType;
/**
 * @description Request error
*/
export type ListWorkspaceOperations400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type ListWorkspaceOperations401Type = ErrorType;
/**
 * @description Not found
*/
export type ListWorkspaceOperations404Type = ErrorType;
/**
 * @description Validation error
*/
export type ListWorkspaceOperations422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type ListWorkspaceOperations429Type = ErrorType;
/**
 * @description Internal server error
*/
export type ListWorkspaceOperations500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type ListWorkspaceOperations503Type = ErrorType;
/**
 * @description Successful Response
*/
export type ListWorkspaceOperationsQueryResponseType = CursorListOperationType;
export type ListWorkspaceOperationsTypeQuery = {
    Response: ListWorkspaceOperationsQueryResponseType;
    PathParams: ListWorkspaceOperationsPathParamsType;
    QueryParams: ListWorkspaceOperationsQueryParamsType;
    Errors: ListWorkspaceOperations400Type | ListWorkspaceOperations401Type | ListWorkspaceOperations404Type | ListWorkspaceOperations422Type | ListWorkspaceOperations429Type | ListWorkspaceOperations500Type | ListWorkspaceOperations503Type;
};