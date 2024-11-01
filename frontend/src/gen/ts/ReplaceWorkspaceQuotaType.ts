import type { WorkspaceQuotaType } from "./WorkspaceQuotaType";
import type { ErrorType } from "./ErrorType";

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
export type ReplaceWorkspaceQuota400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type ReplaceWorkspaceQuota401Type = ErrorType;
/**
 * @description Not found
*/
export type ReplaceWorkspaceQuota404Type = ErrorType;
/**
 * @description Validation error
*/
export type ReplaceWorkspaceQuota422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type ReplaceWorkspaceQuota429Type = ErrorType;
/**
 * @description Internal server error
*/
export type ReplaceWorkspaceQuota500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type ReplaceWorkspaceQuota503Type = ErrorType;
export type ReplaceWorkspaceQuotaMutationRequestType = WorkspaceQuotaType;
/**
 * @description Successful Response
*/
export type ReplaceWorkspaceQuotaMutationResponseType = WorkspaceQuotaType;
export type ReplaceWorkspaceQuotaTypeMutation = {
    Response: ReplaceWorkspaceQuotaMutationResponseType;
    Request: ReplaceWorkspaceQuotaMutationRequestType;
    PathParams: ReplaceWorkspaceQuotaPathParamsType;
    Errors: ReplaceWorkspaceQuota400Type | ReplaceWorkspaceQuota401Type | ReplaceWorkspaceQuota404Type | ReplaceWorkspaceQuota422Type | ReplaceWorkspaceQuota429Type | ReplaceWorkspaceQuota500Type | ReplaceWorkspaceQuota503Type;
};