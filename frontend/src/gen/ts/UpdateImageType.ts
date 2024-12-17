import type { ImageType } from "./ImageType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type UpdateImage400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type UpdateImage401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type UpdateImage404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type UpdateImage409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type UpdateImage412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type UpdateImage422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type UpdateImage500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type UpdateImageMutationResponseType = ImageType;
export type UpdateImageTypeMutation = {
    Response: UpdateImageMutationResponseType;
    PathParams: UpdateImagePathParamsType;
    Errors: UpdateImage400Type | UpdateImage401Type | UpdateImage404Type | UpdateImage409Type | UpdateImage412Type | UpdateImage422Type | UpdateImage500Type;
};
