import type { WorkspaceZoneQuotaType } from "./WorkspaceZoneQuotaType";
import type { ErrorType } from "./ErrorType";

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
export type GetWorkspaceZoneQuota400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type GetWorkspaceZoneQuota401Type = ErrorType;
/**
 * @description Not found
*/
export type GetWorkspaceZoneQuota404Type = ErrorType;
/**
 * @description Validation error
*/
export type GetWorkspaceZoneQuota422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type GetWorkspaceZoneQuota429Type = ErrorType;
/**
 * @description Internal server error
*/
export type GetWorkspaceZoneQuota500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type GetWorkspaceZoneQuota503Type = ErrorType;
/**
 * @description Successful Response
*/
export type GetWorkspaceZoneQuotaQueryResponseType = WorkspaceZoneQuotaType;
export type GetWorkspaceZoneQuotaTypeQuery = {
    Response: GetWorkspaceZoneQuotaQueryResponseType;
    PathParams: GetWorkspaceZoneQuotaPathParamsType;
    Errors: GetWorkspaceZoneQuota400Type | GetWorkspaceZoneQuota401Type | GetWorkspaceZoneQuota404Type | GetWorkspaceZoneQuota422Type | GetWorkspaceZoneQuota429Type | GetWorkspaceZoneQuota500Type | GetWorkspaceZoneQuota503Type;
};
