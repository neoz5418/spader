import type { WorkspaceAccountType } from "./WorkspaceAccountType";
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
import type { RechargeBaseType } from "./RechargeBaseType";

 export type RechargeWorkspaceAccountByAdminPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type RechargeWorkspaceAccountByAdmin201Type = WorkspaceAccountType;
/**
 * @description Unprocessable Entity
*/
export type RechargeWorkspaceAccountByAdmin422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
export type RechargeWorkspaceAccountByAdminMutationRequestType = RechargeBaseType;
/**
 * @description Successful Response
*/
export type RechargeWorkspaceAccountByAdminMutationResponseType = WorkspaceAccountType;
export type RechargeWorkspaceAccountByAdminTypeMutation = {
    Response: RechargeWorkspaceAccountByAdminMutationResponseType;
    Request: RechargeWorkspaceAccountByAdminMutationRequestType;
    PathParams: RechargeWorkspaceAccountByAdminPathParamsType;
    Errors: RechargeWorkspaceAccountByAdmin422Type;
};
