import type { PaginatedListGpuTypePublicType } from "./PaginatedListGpuTypePublicType";
import type { ErrorInternalType } from "./ErrorInternalType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorRefreshTokenCannotBeEmptyType } from "./ErrorRefreshTokenCannotBeEmptyType";
import type { ErrorRefreshTokenExpiredType } from "./ErrorRefreshTokenExpiredType";
import type { ErrorRefreshTokenInvalidType } from "./ErrorRefreshTokenInvalidType";
import type { ErrorInsufficientBalanceType } from "./ErrorInsufficientBalanceType";
import type { ErrorForbiddenType } from "./ErrorForbiddenType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorUsernameOrEmailCannotBeEmptyType } from "./ErrorUsernameOrEmailCannotBeEmptyType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";

 export type ListWorkspaceGpuTypesPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
export type ListWorkspaceGpuTypesQueryParamsType = {
    zone?: (string | null);
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
export type ListWorkspaceGpuTypes200Type = PaginatedListGpuTypePublicType;
/**
 * @description Unprocessable Entity
*/
export type ListWorkspaceGpuTypes422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
/**
 * @description Successful Response
*/
export type ListWorkspaceGpuTypesQueryResponseType = PaginatedListGpuTypePublicType;
export type ListWorkspaceGpuTypesTypeQuery = {
    Response: ListWorkspaceGpuTypesQueryResponseType;
    PathParams: ListWorkspaceGpuTypesPathParamsType;
    QueryParams: ListWorkspaceGpuTypesQueryParamsType;
    Errors: ListWorkspaceGpuTypes422Type;
};
