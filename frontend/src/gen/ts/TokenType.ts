import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";
import type { BodyTokenApisOidcV1TokenPostType } from "./BodyTokenApisOidcV1TokenPostType";

 export type TokenType = {
    /**
     * @type string
    */
    access_token: string;
    /**
     * @type string
    */
    refresh_token: string;
    /**
     * @type integer
    */
    expires_in: number;
    /**
     * @type string
    */
    token_type: string;
    /**
     * @type string
    */
    scope: string;
};

 /**
 * @description Successful Response
*/
export type Token200Type = TokenType;
/**
 * @description Request error
*/
export type Token400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type Token401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type Token404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type Token409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type Token412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type Token422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type Token500Type = ErrorInternalType;
export type TokenMutationRequestType = BodyTokenApisOidcV1TokenPostType;
/**
 * @description Successful Response
*/
export type TokenMutationResponseType = TokenType;
export type TokenTypeMutation = {
    Response: TokenMutationResponseType;
    Request: TokenMutationRequestType;
    Errors: Token400Type | Token401Type | Token404Type | Token409Type | Token412Type | Token422Type | Token500Type;
};
