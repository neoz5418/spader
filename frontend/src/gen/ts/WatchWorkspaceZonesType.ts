import type { WatchEventType } from "./WatchEventType";
import type { ErrorType } from "./ErrorType";

 export type WatchWorkspaceZonesPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type WatchWorkspaceZones200Type = WatchEventType;
/**
 * @description Request error
*/
export type WatchWorkspaceZones400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type WatchWorkspaceZones401Type = ErrorType;
/**
 * @description Not found
*/
export type WatchWorkspaceZones404Type = ErrorType;
/**
 * @description Validation error
*/
export type WatchWorkspaceZones422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type WatchWorkspaceZones429Type = ErrorType;
/**
 * @description Internal server error
*/
export type WatchWorkspaceZones500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type WatchWorkspaceZones503Type = ErrorType;
/**
 * @description Successful Response
*/
export type WatchWorkspaceZonesQueryResponseType = WatchEventType;
export type WatchWorkspaceZonesTypeQuery = {
    Response: WatchWorkspaceZonesQueryResponseType;
    PathParams: WatchWorkspaceZonesPathParamsType;
    Errors: WatchWorkspaceZones400Type | WatchWorkspaceZones401Type | WatchWorkspaceZones404Type | WatchWorkspaceZones422Type | WatchWorkspaceZones429Type | WatchWorkspaceZones500Type | WatchWorkspaceZones503Type;
};