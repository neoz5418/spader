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
import type { SshKeyCreateType } from "./SshKeyCreateType";
import type { SshKeyType } from "./SshKeyType";

export type CreateWorkspaceSshKeysPathParamsType = {
	/**
	 * @type string
	 */
	workspace: string;
};
/**
 * @description Successful Response
 */
export type CreateWorkspaceSshKeys201Type = SshKeyType;
/**
 * @description Unprocessable Entity
 */
export type CreateWorkspaceSshKeys422Type =
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
export type CreateWorkspaceSshKeysMutationRequestType = SshKeyCreateType;
/**
 * @description Successful Response
 */
export type CreateWorkspaceSshKeysMutationResponseType = SshKeyType;
export type CreateWorkspaceSshKeysTypeMutation = {
	Response: CreateWorkspaceSshKeysMutationResponseType;
	Request: CreateWorkspaceSshKeysMutationRequestType;
	PathParams: CreateWorkspaceSshKeysPathParamsType;
	Errors: CreateWorkspaceSshKeys422Type;
};
