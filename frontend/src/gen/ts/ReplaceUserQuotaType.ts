import type { UserQuotaType } from "./UserQuotaType";
import type { ErrorType } from "./ErrorType";

 export type ReplaceUserQuotaPathParamsType = {
    /**
     * @type string
    */
    username: string;
};
/**
 * @description Successful Response
*/
export type ReplaceUserQuota200Type = UserQuotaType;
/**
 * @description Request error
*/
export type ReplaceUserQuota400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type ReplaceUserQuota401Type = ErrorType;
/**
 * @description Not found
*/
export type ReplaceUserQuota404Type = ErrorType;
/**
 * @description Validation error
*/
export type ReplaceUserQuota422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type ReplaceUserQuota429Type = ErrorType;
/**
 * @description Internal server error
*/
export type ReplaceUserQuota500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type ReplaceUserQuota503Type = ErrorType;
/**
 * @description Successful Response
*/
export type ReplaceUserQuotaMutationResponseType = UserQuotaType;
export type ReplaceUserQuotaTypeMutation = {
    Response: ReplaceUserQuotaMutationResponseType;
    PathParams: ReplaceUserQuotaPathParamsType;
    Errors: ReplaceUserQuota400Type | ReplaceUserQuota401Type | ReplaceUserQuota404Type | ReplaceUserQuota422Type | ReplaceUserQuota429Type | ReplaceUserQuota500Type | ReplaceUserQuota503Type;
};