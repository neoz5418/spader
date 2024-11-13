import type { PaginatedListZoneType } from "./PaginatedListZoneType";
import type { ErrorType } from "./ErrorType";

 export type ListWorkspaceZonesPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
export type ListWorkspaceZonesQueryParamsType = {
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
export type ListWorkspaceZones200Type = PaginatedListZoneType;
/**
 * @description Request error
*/
export type ListWorkspaceZones400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type ListWorkspaceZones401Type = ErrorType;
/**
 * @description Not found
*/
export type ListWorkspaceZones404Type = ErrorType;
/**
 * @description Validation error
*/
export type ListWorkspaceZones422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type ListWorkspaceZones429Type = ErrorType;
/**
 * @description Internal server error
*/
export type ListWorkspaceZones500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type ListWorkspaceZones503Type = ErrorType;
/**
 * @description Successful Response
*/
export type ListWorkspaceZonesQueryResponseType = PaginatedListZoneType;
export type ListWorkspaceZonesTypeQuery = {
    Response: ListWorkspaceZonesQueryResponseType;
    PathParams: ListWorkspaceZonesPathParamsType;
    QueryParams: ListWorkspaceZonesQueryParamsType;
    Errors: ListWorkspaceZones400Type | ListWorkspaceZones401Type | ListWorkspaceZones404Type | ListWorkspaceZones422Type | ListWorkspaceZones429Type | ListWorkspaceZones500Type | ListWorkspaceZones503Type;
};