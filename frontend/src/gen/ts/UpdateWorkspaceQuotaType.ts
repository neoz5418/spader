import type { WorkspaceQuotaType } from "./WorkspaceQuotaType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type UpdateWorkspaceQuotaPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type UpdateWorkspaceQuota200Type = WorkspaceQuotaType;
/**
 * @description Request error
*/
export type UpdateWorkspaceQuota400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type UpdateWorkspaceQuota401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type UpdateWorkspaceQuota404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type UpdateWorkspaceQuota409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type UpdateWorkspaceQuota412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type UpdateWorkspaceQuota422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type UpdateWorkspaceQuota500Type = ErrorInternalType;
export type UpdateWorkspaceQuotaMutationRequestType = WorkspaceQuotaType;
/**
 * @description Successful Response
*/
export type UpdateWorkspaceQuotaMutationResponseType = WorkspaceQuotaType;
export type UpdateWorkspaceQuotaTypeMutation = {
    Response: UpdateWorkspaceQuotaMutationResponseType;
    Request: UpdateWorkspaceQuotaMutationRequestType;
    PathParams: UpdateWorkspaceQuotaPathParamsType;
    Errors: UpdateWorkspaceQuota400Type | UpdateWorkspaceQuota401Type | UpdateWorkspaceQuota404Type | UpdateWorkspaceQuota409Type | UpdateWorkspaceQuota412Type | UpdateWorkspaceQuota422Type | UpdateWorkspaceQuota500Type;
};
