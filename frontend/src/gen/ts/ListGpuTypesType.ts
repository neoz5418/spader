import type { PaginatedListGpuTypeType } from "./PaginatedListGpuTypeType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type ListGpuTypesPathParamsType = {
    /**
     * @type string
    */
    zone: string;
};
export type ListGpuTypesQueryParamsType = {
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
export type ListGpuTypes200Type = PaginatedListGpuTypeType;
/**
 * @description Request error
*/
export type ListGpuTypes400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type ListGpuTypes401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type ListGpuTypes404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type ListGpuTypes409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type ListGpuTypes412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type ListGpuTypes422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type ListGpuTypes500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type ListGpuTypesQueryResponseType = PaginatedListGpuTypeType;
export type ListGpuTypesTypeQuery = {
    Response: ListGpuTypesQueryResponseType;
    PathParams: ListGpuTypesPathParamsType;
    QueryParams: ListGpuTypesQueryParamsType;
    Errors: ListGpuTypes400Type | ListGpuTypes401Type | ListGpuTypes404Type | ListGpuTypes409Type | ListGpuTypes412Type | ListGpuTypes422Type | ListGpuTypes500Type;
};
