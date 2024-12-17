import type { PaginatedListFileStorageType } from "./PaginatedListFileStorageType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type ListWorkspaceFileStoragesPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    zone: string;
};
export type ListWorkspaceFileStoragesQueryParamsType = {
    /**
     * @default 0
     * @type integer | undefined
    */
    offset?: number;
    /**
     * @default 20
     * @type integer | undefined
    */
    limit?: number;
};
/**
 * @description Successful Response
*/
export type ListWorkspaceFileStorages200Type = PaginatedListFileStorageType;
/**
 * @description Request error
*/
export type ListWorkspaceFileStorages400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type ListWorkspaceFileStorages401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type ListWorkspaceFileStorages404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type ListWorkspaceFileStorages409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type ListWorkspaceFileStorages412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type ListWorkspaceFileStorages422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type ListWorkspaceFileStorages500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type ListWorkspaceFileStoragesQueryResponseType = PaginatedListFileStorageType;
export type ListWorkspaceFileStoragesTypeQuery = {
    Response: ListWorkspaceFileStoragesQueryResponseType;
    PathParams: ListWorkspaceFileStoragesPathParamsType;
    QueryParams: ListWorkspaceFileStoragesQueryParamsType;
    Errors: ListWorkspaceFileStorages400Type | ListWorkspaceFileStorages401Type | ListWorkspaceFileStorages404Type | ListWorkspaceFileStorages409Type | ListWorkspaceFileStorages412Type | ListWorkspaceFileStorages422Type | ListWorkspaceFileStorages500Type;
};
