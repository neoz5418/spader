import type { PaginatedListFileInfoType } from "./PaginatedListFileInfoType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type ListFilesInFileStorage400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type ListFilesInFileStorage401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type ListFilesInFileStorage404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type ListFilesInFileStorage409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type ListFilesInFileStorage412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type ListFilesInFileStorage422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type ListFilesInFileStorage500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type ListFilesInFileStorageQueryResponseType = PaginatedListFileInfoType;
export type ListFilesInFileStorageTypeQuery = {
    Response: ListFilesInFileStorageQueryResponseType;
    PathParams: ListFilesInFileStoragePathParamsType;
    QueryParams: ListFilesInFileStorageQueryParamsType;
    Errors: ListFilesInFileStorage400Type | ListFilesInFileStorage401Type | ListFilesInFileStorage404Type | ListFilesInFileStorage409Type | ListFilesInFileStorage412Type | ListFilesInFileStorage422Type | ListFilesInFileStorage500Type;
};
