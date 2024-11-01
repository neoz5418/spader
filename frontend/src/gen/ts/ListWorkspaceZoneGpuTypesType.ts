import type { PaginatedListGpuTypeType } from "./PaginatedListGpuTypeType";
import type { ErrorType } from "./ErrorType";

 export type ListWorkspaceZoneGpuTypesPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    zone: string;
};
/**
 * @description Successful Response
*/
export type ListWorkspaceZoneGpuTypes200Type = PaginatedListGpuTypeType;
/**
 * @description Request error
*/
export type ListWorkspaceZoneGpuTypes400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type ListWorkspaceZoneGpuTypes401Type = ErrorType;
/**
 * @description Not found
*/
export type ListWorkspaceZoneGpuTypes404Type = ErrorType;
/**
 * @description Validation error
*/
export type ListWorkspaceZoneGpuTypes422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type ListWorkspaceZoneGpuTypes429Type = ErrorType;
/**
 * @description Internal server error
*/
export type ListWorkspaceZoneGpuTypes500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type ListWorkspaceZoneGpuTypes503Type = ErrorType;
/**
 * @description Successful Response
*/
export type ListWorkspaceZoneGpuTypesQueryResponseType = PaginatedListGpuTypeType;
export type ListWorkspaceZoneGpuTypesTypeQuery = {
    Response: ListWorkspaceZoneGpuTypesQueryResponseType;
    PathParams: ListWorkspaceZoneGpuTypesPathParamsType;
    Errors: ListWorkspaceZoneGpuTypes400Type | ListWorkspaceZoneGpuTypes401Type | ListWorkspaceZoneGpuTypes404Type | ListWorkspaceZoneGpuTypes422Type | ListWorkspaceZoneGpuTypes429Type | ListWorkspaceZoneGpuTypes500Type | ListWorkspaceZoneGpuTypes503Type;
};