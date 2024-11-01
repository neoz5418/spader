import type { CursorListOperationType } from "./CursorListOperationType";
import type { ErrorType } from "./ErrorType";

 export type GetWorkspaceOperationPathParamsType = {
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
export type GetWorkspaceOperation200Type = CursorListOperationType;
/**
 * @description Request error
*/
export type GetWorkspaceOperation400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type GetWorkspaceOperation401Type = ErrorType;
/**
 * @description Not found
*/
export type GetWorkspaceOperation404Type = ErrorType;
/**
 * @description Validation error
*/
export type GetWorkspaceOperation422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type GetWorkspaceOperation429Type = ErrorType;
/**
 * @description Internal server error
*/
export type GetWorkspaceOperation500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type GetWorkspaceOperation503Type = ErrorType;
/**
 * @description Successful Response
*/
export type GetWorkspaceOperationQueryResponseType = CursorListOperationType;
export type GetWorkspaceOperationTypeQuery = {
    Response: GetWorkspaceOperationQueryResponseType;
    PathParams: GetWorkspaceOperationPathParamsType;
    Errors: GetWorkspaceOperation400Type | GetWorkspaceOperation401Type | GetWorkspaceOperation404Type | GetWorkspaceOperation422Type | GetWorkspaceOperation429Type | GetWorkspaceOperation500Type | GetWorkspaceOperation503Type;
};