import type { ListInstancesSortOptionsType } from "./ListInstancesSortOptionsType";
import type { SortOrderType } from "./SortOrderType";
import type { PaginatedListInstancePublicType } from "./PaginatedListInstancePublicType";
import type { ErrorType } from "./ErrorType";

 export type ListInstancesQueryParamsType = {
    /**
     * @type string | undefined
    */
    zone?: string;
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
 * @description Request error
*/
export type ListInstances400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type ListInstances401Type = ErrorType;
/**
 * @description Not found
*/
export type ListInstances404Type = ErrorType;
/**
 * @description Validation error
*/
export type ListInstances422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type ListInstances429Type = ErrorType;
/**
 * @description Internal server error
*/
export type ListInstances500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type ListInstances503Type = ErrorType;
/**
 * @description Successful Response
*/
export type ListInstancesQueryResponseType = PaginatedListInstancePublicType;
export type ListInstancesTypeQuery = {
    Response: ListInstancesQueryResponseType;
    QueryParams: ListInstancesQueryParamsType;
    Errors: ListInstances400Type | ListInstances401Type | ListInstances404Type | ListInstances422Type | ListInstances429Type | ListInstances500Type | ListInstances503Type;
};
