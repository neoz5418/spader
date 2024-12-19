import type { PaginatedListGpuTypePublicType } from "./PaginatedListGpuTypePublicType";
import type { ErrorEmailAndUsernameCannotBeProvidedAtTheSameTimeType } from "./ErrorEmailAndUsernameCannotBeProvidedAtTheSameTimeType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorInternalType } from "./ErrorInternalType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorPasswordMismatchType } from "./ErrorPasswordMismatchType";
import type { ErrorRefreshTokenCannotBeEmptyType } from "./ErrorRefreshTokenCannotBeEmptyType";
import type { ErrorRefreshTokenExpiredType } from "./ErrorRefreshTokenExpiredType";
import type { ErrorRefreshTokenInvalidType } from "./ErrorRefreshTokenInvalidType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorForbiddenType } from "./ErrorForbiddenType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorUsernameOrEmailCannotBeEmptyType } from "./ErrorUsernameOrEmailCannotBeEmptyType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";

 export type ListGpuTypesQueryParamsType = {
    zone: (string | null);
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
export type ListGpuTypes200Type = PaginatedListGpuTypePublicType;
/**
 * @description Unprocessable Entity
*/
export type ListGpuTypes422Type = (ErrorEmailAndUsernameCannotBeProvidedAtTheSameTimeType | ErrorResourceNotFoundType | ErrorInternalType | ErrorInvalidArgumentType | ErrorPasswordMismatchType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorResourceConflictType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
/**
 * @description Successful Response
*/
export type ListGpuTypesQueryResponseType = PaginatedListGpuTypePublicType;
export type ListGpuTypesTypeQuery = {
    Response: ListGpuTypesQueryResponseType;
    QueryParams: ListGpuTypesQueryParamsType;
    Errors: ListGpuTypes422Type;
};