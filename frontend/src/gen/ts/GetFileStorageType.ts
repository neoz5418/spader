import type { FileStorageType } from "./FileStorageType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type GetFileStoragePathParamsType = {
    /**
     * @type string
    */
    workspace: string;
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
export type GetFileStorage200Type = FileStorageType;
/**
 * @description Request error
*/
export type GetFileStorage400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type GetFileStorage401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type GetFileStorage404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type GetFileStorage409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type GetFileStorage412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type GetFileStorage422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type GetFileStorage500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type GetFileStorageQueryResponseType = FileStorageType;
export type GetFileStorageTypeQuery = {
    Response: GetFileStorageQueryResponseType;
    PathParams: GetFileStoragePathParamsType;
    Errors: GetFileStorage400Type | GetFileStorage401Type | GetFileStorage404Type | GetFileStorage409Type | GetFileStorage412Type | GetFileStorage422Type | GetFileStorage500Type;
};
