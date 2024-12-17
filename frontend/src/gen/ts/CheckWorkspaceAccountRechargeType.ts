import type { WorkspaceAccountRechargeType } from "./WorkspaceAccountRechargeType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type CheckWorkspaceAccountRecharge400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type CheckWorkspaceAccountRecharge401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type CheckWorkspaceAccountRecharge404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type CheckWorkspaceAccountRecharge409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type CheckWorkspaceAccountRecharge412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type CheckWorkspaceAccountRecharge422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type CheckWorkspaceAccountRecharge500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type CheckWorkspaceAccountRechargeMutationResponseType = WorkspaceAccountRechargeType;
export type CheckWorkspaceAccountRechargeTypeMutation = {
    Response: CheckWorkspaceAccountRechargeMutationResponseType;
    PathParams: CheckWorkspaceAccountRechargePathParamsType;
    Errors: CheckWorkspaceAccountRecharge400Type | CheckWorkspaceAccountRecharge401Type | CheckWorkspaceAccountRecharge404Type | CheckWorkspaceAccountRecharge409Type | CheckWorkspaceAccountRecharge412Type | CheckWorkspaceAccountRecharge422Type | CheckWorkspaceAccountRecharge500Type;
};
