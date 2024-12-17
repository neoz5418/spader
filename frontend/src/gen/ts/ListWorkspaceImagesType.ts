import type { PaginatedListImageType } from "./PaginatedListImageType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type ListWorkspaceImagesPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    zone: string;
};
export type ListWorkspaceImagesQueryParamsType = {
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
export type ListWorkspaceImages200Type = PaginatedListImageType;
/**
 * @description Request error
*/
export type ListWorkspaceImages400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type ListWorkspaceImages401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type ListWorkspaceImages404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type ListWorkspaceImages409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type ListWorkspaceImages412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type ListWorkspaceImages422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type ListWorkspaceImages500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type ListWorkspaceImagesQueryResponseType = PaginatedListImageType;
export type ListWorkspaceImagesTypeQuery = {
    Response: ListWorkspaceImagesQueryResponseType;
    PathParams: ListWorkspaceImagesPathParamsType;
    QueryParams: ListWorkspaceImagesQueryParamsType;
    Errors: ListWorkspaceImages400Type | ListWorkspaceImages401Type | ListWorkspaceImages404Type | ListWorkspaceImages409Type | ListWorkspaceImages412Type | ListWorkspaceImages422Type | ListWorkspaceImages500Type;
};
