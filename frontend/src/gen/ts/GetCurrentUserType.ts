import type { UserType } from "./UserType";
import type { ErrorType } from "./ErrorType";

 /**
 * @description Successful Response
*/
export type GetCurrentUser200Type = UserType;
/**
 * @description Request error
*/
export type GetCurrentUser400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type GetCurrentUser401Type = ErrorType;
/**
 * @description Not found
*/
export type GetCurrentUser404Type = ErrorType;
/**
 * @description Validation error
*/
export type GetCurrentUser422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type GetCurrentUser429Type = ErrorType;
/**
 * @description Internal server error
*/
export type GetCurrentUser500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type GetCurrentUser503Type = ErrorType;
/**
 * @description Successful Response
*/
export type GetCurrentUserQueryResponseType = UserType;
export type GetCurrentUserTypeQuery = {
    Response: GetCurrentUserQueryResponseType;
    Errors: GetCurrentUser400Type | GetCurrentUser401Type | GetCurrentUser404Type | GetCurrentUser422Type | GetCurrentUser429Type | GetCurrentUser500Type | GetCurrentUser503Type;
};