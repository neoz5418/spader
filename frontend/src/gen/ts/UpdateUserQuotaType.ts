import type { UserQuotaType } from "./UserQuotaType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type UpdateUserQuota400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type UpdateUserQuota401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type UpdateUserQuota404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type UpdateUserQuota409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type UpdateUserQuota412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type UpdateUserQuota422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type UpdateUserQuota500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type UpdateUserQuotaMutationResponseType = UserQuotaType;
export type UpdateUserQuotaTypeMutation = {
    Response: UpdateUserQuotaMutationResponseType;
    PathParams: UpdateUserQuotaPathParamsType;
    Errors: UpdateUserQuota400Type | UpdateUserQuota401Type | UpdateUserQuota404Type | UpdateUserQuota409Type | UpdateUserQuota412Type | UpdateUserQuota422Type | UpdateUserQuota500Type;
};
