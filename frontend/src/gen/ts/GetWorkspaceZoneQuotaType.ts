import type { WorkspaceZoneQuotaType } from "./WorkspaceZoneQuotaType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type GetWorkspaceZoneQuotaPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    zone: string;
};
/**
 * @description Successful Response
*/
export type GetWorkspaceZoneQuota200Type = WorkspaceZoneQuotaType;
/**
 * @description Request error
*/
export type GetWorkspaceZoneQuota400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type GetWorkspaceZoneQuota401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type GetWorkspaceZoneQuota404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type GetWorkspaceZoneQuota409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type GetWorkspaceZoneQuota412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type GetWorkspaceZoneQuota422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type GetWorkspaceZoneQuota500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type GetWorkspaceZoneQuotaQueryResponseType = WorkspaceZoneQuotaType;
export type GetWorkspaceZoneQuotaTypeQuery = {
    Response: GetWorkspaceZoneQuotaQueryResponseType;
    PathParams: GetWorkspaceZoneQuotaPathParamsType;
    Errors: GetWorkspaceZoneQuota400Type | GetWorkspaceZoneQuota401Type | GetWorkspaceZoneQuota404Type | GetWorkspaceZoneQuota409Type | GetWorkspaceZoneQuota412Type | GetWorkspaceZoneQuota422Type | GetWorkspaceZoneQuota500Type;
};
