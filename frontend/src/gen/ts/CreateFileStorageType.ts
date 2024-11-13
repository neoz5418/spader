import type { OperationType } from "./OperationType";
import type { ErrorType } from "./ErrorType";
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
export type CreateFileStorage400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type CreateFileStorage401Type = ErrorType;
/**
 * @description Not found
*/
export type CreateFileStorage404Type = ErrorType;
/**
 * @description Validation error
*/
export type CreateFileStorage422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type CreateFileStorage429Type = ErrorType;
/**
 * @description Internal server error
*/
export type CreateFileStorage500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type CreateFileStorage503Type = ErrorType;
export type CreateFileStorageMutationRequestType = CreateFileStorageRequestType;
/**
 * @description Successful Response
*/
export type CreateFileStorageMutationResponseType = OperationType;
export type CreateFileStorageTypeMutation = {
    Response: CreateFileStorageMutationResponseType;
    Request: CreateFileStorageMutationRequestType;
    PathParams: CreateFileStoragePathParamsType;
    Errors: CreateFileStorage400Type | CreateFileStorage401Type | CreateFileStorage404Type | CreateFileStorage422Type | CreateFileStorage429Type | CreateFileStorage500Type | CreateFileStorage503Type;
};