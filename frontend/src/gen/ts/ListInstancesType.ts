import type { ListInstancesSortOptionsType } from "./ListInstancesSortOptionsType";
import type { SortOrderType } from "./SortOrderType";
import type { PaginatedListInstancePublicType } from "./PaginatedListInstancePublicType";
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

 export type ListInstancesQueryParamsType = {
    /**
     * @type string | undefined
    */
    search?: string;
    /**
     * @type string | undefined
    */
    sort?: ListInstancesSortOptionsType;
    /**
     * @type string | undefined
    */
    sort_order?: SortOrderType;
    zone?: (string | null);
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
export type ListInstances200Type = PaginatedListInstancePublicType;
/**
 * @description Unprocessable Entity
*/
export type ListInstances422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
/**
 * @description Successful Response
*/
export type ListInstancesQueryResponseType = PaginatedListInstancePublicType;
export type ListInstancesTypeQuery = {
    Response: ListInstancesQueryResponseType;
    QueryParams: ListInstancesQueryParamsType;
    Errors: ListInstances422Type;
};
