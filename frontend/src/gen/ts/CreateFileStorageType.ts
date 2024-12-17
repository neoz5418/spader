import type { OperationType } from "./OperationType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";
import type { CreateFileStorageRequestType } from "./CreateFileStorageRequestType";

 export type CreateFileStoragePathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    zone: string;
};
/**
 * @description Successful Response
*/
export type CreateFileStorage201Type = OperationType;
/**
 * @description Request error
*/
export type CreateFileStorage400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type CreateFileStorage401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type CreateFileStorage404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type CreateFileStorage409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type CreateFileStorage412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type CreateFileStorage422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type CreateFileStorage500Type = ErrorInternalType;
export type CreateFileStorageMutationRequestType = CreateFileStorageRequestType;
/**
 * @description Successful Response
*/
export type CreateFileStorageMutationResponseType = OperationType;
export type CreateFileStorageTypeMutation = {
    Response: CreateFileStorageMutationResponseType;
    Request: CreateFileStorageMutationRequestType;
    PathParams: CreateFileStoragePathParamsType;
    Errors: CreateFileStorage400Type | CreateFileStorage401Type | CreateFileStorage404Type | CreateFileStorage409Type | CreateFileStorage412Type | CreateFileStorage422Type | CreateFileStorage500Type;
};
