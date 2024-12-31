import type { WorkspaceZoneQuotaType } from "./WorkspaceZoneQuotaType";
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

 export type GetWorkspaceZoneQuotaPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    zone: string;
};
/**
 * @description Successful Response
*/
export type GetWorkspaceZoneQuota200Type = WorkspaceZoneQuotaType;
/**
 * @description Unprocessable Entity
*/
export type GetWorkspaceZoneQuota422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
/**
 * @description Successful Response
*/
export type GetWorkspaceZoneQuotaQueryResponseType = WorkspaceZoneQuotaType;
export type GetWorkspaceZoneQuotaTypeQuery = {
    Response: GetWorkspaceZoneQuotaQueryResponseType;
    PathParams: GetWorkspaceZoneQuotaPathParamsType;
    Errors: GetWorkspaceZoneQuota422Type;
};
