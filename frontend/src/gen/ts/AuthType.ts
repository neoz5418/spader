import type { TokenType } from "./TokenType";
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
import type { BodyAuthApisOidcV1AuthPostType } from "./BodyAuthApisOidcV1AuthPostType";

 /**
 * @description Successful Response
*/
export type Auth200Type = TokenType;
/**
 * @description Unprocessable Entity
*/
export type Auth422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
export type AuthMutationRequestType = BodyAuthApisOidcV1AuthPostType;
/**
 * @description Successful Response
*/
export type AuthMutationResponseType = TokenType;
export type AuthTypeMutation = {
    Response: AuthMutationResponseType;
    Request: AuthMutationRequestType;
    Errors: Auth422Type;
};