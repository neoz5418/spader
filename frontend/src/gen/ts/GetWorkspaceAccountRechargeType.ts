import type { WorkspaceAccountRechargeType } from "./WorkspaceAccountRechargeType";
import type { ErrorType } from "./ErrorType";

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
 * @description Request error
*/
export type GetWorkspaceAccountRecharge400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type GetWorkspaceAccountRecharge401Type = ErrorType;
/**
 * @description Not found
*/
export type GetWorkspaceAccountRecharge404Type = ErrorType;
/**
 * @description Validation error
*/
export type GetWorkspaceAccountRecharge422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type GetWorkspaceAccountRecharge429Type = ErrorType;
/**
 * @description Internal server error
*/
export type GetWorkspaceAccountRecharge500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type GetWorkspaceAccountRecharge503Type = ErrorType;
/**
 * @description Successful Response
*/
export type GetWorkspaceAccountRechargeQueryResponseType = WorkspaceAccountRechargeType;
export type GetWorkspaceAccountRechargeTypeQuery = {
    Response: GetWorkspaceAccountRechargeQueryResponseType;
    PathParams: GetWorkspaceAccountRechargePathParamsType;
    Errors: GetWorkspaceAccountRecharge400Type | GetWorkspaceAccountRecharge401Type | GetWorkspaceAccountRecharge404Type | GetWorkspaceAccountRecharge422Type | GetWorkspaceAccountRecharge429Type | GetWorkspaceAccountRecharge500Type | GetWorkspaceAccountRecharge503Type;
};