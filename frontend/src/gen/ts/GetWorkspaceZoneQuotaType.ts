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
import type { WorkspaceZoneQuotaType } from "./WorkspaceZoneQuotaType";

export type GetWorkspaceZoneQuotaPathParamsType = {
	/**
	 * @type string
	 */
	workspace: string;
	/**
	 * @type string
	 */
	zone: string;
};
/**
 * @description Successful Response
 */
export type GetWorkspaceZoneQuota200Type = WorkspaceZoneQuotaType;
/**
 * @description Unprocessable Entity
 */
export type GetWorkspaceZoneQuota422Type =
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
export type GetWorkspaceZoneQuotaQueryResponseType = WorkspaceZoneQuotaType;
export type GetWorkspaceZoneQuotaTypeQuery = {
	Response: GetWorkspaceZoneQuotaQueryResponseType;
	PathParams: GetWorkspaceZoneQuotaPathParamsType;
	Errors: GetWorkspaceZoneQuota422Type;
};
