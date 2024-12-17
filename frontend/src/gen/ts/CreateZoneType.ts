import type { ZoneType } from "./ZoneType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";
import type { ZoneBaseType } from "./ZoneBaseType";

 /**
 * @description Successful Response
*/
export type CreateZone201Type = ZoneType;
/**
 * @description Request error
*/
export type CreateZone400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type CreateZone401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type CreateZone404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type CreateZone409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type CreateZone412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type CreateZone422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type CreateZone500Type = ErrorInternalType;
export type CreateZoneMutationRequestType = ZoneBaseType;
/**
 * @description Successful Response
*/
export type CreateZoneMutationResponseType = ZoneType;
export type CreateZoneTypeMutation = {
    Response: CreateZoneMutationResponseType;
    Request: CreateZoneMutationRequestType;
    Errors: CreateZone400Type | CreateZone401Type | CreateZone404Type | CreateZone409Type | CreateZone412Type | CreateZone422Type | CreateZone500Type;
};
