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

export type ListZonesQueryParamsType = {
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
export type ListZones200Type = PaginatedListZoneType;
/**
 * @description Unprocessable Entity
 */
export type ListZones422Type =
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
export type ListZonesQueryResponseType = PaginatedListZoneType;
export type ListZonesTypeQuery = {
	Response: ListZonesQueryResponseType;
	QueryParams: ListZonesQueryParamsType;
	Errors: ListZones422Type;
};
