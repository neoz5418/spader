import type { CurrencyType } from "./CurrencyType";
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
import type { RechargeTypeType } from "./RechargeTypeType";
import type { WorkspaceAccountRechargeType } from "./WorkspaceAccountRechargeType";

export type RechargeWorkspaceAccountType = {
	/**
	 * @type integer
	 */
	amount: number;
	/**
	 * @type string
	 */
	currency: CurrencyType;
	/**
	 * @type string
	 */
	type: RechargeTypeType;
	/**
	 * @type string
	 */
	callback_url: string;
};

export type RechargeWorkspaceAccountPathParamsType = {
	/**
	 * @type string
	 */
	workspace: string;
};
/**
 * @description Successful Response
 */
export type RechargeWorkspaceAccount200Type = WorkspaceAccountRechargeType;
/**
 * @description Unprocessable Entity
 */
export type RechargeWorkspaceAccount422Type =
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
export type RechargeWorkspaceAccountMutationRequestType =
	RechargeWorkspaceAccountType;
/**
 * @description Successful Response
 */
export type RechargeWorkspaceAccountMutationResponseType =
	WorkspaceAccountRechargeType;
export type RechargeWorkspaceAccountTypeMutation = {
	Response: RechargeWorkspaceAccountMutationResponseType;
	Request: RechargeWorkspaceAccountMutationRequestType;
	PathParams: RechargeWorkspaceAccountPathParamsType;
	Errors: RechargeWorkspaceAccount422Type;
};
