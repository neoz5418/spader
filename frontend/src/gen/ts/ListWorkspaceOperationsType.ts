import type { CursorListOperationType } from "./CursorListOperationType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type ListWorkspaceOperationsPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    zone: string;
};
export type ListWorkspaceOperationsQueryParamsType = {
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
export type ListWorkspaceOperations200Type = CursorListOperationType;
/**
 * @description Request error
*/
export type ListWorkspaceOperations400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type ListWorkspaceOperations401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type ListWorkspaceOperations404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type ListWorkspaceOperations409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type ListWorkspaceOperations412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type ListWorkspaceOperations422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type ListWorkspaceOperations500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type ListWorkspaceOperationsQueryResponseType = CursorListOperationType;
export type ListWorkspaceOperationsTypeQuery = {
    Response: ListWorkspaceOperationsQueryResponseType;
    PathParams: ListWorkspaceOperationsPathParamsType;
    QueryParams: ListWorkspaceOperationsQueryParamsType;
    Errors: ListWorkspaceOperations400Type | ListWorkspaceOperations401Type | ListWorkspaceOperations404Type | ListWorkspaceOperations409Type | ListWorkspaceOperations412Type | ListWorkspaceOperations422Type | ListWorkspaceOperations500Type;
};
