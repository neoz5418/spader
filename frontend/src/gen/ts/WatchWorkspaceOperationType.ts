import type { WatchEventType } from "./WatchEventType";
import type { ErrorType } from "./ErrorType";

 export type WatchWorkspaceOperationPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    zone: string;
    /**
     * @type string, uuid
    */
    uid: string;
};
/**
 * @description Successful Response
*/
export type WatchWorkspaceOperation200Type = WatchEventType;
/**
 * @description Request error
*/
export type WatchWorkspaceOperation400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type WatchWorkspaceOperation401Type = ErrorType;
/**
 * @description Not found
*/
export type WatchWorkspaceOperation404Type = ErrorType;
/**
 * @description Validation error
*/
export type WatchWorkspaceOperation422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type WatchWorkspaceOperation429Type = ErrorType;
/**
 * @description Internal server error
*/
export type WatchWorkspaceOperation500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type WatchWorkspaceOperation503Type = ErrorType;
/**
 * @description Successful Response
*/
export type WatchWorkspaceOperationQueryResponseType = WatchEventType;
export type WatchWorkspaceOperationTypeQuery = {
    Response: WatchWorkspaceOperationQueryResponseType;
    PathParams: WatchWorkspaceOperationPathParamsType;
    Errors: WatchWorkspaceOperation400Type | WatchWorkspaceOperation401Type | WatchWorkspaceOperation404Type | WatchWorkspaceOperation422Type | WatchWorkspaceOperation429Type | WatchWorkspaceOperation500Type | WatchWorkspaceOperation503Type;
};