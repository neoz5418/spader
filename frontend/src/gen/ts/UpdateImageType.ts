import type { ImageType } from "./ImageType";
import type { ErrorType } from "./ErrorType";

 export type UpdateImagePathParamsType = {
    /**
     * @type string
    */
    zone: string;
    /**
     * @type string
    */
    name: string;
};
/**
 * @description Successful Response
*/
export type UpdateImage200Type = ImageType;
/**
 * @description Request error
*/
export type UpdateImage400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type UpdateImage401Type = ErrorType;
/**
 * @description Not found
*/
export type UpdateImage404Type = ErrorType;
/**
 * @description Validation error
*/
export type UpdateImage422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type UpdateImage429Type = ErrorType;
/**
 * @description Internal server error
*/
export type UpdateImage500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type UpdateImage503Type = ErrorType;
/**
 * @description Successful Response
*/
export type UpdateImageMutationResponseType = ImageType;
export type UpdateImageTypeMutation = {
    Response: UpdateImageMutationResponseType;
    PathParams: UpdateImagePathParamsType;
    Errors: UpdateImage400Type | UpdateImage401Type | UpdateImage404Type | UpdateImage422Type | UpdateImage429Type | UpdateImage500Type | UpdateImage503Type;
};