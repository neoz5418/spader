import type { WorkspaceAccountRechargeType } from "./WorkspaceAccountRechargeType";
import type { ErrorType } from "./ErrorType";

 export type CheckWorkspaceAccountRechargePathParamsType = {
    /**
     * @type string, uuid
    */
    recharge_id: string;
};
/**
 * @description Successful Response
*/
export type CheckWorkspaceAccountRecharge200Type = WorkspaceAccountRechargeType;
/**
 * @description Request error
*/
export type CheckWorkspaceAccountRecharge400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type CheckWorkspaceAccountRecharge401Type = ErrorType;
/**
 * @description Not found
*/
export type CheckWorkspaceAccountRecharge404Type = ErrorType;
/**
 * @description Validation error
*/
export type CheckWorkspaceAccountRecharge422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type CheckWorkspaceAccountRecharge429Type = ErrorType;
/**
 * @description Internal server error
*/
export type CheckWorkspaceAccountRecharge500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type CheckWorkspaceAccountRecharge503Type = ErrorType;
/**
 * @description Successful Response
*/
export type CheckWorkspaceAccountRechargeMutationResponseType = WorkspaceAccountRechargeType;
export type CheckWorkspaceAccountRechargeTypeMutation = {
    Response: CheckWorkspaceAccountRechargeMutationResponseType;
    PathParams: CheckWorkspaceAccountRechargePathParamsType;
    Errors: CheckWorkspaceAccountRecharge400Type | CheckWorkspaceAccountRecharge401Type | CheckWorkspaceAccountRecharge404Type | CheckWorkspaceAccountRecharge422Type | CheckWorkspaceAccountRecharge429Type | CheckWorkspaceAccountRecharge500Type | CheckWorkspaceAccountRecharge503Type;
};
