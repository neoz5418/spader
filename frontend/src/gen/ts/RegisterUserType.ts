import type { UserType } from "./UserType";
import type { ErrorType } from "./ErrorType";
import type { RegisterUserRequestType } from "./RegisterUserRequestType";

 /**
 * @description Successful Response
*/
export type RegisterUser200Type = UserType;
/**
 * @description Request error
*/
export type RegisterUser400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type RegisterUser401Type = ErrorType;
/**
 * @description Not found
*/
export type RegisterUser404Type = ErrorType;
/**
 * @description Validation error
*/
export type RegisterUser422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type RegisterUser429Type = ErrorType;
/**
 * @description Internal server error
*/
export type RegisterUser500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type RegisterUser503Type = ErrorType;
export type RegisterUserMutationRequestType = RegisterUserRequestType;
/**
 * @description Successful Response
*/
export type RegisterUserMutationResponseType = UserType;
export type RegisterUserTypeMutation = {
    Response: RegisterUserMutationResponseType;
    Request: RegisterUserMutationRequestType;
    Errors: RegisterUser400Type | RegisterUser401Type | RegisterUser404Type | RegisterUser422Type | RegisterUser429Type | RegisterUser500Type | RegisterUser503Type;
};