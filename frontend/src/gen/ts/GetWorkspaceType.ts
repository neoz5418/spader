import type { WorkspaceType } from "./WorkspaceType";
import type { ErrorType } from "./ErrorType";

 export type GetWorkspacePathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type GetWorkspace200Type = WorkspaceType;
/**
 * @description Request error
*/
export type GetWorkspace400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type GetWorkspace401Type = ErrorType;
/**
 * @description Not found
*/
export type GetWorkspace404Type = ErrorType;
/**
 * @description Validation error
*/
export type GetWorkspace422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type GetWorkspace429Type = ErrorType;
/**
 * @description Internal server error
*/
export type GetWorkspace500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type GetWorkspace503Type = ErrorType;
/**
 * @description Successful Response
*/
export type GetWorkspaceQueryResponseType = WorkspaceType;
export type GetWorkspaceTypeQuery = {
    Response: GetWorkspaceQueryResponseType;
    PathParams: GetWorkspacePathParamsType;
    Errors: GetWorkspace400Type | GetWorkspace401Type | GetWorkspace404Type | GetWorkspace422Type | GetWorkspace429Type | GetWorkspace500Type | GetWorkspace503Type;
};