import type { TokenType } from "./TokenType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";
import type { BodyAuthApisOidcV1AuthPostType } from "./BodyAuthApisOidcV1AuthPostType";

 /**
 * @description Successful Response
*/
export type Auth200Type = TokenType;
/**
 * @description Request error
*/
export type Auth400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type Auth401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type Auth404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type Auth409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type Auth412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type Auth422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type Auth500Type = ErrorInternalType;
export type AuthMutationRequestType = BodyAuthApisOidcV1AuthPostType;
/**
 * @description Successful Response
*/
export type AuthMutationResponseType = TokenType;
export type AuthTypeMutation = {
    Response: AuthMutationResponseType;
    Request: AuthMutationRequestType;
    Errors: Auth400Type | Auth401Type | Auth404Type | Auth409Type | Auth412Type | Auth422Type | Auth500Type;
};
