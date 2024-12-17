import type { OperationType } from "./OperationType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";
import type { CreateInstanceRequestType } from "./CreateInstanceRequestType";

 export type CreateInstancePathParamsType = {
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
export type CreateInstance201Type = OperationType;
/**
 * @description Request error
*/
export type CreateInstance400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type CreateInstance401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type CreateInstance404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type CreateInstance409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type CreateInstance412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type CreateInstance422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type CreateInstance500Type = ErrorInternalType;
export type CreateInstanceMutationRequestType = CreateInstanceRequestType;
/**
 * @description Successful Response
*/
export type CreateInstanceMutationResponseType = OperationType;
export type CreateInstanceTypeMutation = {
    Response: CreateInstanceMutationResponseType;
    Request: CreateInstanceMutationRequestType;
    PathParams: CreateInstancePathParamsType;
    Errors: CreateInstance400Type | CreateInstance401Type | CreateInstance404Type | CreateInstance409Type | CreateInstance412Type | CreateInstance422Type | CreateInstance500Type;
};
