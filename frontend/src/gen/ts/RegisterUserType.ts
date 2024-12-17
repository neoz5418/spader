import type { UserType } from "./UserType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";
import type { RegisterUserRequestType } from "./RegisterUserRequestType";

 /**
 * @description Successful Response
*/
export type RegisterUser200Type = UserType;
/**
 * @description Request error
*/
export type RegisterUser400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type RegisterUser401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type RegisterUser404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type RegisterUser409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type RegisterUser412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type RegisterUser422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type RegisterUser500Type = ErrorInternalType;
export type RegisterUserMutationRequestType = RegisterUserRequestType;
/**
 * @description Successful Response
*/
export type RegisterUserMutationResponseType = UserType;
export type RegisterUserTypeMutation = {
    Response: RegisterUserMutationResponseType;
    Request: RegisterUserMutationRequestType;
    Errors: RegisterUser400Type | RegisterUser401Type | RegisterUser404Type | RegisterUser409Type | RegisterUser412Type | RegisterUser422Type | RegisterUser500Type;
};
