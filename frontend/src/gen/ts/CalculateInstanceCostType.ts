import type { InstanceCostType } from "./InstanceCostType";
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
import type { CreateInstanceRequestType } from "./CreateInstanceRequestType";

 export type CalculateInstanceCostPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type CalculateInstanceCost200Type = InstanceCostType;
/**
 * @description Unprocessable Entity
*/
export type CalculateInstanceCost422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
export type CalculateInstanceCostMutationRequestType = CreateInstanceRequestType;
/**
 * @description Successful Response
*/
export type CalculateInstanceCostMutationResponseType = InstanceCostType;
export type CalculateInstanceCostTypeMutation = {
    Response: CalculateInstanceCostMutationResponseType;
    Request: CalculateInstanceCostMutationRequestType;
    PathParams: CalculateInstanceCostPathParamsType;
    Errors: CalculateInstanceCost422Type;
};