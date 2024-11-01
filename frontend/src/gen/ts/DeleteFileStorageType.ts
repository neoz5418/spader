import type { OperationType } from "./OperationType";
import type { ErrorType } from "./ErrorType";

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
export type DeleteFileStorage400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type DeleteFileStorage401Type = ErrorType;
/**
 * @description Not found
*/
export type DeleteFileStorage404Type = ErrorType;
/**
 * @description Validation error
*/
export type DeleteFileStorage422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type DeleteFileStorage429Type = ErrorType;
/**
 * @description Internal server error
*/
export type DeleteFileStorage500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type DeleteFileStorage503Type = ErrorType;
/**
 * @description Successful Response
*/
export type DeleteFileStorageMutationResponseType = OperationType;
export type DeleteFileStorageTypeMutation = {
    Response: DeleteFileStorageMutationResponseType;
    PathParams: DeleteFileStoragePathParamsType;
    Errors: DeleteFileStorage400Type | DeleteFileStorage401Type | DeleteFileStorage404Type | DeleteFileStorage422Type | DeleteFileStorage429Type | DeleteFileStorage500Type | DeleteFileStorage503Type;
};