import type { UserQuotaType } from "./UserQuotaType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type GetUserQuota400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type GetUserQuota401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type GetUserQuota404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type GetUserQuota409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type GetUserQuota412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type GetUserQuota422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type GetUserQuota500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type GetUserQuotaQueryResponseType = UserQuotaType;
export type GetUserQuotaTypeQuery = {
    Response: GetUserQuotaQueryResponseType;
    PathParams: GetUserQuotaPathParamsType;
    Errors: GetUserQuota400Type | GetUserQuota401Type | GetUserQuota404Type | GetUserQuota409Type | GetUserQuota412Type | GetUserQuota422Type | GetUserQuota500Type;
};
