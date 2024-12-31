import type { PaginatedListZoneType } from "./PaginatedListZoneType";
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

 export type ListWorkspaceZonesPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
export type ListWorkspaceZonesQueryParamsType = {
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
export type ListWorkspaceZones200Type = PaginatedListZoneType;
/**
 * @description Unprocessable Entity
*/
export type ListWorkspaceZones422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
/**
 * @description Successful Response
*/
export type ListWorkspaceZonesQueryResponseType = PaginatedListZoneType;
export type ListWorkspaceZonesTypeQuery = {
    Response: ListWorkspaceZonesQueryResponseType;
    PathParams: ListWorkspaceZonesPathParamsType;
    QueryParams: ListWorkspaceZonesQueryParamsType;
    Errors: ListWorkspaceZones422Type;
};
