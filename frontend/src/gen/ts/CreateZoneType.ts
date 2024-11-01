import type { ZoneType } from "./ZoneType";
import type { ErrorType } from "./ErrorType";
import type { ZoneCreateType } from "./ZoneCreateType";

 /**
 * @description Successful Response
*/
export type CreateZone201Type = ZoneType;
/**
 * @description Request error
*/
export type CreateZone400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type CreateZone401Type = ErrorType;
/**
 * @description Not found
*/
export type CreateZone404Type = ErrorType;
/**
 * @description Validation error
*/
export type CreateZone422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type CreateZone429Type = ErrorType;
/**
 * @description Internal server error
*/
export type CreateZone500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type CreateZone503Type = ErrorType;
export type CreateZoneMutationRequestType = ZoneCreateType;
/**
 * @description Successful Response
*/
export type CreateZoneMutationResponseType = ZoneType;
export type CreateZoneTypeMutation = {
    Response: CreateZoneMutationResponseType;
    Request: CreateZoneMutationRequestType;
    Errors: CreateZone400Type | CreateZone401Type | CreateZone404Type | CreateZone422Type | CreateZone429Type | CreateZone500Type | CreateZone503Type;
};