import type { WorkspaceType } from "./WorkspaceType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type GetWorkspace400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type GetWorkspace401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type GetWorkspace404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type GetWorkspace409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type GetWorkspace412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type GetWorkspace422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type GetWorkspace500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type GetWorkspaceQueryResponseType = WorkspaceType;
export type GetWorkspaceTypeQuery = {
    Response: GetWorkspaceQueryResponseType;
    PathParams: GetWorkspacePathParamsType;
    Errors: GetWorkspace400Type | GetWorkspace401Type | GetWorkspace404Type | GetWorkspace409Type | GetWorkspace412Type | GetWorkspace422Type | GetWorkspace500Type;
};
