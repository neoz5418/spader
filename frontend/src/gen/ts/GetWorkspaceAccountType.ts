import type { WorkspaceAccountType } from "./WorkspaceAccountType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type GetWorkspaceAccount400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type GetWorkspaceAccount401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type GetWorkspaceAccount404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type GetWorkspaceAccount409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type GetWorkspaceAccount412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type GetWorkspaceAccount422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type GetWorkspaceAccount500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type GetWorkspaceAccountQueryResponseType = WorkspaceAccountType;
export type GetWorkspaceAccountTypeQuery = {
    Response: GetWorkspaceAccountQueryResponseType;
    PathParams: GetWorkspaceAccountPathParamsType;
    Errors: GetWorkspaceAccount400Type | GetWorkspaceAccount401Type | GetWorkspaceAccount404Type | GetWorkspaceAccount409Type | GetWorkspaceAccount412Type | GetWorkspaceAccount422Type | GetWorkspaceAccount500Type;
};
