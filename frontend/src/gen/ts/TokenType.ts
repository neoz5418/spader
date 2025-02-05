import type { ErrorInternalType } from "./ErrorInternalType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorRefreshTokenCannotBeEmptyType } from "./ErrorRefreshTokenCannotBeEmptyType";
import type { ErrorRefreshTokenExpiredType } from "./ErrorRefreshTokenExpiredType";
import type { ErrorRefreshTokenInvalidType } from "./ErrorRefreshTokenInvalidType";
import type { ErrorInsufficientBalanceType } from "./ErrorInsufficientBalanceType";
import type { ErrorForbiddenType } from "./ErrorForbiddenType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorUsernameOrEmailCannotBeEmptyType } from "./ErrorUsernameOrEmailCannotBeEmptyType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
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
 * @description Unprocessable Entity
*/
export type Token422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
export type TokenMutationRequestType = BodyTokenApisOidcV1TokenPostType;
/**
 * @description Successful Response
*/
export type TokenMutationResponseType = TokenType;
export type TokenTypeMutation = {
    Response: TokenMutationResponseType;
    Request: TokenMutationRequestType;
    Errors: Token422Type;
};