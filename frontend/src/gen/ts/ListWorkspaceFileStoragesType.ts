import type { PaginatedListFileStorageType } from "./PaginatedListFileStorageType";
import type { ErrorType } from "./ErrorType";

 export type ListWorkspaceFileStoragesPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    zone: string;
};
export type ListWorkspaceFileStoragesQueryParamsType = {
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
export type ListWorkspaceFileStorages200Type = PaginatedListFileStorageType;
/**
 * @description Request error
*/
export type ListWorkspaceFileStorages400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type ListWorkspaceFileStorages401Type = ErrorType;
/**
 * @description Not found
*/
export type ListWorkspaceFileStorages404Type = ErrorType;
/**
 * @description Validation error
*/
export type ListWorkspaceFileStorages422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type ListWorkspaceFileStorages429Type = ErrorType;
/**
 * @description Internal server error
*/
export type ListWorkspaceFileStorages500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type ListWorkspaceFileStorages503Type = ErrorType;
/**
 * @description Successful Response
*/
export type ListWorkspaceFileStoragesQueryResponseType = PaginatedListFileStorageType;
export type ListWorkspaceFileStoragesTypeQuery = {
    Response: ListWorkspaceFileStoragesQueryResponseType;
    PathParams: ListWorkspaceFileStoragesPathParamsType;
    QueryParams: ListWorkspaceFileStoragesQueryParamsType;
    Errors: ListWorkspaceFileStorages400Type | ListWorkspaceFileStorages401Type | ListWorkspaceFileStorages404Type | ListWorkspaceFileStorages422Type | ListWorkspaceFileStorages429Type | ListWorkspaceFileStorages500Type | ListWorkspaceFileStorages503Type;
};