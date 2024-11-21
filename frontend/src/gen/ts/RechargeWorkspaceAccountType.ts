import type { CurrencyType } from "./CurrencyType";
import type { RechargeTypeType } from "./RechargeTypeType";
import type { WorkspaceAccountRechargeType } from "./WorkspaceAccountRechargeType";
import type { ErrorType } from "./ErrorType";

 export type RechargeWorkspaceAccountType = {
    /**
     * @type integer
    */
    amount: number;
    /**
     * @type string
    */
    currency: CurrencyType;
    /**
     * @type string
    */
    type: RechargeTypeType;
    /**
     * @type string
    */
    callback_url: string;
};

 export type RechargeWorkspaceAccountPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type RechargeWorkspaceAccount200Type = WorkspaceAccountRechargeType;
/**
 * @description Request error
*/
export type RechargeWorkspaceAccount400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type RechargeWorkspaceAccount401Type = ErrorType;
/**
 * @description Not found
*/
export type RechargeWorkspaceAccount404Type = ErrorType;
/**
 * @description Validation error
*/
export type RechargeWorkspaceAccount422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type RechargeWorkspaceAccount429Type = ErrorType;
/**
 * @description Internal server error
*/
export type RechargeWorkspaceAccount500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type RechargeWorkspaceAccount503Type = ErrorType;
export type RechargeWorkspaceAccountMutationRequestType = RechargeWorkspaceAccountType;
/**
 * @description Successful Response
*/
export type RechargeWorkspaceAccountMutationResponseType = WorkspaceAccountRechargeType;
export type RechargeWorkspaceAccountTypeMutation = {
    Response: RechargeWorkspaceAccountMutationResponseType;
    Request: RechargeWorkspaceAccountMutationRequestType;
    PathParams: RechargeWorkspaceAccountPathParamsType;
    Errors: RechargeWorkspaceAccount400Type | RechargeWorkspaceAccount401Type | RechargeWorkspaceAccount404Type | RechargeWorkspaceAccount422Type | RechargeWorkspaceAccount429Type | RechargeWorkspaceAccount500Type | RechargeWorkspaceAccount503Type;
};
