import type { OperationType } from "./OperationType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type DeleteFileStoragePathParamsType = {
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
export type DeleteFileStorage200Type = OperationType;
/**
 * @description Request error
*/
export type DeleteFileStorage400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type DeleteFileStorage401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type DeleteFileStorage404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type DeleteFileStorage409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type DeleteFileStorage412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type DeleteFileStorage422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type DeleteFileStorage500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type DeleteFileStorageMutationResponseType = OperationType;
export type DeleteFileStorageTypeMutation = {
    Response: DeleteFileStorageMutationResponseType;
    PathParams: DeleteFileStoragePathParamsType;
    Errors: DeleteFileStorage400Type | DeleteFileStorage401Type | DeleteFileStorage404Type | DeleteFileStorage409Type | DeleteFileStorage412Type | DeleteFileStorage422Type | DeleteFileStorage500Type;
};
