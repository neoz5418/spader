import type { WorkspaceType } from "./WorkspaceType";
import type { ErrorType } from "./ErrorType";
import type { WorkspaceCreateType } from "./WorkspaceCreateType";

 export type CreateWorkspacePathParamsType = {
    /**
     * @type string
    */
    username: string;
};
/**
 * @description Successful Response
*/
export type CreateWorkspace201Type = WorkspaceType;
/**
 * @description Request error
*/
export type CreateWorkspace400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type CreateWorkspace401Type = ErrorType;
/**
 * @description Not found
*/
export type CreateWorkspace404Type = ErrorType;
/**
 * @description Validation error
*/
export type CreateWorkspace422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type CreateWorkspace429Type = ErrorType;
/**
 * @description Internal server error
*/
export type CreateWorkspace500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type CreateWorkspace503Type = ErrorType;
export type CreateWorkspaceMutationRequestType = WorkspaceCreateType;
/**
 * @description Successful Response
*/
export type CreateWorkspaceMutationResponseType = WorkspaceType;
export type CreateWorkspaceTypeMutation = {
    Response: CreateWorkspaceMutationResponseType;
    Request: CreateWorkspaceMutationRequestType;
    PathParams: CreateWorkspacePathParamsType;
    Errors: CreateWorkspace400Type | CreateWorkspace401Type | CreateWorkspace404Type | CreateWorkspace422Type | CreateWorkspace429Type | CreateWorkspace500Type | CreateWorkspace503Type;
};
