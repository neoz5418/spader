import type { ErrorType } from "./ErrorType";

 export type DeleteWorkspacePathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type DeleteWorkspace204Type = any;
/**
 * @description Request error
*/
export type DeleteWorkspace400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type DeleteWorkspace401Type = ErrorType;
/**
 * @description Not found
*/
export type DeleteWorkspace404Type = ErrorType;
/**
 * @description Validation error
*/
export type DeleteWorkspace422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type DeleteWorkspace429Type = ErrorType;
/**
 * @description Internal server error
*/
export type DeleteWorkspace500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type DeleteWorkspace503Type = ErrorType;
export type DeleteWorkspaceMutationResponseType = any;
export type DeleteWorkspaceTypeMutation = {
    Response: DeleteWorkspaceMutationResponseType;
    PathParams: DeleteWorkspacePathParamsType;
    Errors: DeleteWorkspace400Type | DeleteWorkspace401Type | DeleteWorkspace404Type | DeleteWorkspace422Type | DeleteWorkspace429Type | DeleteWorkspace500Type | DeleteWorkspace503Type;
};
