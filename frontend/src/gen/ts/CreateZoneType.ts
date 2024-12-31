import type { ZoneType } from "./ZoneType";
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
import type { ZoneBaseType } from "./ZoneBaseType";

 /**
 * @description Successful Response
*/
export type CreateZone201Type = ZoneType;
/**
 * @description Unprocessable Entity
*/
export type CreateZone422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
export type CreateZoneMutationRequestType = ZoneBaseType;
/**
 * @description Successful Response
*/
export type CreateZoneMutationResponseType = ZoneType;
export type CreateZoneTypeMutation = {
    Response: CreateZoneMutationResponseType;
    Request: CreateZoneMutationRequestType;
    Errors: CreateZone422Type;
};
