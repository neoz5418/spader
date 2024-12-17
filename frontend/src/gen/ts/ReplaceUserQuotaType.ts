import type { UserQuotaType } from "./UserQuotaType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type ReplaceUserQuota400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type ReplaceUserQuota401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type ReplaceUserQuota404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type ReplaceUserQuota409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type ReplaceUserQuota412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type ReplaceUserQuota422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type ReplaceUserQuota500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type ReplaceUserQuotaMutationResponseType = UserQuotaType;
export type ReplaceUserQuotaTypeMutation = {
    Response: ReplaceUserQuotaMutationResponseType;
    PathParams: ReplaceUserQuotaPathParamsType;
    Errors: ReplaceUserQuota400Type | ReplaceUserQuota401Type | ReplaceUserQuota404Type | ReplaceUserQuota409Type | ReplaceUserQuota412Type | ReplaceUserQuota422Type | ReplaceUserQuota500Type;
};
