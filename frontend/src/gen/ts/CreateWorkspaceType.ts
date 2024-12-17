import type { WorkspaceType } from "./WorkspaceType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";
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
export type CreateWorkspace400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type CreateWorkspace401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type CreateWorkspace404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type CreateWorkspace409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type CreateWorkspace412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type CreateWorkspace422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type CreateWorkspace500Type = ErrorInternalType;
export type CreateWorkspaceMutationRequestType = WorkspaceCreateType;
/**
 * @description Successful Response
*/
export type CreateWorkspaceMutationResponseType = WorkspaceType;
export type CreateWorkspaceTypeMutation = {
    Response: CreateWorkspaceMutationResponseType;
    Request: CreateWorkspaceMutationRequestType;
    PathParams: CreateWorkspacePathParamsType;
    Errors: CreateWorkspace400Type | CreateWorkspace401Type | CreateWorkspace404Type | CreateWorkspace409Type | CreateWorkspace412Type | CreateWorkspace422Type | CreateWorkspace500Type;
};
