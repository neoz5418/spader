import type { UserType } from "./UserType";
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
import type { RegisterUserRequestType } from "./RegisterUserRequestType";

 /**
 * @description Successful Response
*/
export type RegisterUser200Type = UserType;
/**
 * @description Unprocessable Entity
*/
export type RegisterUser422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
export type RegisterUserMutationRequestType = RegisterUserRequestType;
/**
 * @description Successful Response
*/
export type RegisterUserMutationResponseType = UserType;
export type RegisterUserTypeMutation = {
    Response: RegisterUserMutationResponseType;
    Request: RegisterUserMutationRequestType;
    Errors: RegisterUser422Type;
};
