import type { WorkspaceQuotaType } from "./WorkspaceQuotaType";
import type { ErrorType } from "./ErrorType";

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
export type GetWorkspaceQuota400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type GetWorkspaceQuota401Type = ErrorType;
/**
 * @description Not found
*/
export type GetWorkspaceQuota404Type = ErrorType;
/**
 * @description Validation error
*/
export type GetWorkspaceQuota422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type GetWorkspaceQuota429Type = ErrorType;
/**
 * @description Internal server error
*/
export type GetWorkspaceQuota500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type GetWorkspaceQuota503Type = ErrorType;
/**
 * @description Successful Response
*/
export type GetWorkspaceQuotaQueryResponseType = WorkspaceQuotaType;
export type GetWorkspaceQuotaTypeQuery = {
    Response: GetWorkspaceQuotaQueryResponseType;
    PathParams: GetWorkspaceQuotaPathParamsType;
    Errors: GetWorkspaceQuota400Type | GetWorkspaceQuota401Type | GetWorkspaceQuota404Type | GetWorkspaceQuota422Type | GetWorkspaceQuota429Type | GetWorkspaceQuota500Type | GetWorkspaceQuota503Type;
};
