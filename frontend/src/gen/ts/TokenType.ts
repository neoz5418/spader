import type { ErrorType } from "./ErrorType";
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
export type Token400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type Token401Type = ErrorType;
/**
 * @description Not found
*/
export type Token404Type = ErrorType;
/**
 * @description Validation error
*/
export type Token422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type Token429Type = ErrorType;
/**
 * @description Internal server error
*/
export type Token500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type Token503Type = ErrorType;
export type TokenMutationRequestType = BodyTokenApisOidcV1TokenPostType;
/**
 * @description Successful Response
*/
export type TokenMutationResponseType = TokenType;
export type TokenTypeMutation = {
    Response: TokenMutationResponseType;
    Request: TokenMutationRequestType;
    Errors: Token400Type | Token401Type | Token404Type | Token422Type | Token429Type | Token500Type | Token503Type;
};