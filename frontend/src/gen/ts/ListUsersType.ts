import type { ListUsersSortOptionsType } from "./ListUsersSortOptionsType";
import type { DirectionType } from "./DirectionType";
import type { PaginatedListUserType } from "./PaginatedListUserType";
import type { ErrorType } from "./ErrorType";

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
export type ListUsers200Type = PaginatedListUserType;
/**
 * @description Request error
*/
export type ListUsers400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type ListUsers401Type = ErrorType;
/**
 * @description Not found
*/
export type ListUsers404Type = ErrorType;
/**
 * @description Validation error
*/
export type ListUsers422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type ListUsers429Type = ErrorType;
/**
 * @description Internal server error
*/
export type ListUsers500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type ListUsers503Type = ErrorType;
/**
 * @description Successful Response
*/
export type ListUsersQueryResponseType = PaginatedListUserType;
export type ListUsersTypeQuery = {
    Response: ListUsersQueryResponseType;
    QueryParams: ListUsersQueryParamsType;
    Errors: ListUsers400Type | ListUsers401Type | ListUsers404Type | ListUsers422Type | ListUsers429Type | ListUsers500Type | ListUsers503Type;
};