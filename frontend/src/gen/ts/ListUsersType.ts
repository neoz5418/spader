import type { ListUsersSortOptionsType } from "./ListUsersSortOptionsType";
import type { DirectionType } from "./DirectionType";
import type { PaginatedListUserType } from "./PaginatedListUserType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type ListUsersQueryParamsType = {
    /**
     * @type string | undefined
    */
    sort?: ListUsersSortOptionsType;
    /**
     * @type string | undefined
    */
    direction?: DirectionType;
    /**
     * @type string | undefined, phone
    */
    phone_number?: string;
    /**
     * @type string | undefined
    */
    display_name?: string;
    /**
     * @type string | undefined, email
    */
    email?: string;
    /**
     * @type string | undefined
    */
    name?: string;
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
export type ListUsers200Type = PaginatedListUserType;
/**
 * @description Request error
*/
export type ListUsers400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type ListUsers401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type ListUsers404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type ListUsers409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type ListUsers412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type ListUsers422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type ListUsers500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type ListUsersQueryResponseType = PaginatedListUserType;
export type ListUsersTypeQuery = {
    Response: ListUsersQueryResponseType;
    QueryParams: ListUsersQueryParamsType;
    Errors: ListUsers400Type | ListUsers401Type | ListUsers404Type | ListUsers409Type | ListUsers412Type | ListUsers422Type | ListUsers500Type;
};
