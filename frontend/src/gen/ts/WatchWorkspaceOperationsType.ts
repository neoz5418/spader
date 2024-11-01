import type { WatchEventType } from "./WatchEventType";
import type { ErrorType } from "./ErrorType";

 export type WatchWorkspaceOperationsPathParamsType = {
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
export type WatchWorkspaceOperations200Type = WatchEventType;
/**
 * @description Request error
*/
export type WatchWorkspaceOperations400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type WatchWorkspaceOperations401Type = ErrorType;
/**
 * @description Not found
*/
export type WatchWorkspaceOperations404Type = ErrorType;
/**
 * @description Validation error
*/
export type WatchWorkspaceOperations422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type WatchWorkspaceOperations429Type = ErrorType;
/**
 * @description Internal server error
*/
export type WatchWorkspaceOperations500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type WatchWorkspaceOperations503Type = ErrorType;
/**
 * @description Successful Response
*/
export type WatchWorkspaceOperationsQueryResponseType = WatchEventType;
export type WatchWorkspaceOperationsTypeQuery = {
    Response: WatchWorkspaceOperationsQueryResponseType;
    PathParams: WatchWorkspaceOperationsPathParamsType;
    Errors: WatchWorkspaceOperations400Type | WatchWorkspaceOperations401Type | WatchWorkspaceOperations404Type | WatchWorkspaceOperations422Type | WatchWorkspaceOperations429Type | WatchWorkspaceOperations500Type | WatchWorkspaceOperations503Type;
};