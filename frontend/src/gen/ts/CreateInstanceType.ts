import type { OperationType } from "./OperationType";
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

 export type CreateInstancePathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type CreateInstance201Type = OperationType;
/**
 * @description Unprocessable Entity
*/
export type CreateInstance422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
export type CreateInstanceMutationRequestType = CreateInstanceRequestType;
/**
 * @description Successful Response
*/
export type CreateInstanceMutationResponseType = OperationType;
export type CreateInstanceTypeMutation = {
    Response: CreateInstanceMutationResponseType;
    Request: CreateInstanceMutationRequestType;
    PathParams: CreateInstancePathParamsType;
    Errors: CreateInstance422Type;
};
