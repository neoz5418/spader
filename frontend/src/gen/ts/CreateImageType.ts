import type { ImageType } from "./ImageType";
import type { ErrorType } from "./ErrorType";

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
 * @description Request error
*/
export type CreateImage400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type CreateImage401Type = ErrorType;
/**
 * @description Not found
*/
export type CreateImage404Type = ErrorType;
/**
 * @description Validation error
*/
export type CreateImage422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type CreateImage429Type = ErrorType;
/**
 * @description Internal server error
*/
export type CreateImage500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type CreateImage503Type = ErrorType;
export type CreateImageMutationRequestType = ImageType;
/**
 * @description Successful Response
*/
export type CreateImageMutationResponseType = ImageType;
export type CreateImageTypeMutation = {
    Response: CreateImageMutationResponseType;
    Request: CreateImageMutationRequestType;
    PathParams: CreateImagePathParamsType;
    Errors: CreateImage400Type | CreateImage401Type | CreateImage404Type | CreateImage422Type | CreateImage429Type | CreateImage500Type | CreateImage503Type;
};
