import type { WorkspaceQuotaType } from "./WorkspaceQuotaType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type ReplaceWorkspaceQuotaPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type ReplaceWorkspaceQuota200Type = WorkspaceQuotaType;
/**
 * @description Request error
*/
export type ReplaceWorkspaceQuota400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type ReplaceWorkspaceQuota401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type ReplaceWorkspaceQuota404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type ReplaceWorkspaceQuota409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type ReplaceWorkspaceQuota412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type ReplaceWorkspaceQuota422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type ReplaceWorkspaceQuota500Type = ErrorInternalType;
export type ReplaceWorkspaceQuotaMutationRequestType = WorkspaceQuotaType;
/**
 * @description Successful Response
*/
export type ReplaceWorkspaceQuotaMutationResponseType = WorkspaceQuotaType;
export type ReplaceWorkspaceQuotaTypeMutation = {
    Response: ReplaceWorkspaceQuotaMutationResponseType;
    Request: ReplaceWorkspaceQuotaMutationRequestType;
    PathParams: ReplaceWorkspaceQuotaPathParamsType;
    Errors: ReplaceWorkspaceQuota400Type | ReplaceWorkspaceQuota401Type | ReplaceWorkspaceQuota404Type | ReplaceWorkspaceQuota409Type | ReplaceWorkspaceQuota412Type | ReplaceWorkspaceQuota422Type | ReplaceWorkspaceQuota500Type;
};
