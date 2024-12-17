import type { PaginatedListZoneType } from "./PaginatedListZoneType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type ListZones400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type ListZones401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type ListZones404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type ListZones409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type ListZones412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type ListZones422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type ListZones500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type ListZonesQueryResponseType = PaginatedListZoneType;
export type ListZonesTypeQuery = {
    Response: ListZonesQueryResponseType;
    QueryParams: ListZonesQueryParamsType;
    Errors: ListZones400Type | ListZones401Type | ListZones404Type | ListZones409Type | ListZones412Type | ListZones422Type | ListZones500Type;
};
