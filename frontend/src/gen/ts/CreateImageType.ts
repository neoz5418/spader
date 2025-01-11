import type { ImageType } from "./ImageType";
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

 export type CreateImagePathParamsType = {
    /**
     * @type string
    */
    zone: string;
};
/**
 * @description Successful Response
*/
export type CreateImage201Type = ImageType;
/**
 * @description Unprocessable Entity
*/
export type CreateImage422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
export type CreateImageMutationRequestType = ImageType;
/**
 * @description Successful Response
*/
export type CreateImageMutationResponseType = ImageType;
export type CreateImageTypeMutation = {
    Response: CreateImageMutationResponseType;
    Request: CreateImageMutationRequestType;
    PathParams: CreateImagePathParamsType;
    Errors: CreateImage422Type;
};