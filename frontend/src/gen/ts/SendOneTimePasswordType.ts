import type { ErrorEmailAndUsernameCannotBeProvidedAtTheSameTimeType } from "./ErrorEmailAndUsernameCannotBeProvidedAtTheSameTimeType";
import type { ErrorForbiddenType } from "./ErrorForbiddenType";
import type { ErrorInternalType } from "./ErrorInternalType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorPasswordMismatchType } from "./ErrorPasswordMismatchType";
import type { ErrorRefreshTokenCannotBeEmptyType } from "./ErrorRefreshTokenCannotBeEmptyType";
import type { ErrorRefreshTokenExpiredType } from "./ErrorRefreshTokenExpiredType";
import type { ErrorRefreshTokenInvalidType } from "./ErrorRefreshTokenInvalidType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorUsernameOrEmailCannotBeEmptyType } from "./ErrorUsernameOrEmailCannotBeEmptyType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { SendOneTimePasswordRequestType } from "./SendOneTimePasswordRequestType";
import type { SendOneTimePasswordResponseType } from "./SendOneTimePasswordResponseType";

/**
 * @description Successful Response
 */
export type SendOneTimePassword201Type = SendOneTimePasswordResponseType;
/**
 * @description Unprocessable Entity
 */
export type SendOneTimePassword422Type =
	| ErrorEmailAndUsernameCannotBeProvidedAtTheSameTimeType
	| ErrorResourceNotFoundType
	| ErrorInternalType
	| ErrorInvalidArgumentType
	| ErrorPasswordMismatchType
	| ErrorRefreshTokenCannotBeEmptyType
	| ErrorRefreshTokenExpiredType
	| ErrorRefreshTokenInvalidType
	| ErrorResourceConflictType
	| ErrorForbiddenType
	| ErrorUnauthorizedType
	| ErrorUsernameOrEmailCannotBeEmptyType
	| ErrorValidationFailedType;
export type SendOneTimePasswordMutationRequestType =
	SendOneTimePasswordRequestType;
/**
 * @description Successful Response
 */
export type SendOneTimePasswordMutationResponseType =
	SendOneTimePasswordResponseType;
export type SendOneTimePasswordTypeMutation = {
	Response: SendOneTimePasswordMutationResponseType;
	Request: SendOneTimePasswordMutationRequestType;
	Errors: SendOneTimePassword422Type;
};
