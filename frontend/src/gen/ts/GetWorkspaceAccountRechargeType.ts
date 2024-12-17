import type { WorkspaceAccountRechargeType } from "./WorkspaceAccountRechargeType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type GetWorkspaceAccountRecharge400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type GetWorkspaceAccountRecharge401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type GetWorkspaceAccountRecharge404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type GetWorkspaceAccountRecharge409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type GetWorkspaceAccountRecharge412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type GetWorkspaceAccountRecharge422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type GetWorkspaceAccountRecharge500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type GetWorkspaceAccountRechargeQueryResponseType = WorkspaceAccountRechargeType;
export type GetWorkspaceAccountRechargeTypeQuery = {
    Response: GetWorkspaceAccountRechargeQueryResponseType;
    PathParams: GetWorkspaceAccountRechargePathParamsType;
    Errors: GetWorkspaceAccountRecharge400Type | GetWorkspaceAccountRecharge401Type | GetWorkspaceAccountRecharge404Type | GetWorkspaceAccountRecharge409Type | GetWorkspaceAccountRecharge412Type | GetWorkspaceAccountRecharge422Type | GetWorkspaceAccountRecharge500Type;
};
