import type { ListUsersSortOptionsType } from "./ListUsersSortOptionsType";
import type { DirectionType } from "./DirectionType";
import type { PaginatedListUserType } from "./PaginatedListUserType";
import type { ErrorEmailAndUsernameCannotBeProvidedAtTheSameTimeType } from "./ErrorEmailAndUsernameCannotBeProvidedAtTheSameTimeType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorInternalType } from "./ErrorInternalType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorPasswordMismatchType } from "./ErrorPasswordMismatchType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorRefreshTokenCannotBeEmptyType } from "./ErrorRefreshTokenCannotBeEmptyType";
import type { ErrorRefreshTokenExpiredType } from "./ErrorRefreshTokenExpiredType";
import type { ErrorRefreshTokenInvalidType } from "./ErrorRefreshTokenInvalidType";
import type { ErrorRequestValidationFailedType } from "./ErrorRequestValidationFailedType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorUsernameOrEmailCannotBeEmptyType } from "./ErrorUsernameOrEmailCannotBeEmptyType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";

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
 * @description Unprocessable Entity
*/
export type ListUsers422Type = (ErrorEmailAndUsernameCannotBeProvidedAtTheSameTimeType | ErrorResourceNotFoundType | ErrorInternalType | ErrorInvalidArgumentType | ErrorPasswordMismatchType | ErrorPreconditionFailedType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorRequestValidationFailedType | ErrorResourceConflictType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
/**
 * @description Successful Response
*/
export type ListUsersQueryResponseType = PaginatedListUserType;
export type ListUsersTypeQuery = {
    Response: ListUsersQueryResponseType;
    QueryParams: ListUsersQueryParamsType;
    Errors: ListUsers422Type;
};
