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
import type { PaginatedListZoneType } from "./PaginatedListZoneType";

export type ListWorkspaceZonesPathParamsType = {
	/**
	 * @type string
	 */
	workspace: string;
};
export type ListWorkspaceZonesQueryParamsType = {
	/**
	 * @default 0
	 * @type integer | undefined
	 */
	offset?: number;
	/**
	 * @default 20
	 * @type integer | undefined
	 */
	limit?: number;
};
/**
 * @description Successful Response
 */
export type ListWorkspaceZones200Type = PaginatedListZoneType;
/**
 * @description Unprocessable Entity
 */
export type ListWorkspaceZones422Type =
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
export type ListWorkspaceZonesQueryResponseType = PaginatedListZoneType;
export type ListWorkspaceZonesTypeQuery = {
	Response: ListWorkspaceZonesQueryResponseType;
	PathParams: ListWorkspaceZonesPathParamsType;
	QueryParams: ListWorkspaceZonesQueryParamsType;
	Errors: ListWorkspaceZones422Type;
};
