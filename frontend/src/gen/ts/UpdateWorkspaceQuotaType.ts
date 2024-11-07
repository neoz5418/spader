import type { WorkspaceQuotaType } from "./WorkspaceQuotaType";
import type { ErrorType } from "./ErrorType";

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
export type UpdateWorkspaceQuota400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type UpdateWorkspaceQuota401Type = ErrorType;
/**
 * @description Not found
*/
export type UpdateWorkspaceQuota404Type = ErrorType;
/**
 * @description Validation error
*/
export type UpdateWorkspaceQuota422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type UpdateWorkspaceQuota429Type = ErrorType;
/**
 * @description Internal server error
*/
export type UpdateWorkspaceQuota500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type UpdateWorkspaceQuota503Type = ErrorType;
export type UpdateWorkspaceQuotaMutationRequestType = WorkspaceQuotaType;
/**
 * @description Successful Response
*/
export type UpdateWorkspaceQuotaMutationResponseType = WorkspaceQuotaType;
export type UpdateWorkspaceQuotaTypeMutation = {
    Response: UpdateWorkspaceQuotaMutationResponseType;
    Request: UpdateWorkspaceQuotaMutationRequestType;
    PathParams: UpdateWorkspaceQuotaPathParamsType;
    Errors: UpdateWorkspaceQuota400Type | UpdateWorkspaceQuota401Type | UpdateWorkspaceQuota404Type | UpdateWorkspaceQuota422Type | UpdateWorkspaceQuota429Type | UpdateWorkspaceQuota500Type | UpdateWorkspaceQuota503Type;
};
