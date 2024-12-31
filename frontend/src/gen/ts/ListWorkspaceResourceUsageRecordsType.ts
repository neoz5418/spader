import type { PaginatedListResourceUsageRecordType } from "./PaginatedListResourceUsageRecordType";
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
export type ListWorkspaceResourceUsageRecords200Type = PaginatedListResourceUsageRecordType;
/**
 * @description Unprocessable Entity
*/
export type ListWorkspaceResourceUsageRecords422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
/**
 * @description Successful Response
*/
export type ListWorkspaceResourceUsageRecordsQueryResponseType = PaginatedListResourceUsageRecordType;
export type ListWorkspaceResourceUsageRecordsTypeQuery = {
    Response: ListWorkspaceResourceUsageRecordsQueryResponseType;
    PathParams: ListWorkspaceResourceUsageRecordsPathParamsType;
    QueryParams: ListWorkspaceResourceUsageRecordsQueryParamsType;
    Errors: ListWorkspaceResourceUsageRecords422Type;
};
