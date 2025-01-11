import type { ListAuditLogsSortOptionsType } from "./ListAuditLogsSortOptionsType";
import type { SortOrderType } from "./SortOrderType";
import type { PaginatedListAuditLogType } from "./PaginatedListAuditLogType";
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

 export type GetWorkspaceAuditLogsPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
export type GetWorkspaceAuditLogsQueryParamsType = {
    /**
     * @type string | undefined
    */
    search?: string;
    /**
     * @type string | undefined
    */
    sort?: ListAuditLogsSortOptionsType;
    /**
     * @type string | undefined
    */
    sort_order?: SortOrderType;
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
export type GetWorkspaceAuditLogs200Type = PaginatedListAuditLogType;
/**
 * @description Unprocessable Entity
*/
export type GetWorkspaceAuditLogs422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
/**
 * @description Successful Response
*/
export type GetWorkspaceAuditLogsQueryResponseType = PaginatedListAuditLogType;
export type GetWorkspaceAuditLogsTypeQuery = {
    Response: GetWorkspaceAuditLogsQueryResponseType;
    PathParams: GetWorkspaceAuditLogsPathParamsType;
    QueryParams: GetWorkspaceAuditLogsQueryParamsType;
    Errors: GetWorkspaceAuditLogs422Type;
};