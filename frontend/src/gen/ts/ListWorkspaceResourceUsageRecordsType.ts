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
import type { PaginatedListResourceUsageRecordType } from "./PaginatedListResourceUsageRecordType";

export type ListWorkspaceResourceUsageRecordsPathParamsType = {
	/**
	 * @type string
	 */
	workspace: string;
};
export type ListWorkspaceResourceUsageRecordsQueryParamsType = {
	/**
	 * @type string, uuid
	 */
	target_id: string;
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
export type ListWorkspaceResourceUsageRecords200Type =
	PaginatedListResourceUsageRecordType;
/**
 * @description Unprocessable Entity
 */
export type ListWorkspaceResourceUsageRecords422Type =
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
export type ListWorkspaceResourceUsageRecordsQueryResponseType =
	PaginatedListResourceUsageRecordType;
export type ListWorkspaceResourceUsageRecordsTypeQuery = {
	Response: ListWorkspaceResourceUsageRecordsQueryResponseType;
	PathParams: ListWorkspaceResourceUsageRecordsPathParamsType;
	QueryParams: ListWorkspaceResourceUsageRecordsQueryParamsType;
	Errors: ListWorkspaceResourceUsageRecords422Type;
};
