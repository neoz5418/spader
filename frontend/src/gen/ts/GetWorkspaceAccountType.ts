import type { WorkspaceAccountType } from "./WorkspaceAccountType";
import type { ErrorType } from "./ErrorType";

 export type GetWorkspaceAccountPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type GetWorkspaceAccount200Type = WorkspaceAccountType;
/**
 * @description Request error
*/
export type GetWorkspaceAccount400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type GetWorkspaceAccount401Type = ErrorType;
/**
 * @description Not found
*/
export type GetWorkspaceAccount404Type = ErrorType;
/**
 * @description Validation error
*/
export type GetWorkspaceAccount422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type GetWorkspaceAccount429Type = ErrorType;
/**
 * @description Internal server error
*/
export type GetWorkspaceAccount500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type GetWorkspaceAccount503Type = ErrorType;
/**
 * @description Successful Response
*/
export type GetWorkspaceAccountQueryResponseType = WorkspaceAccountType;
export type GetWorkspaceAccountTypeQuery = {
    Response: GetWorkspaceAccountQueryResponseType;
    PathParams: GetWorkspaceAccountPathParamsType;
    Errors: GetWorkspaceAccount400Type | GetWorkspaceAccount401Type | GetWorkspaceAccount404Type | GetWorkspaceAccount422Type | GetWorkspaceAccount429Type | GetWorkspaceAccount500Type | GetWorkspaceAccount503Type;
};
