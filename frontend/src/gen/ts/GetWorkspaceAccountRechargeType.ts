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
import type { WorkspaceAccountRechargeType } from "./WorkspaceAccountRechargeType";

export type GetWorkspaceAccountRechargePathParamsType = {
	/**
	 * @type string
	 */
	workspace: string;
	/**
	 * @type string, uuid
	 */
	recharge_id: string;
};
/**
 * @description Successful Response
 */
export type GetWorkspaceAccountRecharge200Type = WorkspaceAccountRechargeType;
/**
 * @description Unprocessable Entity
 */
export type GetWorkspaceAccountRecharge422Type =
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
/**
 * @description Successful Response
 */
export type GetWorkspaceAccountRechargeQueryResponseType =
	WorkspaceAccountRechargeType;
export type GetWorkspaceAccountRechargeTypeQuery = {
	Response: GetWorkspaceAccountRechargeQueryResponseType;
	PathParams: GetWorkspaceAccountRechargePathParamsType;
	Errors: GetWorkspaceAccountRecharge422Type;
};
