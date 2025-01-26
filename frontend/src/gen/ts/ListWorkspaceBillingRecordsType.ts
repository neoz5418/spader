import type { ListBillingRecordOptionsType } from "./ListBillingRecordOptionsType";
import type { SortOrderType } from "./SortOrderType";
import type { PaginatedListBillingRecordPublicType } from "./PaginatedListBillingRecordPublicType";
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

 export type ListWorkspaceBillingRecordsPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
export type ListWorkspaceBillingRecordsQueryParamsType = {
    resource_id?: (string | null);
    /**
     * @type string | undefined
    */
    sort?: ListBillingRecordOptionsType;
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
export type ListWorkspaceBillingRecords200Type = PaginatedListBillingRecordPublicType;
/**
 * @description Unprocessable Entity
*/
export type ListWorkspaceBillingRecords422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
/**
 * @description Successful Response
*/
export type ListWorkspaceBillingRecordsQueryResponseType = PaginatedListBillingRecordPublicType;
export type ListWorkspaceBillingRecordsTypeQuery = {
    Response: ListWorkspaceBillingRecordsQueryResponseType;
    PathParams: ListWorkspaceBillingRecordsPathParamsType;
    QueryParams: ListWorkspaceBillingRecordsQueryParamsType;
    Errors: ListWorkspaceBillingRecords422Type;
};