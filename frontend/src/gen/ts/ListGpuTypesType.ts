import type { PaginatedListGpuTypeType } from "./PaginatedListGpuTypeType";
import type { ErrorType } from "./ErrorType";

 export type ListGpuTypesPathParamsType = {
    /**
     * @type string
    */
    zone: string;
};
export type ListGpuTypesQueryParamsType = {
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
export type ListGpuTypes200Type = PaginatedListGpuTypeType;
/**
 * @description Request error
*/
export type ListGpuTypes400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type ListGpuTypes401Type = ErrorType;
/**
 * @description Not found
*/
export type ListGpuTypes404Type = ErrorType;
/**
 * @description Validation error
*/
export type ListGpuTypes422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type ListGpuTypes429Type = ErrorType;
/**
 * @description Internal server error
*/
export type ListGpuTypes500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type ListGpuTypes503Type = ErrorType;
/**
 * @description Successful Response
*/
export type ListGpuTypesQueryResponseType = PaginatedListGpuTypeType;
export type ListGpuTypesTypeQuery = {
    Response: ListGpuTypesQueryResponseType;
    PathParams: ListGpuTypesPathParamsType;
    QueryParams: ListGpuTypesQueryParamsType;
    Errors: ListGpuTypes400Type | ListGpuTypes401Type | ListGpuTypes404Type | ListGpuTypes422Type | ListGpuTypes429Type | ListGpuTypes500Type | ListGpuTypes503Type;
};