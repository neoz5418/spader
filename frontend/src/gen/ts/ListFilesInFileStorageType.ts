import type { PaginatedListFileInfoType } from "./PaginatedListFileInfoType";
import type { ErrorType } from "./ErrorType";

 export type ListFilesInFileStoragePathParamsType = {
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
export type ListFilesInFileStorageQueryParamsType = {
    /**
     * @default "/"
     * @type string | undefined
    */
    path?: string;
};
/**
 * @description Successful Response
*/
export type ListFilesInFileStorage200Type = PaginatedListFileInfoType;
/**
 * @description Request error
*/
export type ListFilesInFileStorage400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type ListFilesInFileStorage401Type = ErrorType;
/**
 * @description Not found
*/
export type ListFilesInFileStorage404Type = ErrorType;
/**
 * @description Validation error
*/
export type ListFilesInFileStorage422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type ListFilesInFileStorage429Type = ErrorType;
/**
 * @description Internal server error
*/
export type ListFilesInFileStorage500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type ListFilesInFileStorage503Type = ErrorType;
/**
 * @description Successful Response
*/
export type ListFilesInFileStorageQueryResponseType = PaginatedListFileInfoType;
export type ListFilesInFileStorageTypeQuery = {
    Response: ListFilesInFileStorageQueryResponseType;
    PathParams: ListFilesInFileStoragePathParamsType;
    QueryParams: ListFilesInFileStorageQueryParamsType;
    Errors: ListFilesInFileStorage400Type | ListFilesInFileStorage401Type | ListFilesInFileStorage404Type | ListFilesInFileStorage422Type | ListFilesInFileStorage429Type | ListFilesInFileStorage500Type | ListFilesInFileStorage503Type;
};
