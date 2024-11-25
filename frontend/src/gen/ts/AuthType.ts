import type { TokenType } from "./TokenType";
import type { ErrorType } from "./ErrorType";
import type { BodyAuthApisOidcV1AuthPostType } from "./BodyAuthApisOidcV1AuthPostType";

 /**
 * @description Successful Response
*/
export type Auth200Type = TokenType;
/**
 * @description Request error
*/
export type Auth400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type Auth401Type = ErrorType;
/**
 * @description Not found
*/
export type Auth404Type = ErrorType;
/**
 * @description Validation error
*/
export type Auth422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type Auth429Type = ErrorType;
/**
 * @description Internal server error
*/
export type Auth500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type Auth503Type = ErrorType;
export type AuthMutationRequestType = BodyAuthApisOidcV1AuthPostType;
/**
 * @description Successful Response
*/
export type AuthMutationResponseType = TokenType;
export type AuthTypeMutation = {
    Response: AuthMutationResponseType;
    Request: AuthMutationRequestType;
    Errors: Auth400Type | Auth401Type | Auth404Type | Auth422Type | Auth429Type | Auth500Type | Auth503Type;
};