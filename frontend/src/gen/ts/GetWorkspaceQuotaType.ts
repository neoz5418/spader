import type { WorkspaceQuotaType } from "./WorkspaceQuotaType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type GetWorkspaceQuotaPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type GetWorkspaceQuota200Type = WorkspaceQuotaType;
/**
 * @description Request error
*/
export type GetWorkspaceQuota400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type GetWorkspaceQuota401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type GetWorkspaceQuota404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type GetWorkspaceQuota409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type GetWorkspaceQuota412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type GetWorkspaceQuota422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type GetWorkspaceQuota500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type GetWorkspaceQuotaQueryResponseType = WorkspaceQuotaType;
export type GetWorkspaceQuotaTypeQuery = {
    Response: GetWorkspaceQuotaQueryResponseType;
    PathParams: GetWorkspaceQuotaPathParamsType;
    Errors: GetWorkspaceQuota400Type | GetWorkspaceQuota401Type | GetWorkspaceQuota404Type | GetWorkspaceQuota409Type | GetWorkspaceQuota412Type | GetWorkspaceQuota422Type | GetWorkspaceQuota500Type;
};
