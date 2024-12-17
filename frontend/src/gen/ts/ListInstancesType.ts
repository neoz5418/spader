import type { ListInstancesSortOptionsType } from "./ListInstancesSortOptionsType";
import type { SortOrderType } from "./SortOrderType";
import type { PaginatedListInstancePublicType } from "./PaginatedListInstancePublicType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type ListInstances400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type ListInstances401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type ListInstances404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type ListInstances409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type ListInstances412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type ListInstances422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type ListInstances500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type ListInstancesQueryResponseType = PaginatedListInstancePublicType;
export type ListInstancesTypeQuery = {
    Response: ListInstancesQueryResponseType;
    QueryParams: ListInstancesQueryParamsType;
    Errors: ListInstances400Type | ListInstances401Type | ListInstances404Type | ListInstances409Type | ListInstances412Type | ListInstances422Type | ListInstances500Type;
};
