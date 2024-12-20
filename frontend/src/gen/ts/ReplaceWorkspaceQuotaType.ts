import type { WorkspaceQuotaType } from "./WorkspaceQuotaType";
import type { ErrorInternalType } from "./ErrorInternalType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorRefreshTokenCannotBeEmptyType } from "./ErrorRefreshTokenCannotBeEmptyType";
import type { ErrorRefreshTokenExpiredType } from "./ErrorRefreshTokenExpiredType";
import type { ErrorRefreshTokenInvalidType } from "./ErrorRefreshTokenInvalidType";
import type { ErrorForbiddenType } from "./ErrorForbiddenType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorUsernameOrEmailCannotBeEmptyType } from "./ErrorUsernameOrEmailCannotBeEmptyType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";

 export type ReplaceWorkspaceQuotaPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type ReplaceWorkspaceQuota200Type = WorkspaceQuotaType;
/**
 * @description Unprocessable Entity
*/
export type ReplaceWorkspaceQuota422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
export type ReplaceWorkspaceQuotaMutationRequestType = WorkspaceQuotaType;
/**
 * @description Successful Response
*/
export type ReplaceWorkspaceQuotaMutationResponseType = WorkspaceQuotaType;
export type ReplaceWorkspaceQuotaTypeMutation = {
    Response: ReplaceWorkspaceQuotaMutationResponseType;
    Request: ReplaceWorkspaceQuotaMutationRequestType;
    PathParams: ReplaceWorkspaceQuotaPathParamsType;
    Errors: ReplaceWorkspaceQuota422Type;
};