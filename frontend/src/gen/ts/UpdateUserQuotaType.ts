import type { UserQuotaType } from "./UserQuotaType";
import type { ErrorType } from "./ErrorType";

 export type UpdateUserQuotaPathParamsType = {
    /**
     * @type string
    */
    username: string;
};
/**
 * @description Successful Response
*/
export type UpdateUserQuota200Type = UserQuotaType;
/**
 * @description Request error
*/
export type UpdateUserQuota400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type UpdateUserQuota401Type = ErrorType;
/**
 * @description Not found
*/
export type UpdateUserQuota404Type = ErrorType;
/**
 * @description Validation error
*/
export type UpdateUserQuota422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type UpdateUserQuota429Type = ErrorType;
/**
 * @description Internal server error
*/
export type UpdateUserQuota500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type UpdateUserQuota503Type = ErrorType;
/**
 * @description Successful Response
*/
export type UpdateUserQuotaMutationResponseType = UserQuotaType;
export type UpdateUserQuotaTypeMutation = {
    Response: UpdateUserQuotaMutationResponseType;
    PathParams: UpdateUserQuotaPathParamsType;
    Errors: UpdateUserQuota400Type | UpdateUserQuota401Type | UpdateUserQuota404Type | UpdateUserQuota422Type | UpdateUserQuota429Type | UpdateUserQuota500Type | UpdateUserQuota503Type;
};
