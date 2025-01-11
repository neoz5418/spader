import type { WorkspaceAccountRechargeType } from "./WorkspaceAccountRechargeType";
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

 export type GetWorkspaceAccountRechargePathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string, uuid
    */
    recharge_id: string;
};
/**
 * @description Successful Response
*/
export type GetWorkspaceAccountRecharge200Type = WorkspaceAccountRechargeType;
/**
 * @description Unprocessable Entity
*/
export type GetWorkspaceAccountRecharge422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
/**
 * @description Successful Response
*/
export type GetWorkspaceAccountRechargeQueryResponseType = WorkspaceAccountRechargeType;
export type GetWorkspaceAccountRechargeTypeQuery = {
    Response: GetWorkspaceAccountRechargeQueryResponseType;
    PathParams: GetWorkspaceAccountRechargePathParamsType;
    Errors: GetWorkspaceAccountRecharge422Type;
};