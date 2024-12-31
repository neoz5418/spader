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
import type { CreateFileStorageRequestType } from "./CreateFileStorageRequestType";

 export type CreateFileStoragePathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    zone: string;
};
/**
 * @description Successful Response
*/
export type CreateFileStorage201Type = OperationType;
/**
 * @description Unprocessable Entity
*/
export type CreateFileStorage422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
export type CreateFileStorageMutationRequestType = CreateFileStorageRequestType;
/**
 * @description Successful Response
*/
export type CreateFileStorageMutationResponseType = OperationType;
export type CreateFileStorageTypeMutation = {
    Response: CreateFileStorageMutationResponseType;
    Request: CreateFileStorageMutationRequestType;
    PathParams: CreateFileStoragePathParamsType;
    Errors: CreateFileStorage422Type;
};
