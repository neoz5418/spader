import type { PaginatedListInstanceType } from "./PaginatedListInstanceType";
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
     * @default 20
     * @type integer | undefined
    */
    limit?: number;
    /**
     * @default 1
     * @type integer | undefined
    */
    page?: number;
    /**
     * @default ""
     * @type string | undefined
    */
    before?: string;
    /**
     * @default ""
     * @type string | undefined
    */
    after?: string;
};
/**
 * @description Successful Response
*/
export type ListInstances200Type = PaginatedListInstanceType;
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
export type ListInstancesQueryResponseType = PaginatedListInstanceType;
export type ListInstancesTypeQuery = {
    Response: ListInstancesQueryResponseType;
    QueryParams: ListInstancesQueryParamsType;
    Errors: ListInstances400Type | ListInstances401Type | ListInstances404Type | ListInstances422Type | ListInstances429Type | ListInstances500Type | ListInstances503Type;
};