import type { UserQuotaType } from "./UserQuotaType";
import type { ErrorType } from "./ErrorType";

 export type GetUserQuotaPathParamsType = {
    /**
     * @type string
    */
    username: string;
};
/**
 * @description Successful Response
*/
export type GetUserQuota200Type = UserQuotaType;
/**
 * @description Request error
*/
export type GetUserQuota400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type GetUserQuota401Type = ErrorType;
/**
 * @description Not found
*/
export type GetUserQuota404Type = ErrorType;
/**
 * @description Validation error
*/
export type GetUserQuota422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type GetUserQuota429Type = ErrorType;
/**
 * @description Internal server error
*/
export type GetUserQuota500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type GetUserQuota503Type = ErrorType;
/**
 * @description Successful Response
*/
export type GetUserQuotaQueryResponseType = UserQuotaType;
export type GetUserQuotaTypeQuery = {
    Response: GetUserQuotaQueryResponseType;
    PathParams: GetUserQuotaPathParamsType;
    Errors: GetUserQuota400Type | GetUserQuota401Type | GetUserQuota404Type | GetUserQuota422Type | GetUserQuota429Type | GetUserQuota500Type | GetUserQuota503Type;
};
