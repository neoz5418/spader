import type { ListOperationsSortOptionsType } from "./ListOperationsSortOptionsType";
import type { SortOrderType } from "./SortOrderType";
import type { PaginatedListOperationType } from "./PaginatedListOperationType";
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

 export type GetWorkspaceOperationsPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
export type GetWorkspaceOperationsQueryParamsType = {
    /**
     * @type string | undefined
    */
    search?: string;
    /**
     * @type string | undefined
    */
    sort?: ListOperationsSortOptionsType;
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
export type GetWorkspaceOperations200Type = PaginatedListOperationType;
/**
 * @description Unprocessable Entity
*/
export type GetWorkspaceOperations422Type = (ErrorEmailAndUsernameCannotBeProvidedAtTheSameTimeType | ErrorResourceNotFoundType | ErrorInternalType | ErrorInvalidArgumentType | ErrorPasswordMismatchType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorResourceConflictType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
/**
 * @description Successful Response
*/
export type GetWorkspaceOperationsQueryResponseType = PaginatedListOperationType;
export type GetWorkspaceOperationsTypeQuery = {
    Response: GetWorkspaceOperationsQueryResponseType;
    PathParams: GetWorkspaceOperationsPathParamsType;
    QueryParams: GetWorkspaceOperationsQueryParamsType;
    Errors: GetWorkspaceOperations422Type;
};