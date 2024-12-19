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
import type { PortForwardType } from "./PortForwardType";

export type CreateInstancePortForwardPathParamsType = {
	/**
	 * @type string
	 */
	workspace: string;
	/**
	 * @type string
	 */
	zone: string;
	/**
	 * @type string
	 */
	name: string;
};
/**
 * @description Successful Response
 */
export type CreateInstancePortForward201Type = PortForwardType;
/**
 * @description Unprocessable Entity
 */
export type CreateInstancePortForward422Type =
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
export type CreateInstancePortForwardMutationRequestType = PortForwardType;
/**
 * @description Successful Response
 */
export type CreateInstancePortForwardMutationResponseType = PortForwardType;
export type CreateInstancePortForwardTypeMutation = {
	Response: CreateInstancePortForwardMutationResponseType;
	Request: CreateInstancePortForwardMutationRequestType;
	PathParams: CreateInstancePortForwardPathParamsType;
	Errors: CreateInstancePortForward422Type;
};
