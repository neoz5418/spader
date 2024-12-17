import type { SendOneTimePasswordResponseType } from "./SendOneTimePasswordResponseType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";
import type { SendOneTimePasswordRequestType } from "./SendOneTimePasswordRequestType";

 /**
 * @description Successful Response
*/
export type SendOneTimePassword201Type = SendOneTimePasswordResponseType;
/**
 * @description Request error
*/
export type SendOneTimePassword400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type SendOneTimePassword401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type SendOneTimePassword404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type SendOneTimePassword409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type SendOneTimePassword412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type SendOneTimePassword422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type SendOneTimePassword500Type = ErrorInternalType;
export type SendOneTimePasswordMutationRequestType = SendOneTimePasswordRequestType;
/**
 * @description Successful Response
*/
export type SendOneTimePasswordMutationResponseType = SendOneTimePasswordResponseType;
export type SendOneTimePasswordTypeMutation = {
    Response: SendOneTimePasswordMutationResponseType;
    Request: SendOneTimePasswordMutationRequestType;
    Errors: SendOneTimePassword400Type | SendOneTimePassword401Type | SendOneTimePassword404Type | SendOneTimePassword409Type | SendOneTimePassword412Type | SendOneTimePassword422Type | SendOneTimePassword500Type;
};
