import type { ImageType } from "./ImageType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type CreateImage400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type CreateImage401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type CreateImage404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type CreateImage409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type CreateImage412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type CreateImage422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type CreateImage500Type = ErrorInternalType;
export type CreateImageMutationRequestType = ImageType;
/**
 * @description Successful Response
*/
export type CreateImageMutationResponseType = ImageType;
export type CreateImageTypeMutation = {
    Response: CreateImageMutationResponseType;
    Request: CreateImageMutationRequestType;
    PathParams: CreateImagePathParamsType;
    Errors: CreateImage400Type | CreateImage401Type | CreateImage404Type | CreateImage409Type | CreateImage412Type | CreateImage422Type | CreateImage500Type;
};
