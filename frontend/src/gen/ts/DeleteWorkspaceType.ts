import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type DeleteWorkspace400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type DeleteWorkspace401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type DeleteWorkspace404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type DeleteWorkspace409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type DeleteWorkspace412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type DeleteWorkspace422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type DeleteWorkspace500Type = ErrorInternalType;
export type DeleteWorkspaceMutationResponseType = any;
export type DeleteWorkspaceTypeMutation = {
    Response: DeleteWorkspaceMutationResponseType;
    PathParams: DeleteWorkspacePathParamsType;
    Errors: DeleteWorkspace400Type | DeleteWorkspace401Type | DeleteWorkspace404Type | DeleteWorkspace409Type | DeleteWorkspace412Type | DeleteWorkspace422Type | DeleteWorkspace500Type;
};
