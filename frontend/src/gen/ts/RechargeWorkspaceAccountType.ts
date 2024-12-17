import type { CurrencyType } from "./CurrencyType";
import type { RechargeTypeType } from "./RechargeTypeType";
import type { WorkspaceAccountRechargeType } from "./WorkspaceAccountRechargeType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type RechargeWorkspaceAccount400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type RechargeWorkspaceAccount401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type RechargeWorkspaceAccount404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type RechargeWorkspaceAccount409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type RechargeWorkspaceAccount412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type RechargeWorkspaceAccount422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type RechargeWorkspaceAccount500Type = ErrorInternalType;
export type RechargeWorkspaceAccountMutationRequestType = RechargeWorkspaceAccountType;
/**
 * @description Successful Response
*/
export type RechargeWorkspaceAccountMutationResponseType = WorkspaceAccountRechargeType;
export type RechargeWorkspaceAccountTypeMutation = {
    Response: RechargeWorkspaceAccountMutationResponseType;
    Request: RechargeWorkspaceAccountMutationRequestType;
    PathParams: RechargeWorkspaceAccountPathParamsType;
    Errors: RechargeWorkspaceAccount400Type | RechargeWorkspaceAccount401Type | RechargeWorkspaceAccount404Type | RechargeWorkspaceAccount409Type | RechargeWorkspaceAccount412Type | RechargeWorkspaceAccount422Type | RechargeWorkspaceAccount500Type;
};
