import type { PaginatedListZoneType } from "./PaginatedListZoneType";
import type { ErrorType } from "./ErrorType";

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
 * @description Request error
*/
export type ListZones400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type ListZones401Type = ErrorType;
/**
 * @description Not found
*/
export type ListZones404Type = ErrorType;
/**
 * @description Validation error
*/
export type ListZones422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type ListZones429Type = ErrorType;
/**
 * @description Internal server error
*/
export type ListZones500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type ListZones503Type = ErrorType;
/**
 * @description Successful Response
*/
export type ListZonesQueryResponseType = PaginatedListZoneType;
export type ListZonesTypeQuery = {
    Response: ListZonesQueryResponseType;
    QueryParams: ListZonesQueryParamsType;
    Errors: ListZones400Type | ListZones401Type | ListZones404Type | ListZones422Type | ListZones429Type | ListZones500Type | ListZones503Type;
};