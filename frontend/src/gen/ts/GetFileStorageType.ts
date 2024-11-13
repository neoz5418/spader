import type { FileStorageType } from "./FileStorageType";
import type { ErrorType } from "./ErrorType";

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
export type GetFileStorage400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type GetFileStorage401Type = ErrorType;
/**
 * @description Not found
*/
export type GetFileStorage404Type = ErrorType;
/**
 * @description Validation error
*/
export type GetFileStorage422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type GetFileStorage429Type = ErrorType;
/**
 * @description Internal server error
*/
export type GetFileStorage500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type GetFileStorage503Type = ErrorType;
/**
 * @description Successful Response
*/
export type GetFileStorageQueryResponseType = FileStorageType;
export type GetFileStorageTypeQuery = {
    Response: GetFileStorageQueryResponseType;
    PathParams: GetFileStoragePathParamsType;
    Errors: GetFileStorage400Type | GetFileStorage401Type | GetFileStorage404Type | GetFileStorage422Type | GetFileStorage429Type | GetFileStorage500Type | GetFileStorage503Type;
};