import type { PaginatedListGpuTypeType } from "./PaginatedListGpuTypeType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type ListWorkspaceZoneGpuTypesPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    zone: string;
};
export type ListWorkspaceZoneGpuTypesQueryParamsType = {
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
export type ListWorkspaceZoneGpuTypes200Type = PaginatedListGpuTypeType;
/**
 * @description Request error
*/
export type ListWorkspaceZoneGpuTypes400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type ListWorkspaceZoneGpuTypes401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type ListWorkspaceZoneGpuTypes404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type ListWorkspaceZoneGpuTypes409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type ListWorkspaceZoneGpuTypes412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type ListWorkspaceZoneGpuTypes422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type ListWorkspaceZoneGpuTypes500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type ListWorkspaceZoneGpuTypesQueryResponseType = PaginatedListGpuTypeType;
export type ListWorkspaceZoneGpuTypesTypeQuery = {
    Response: ListWorkspaceZoneGpuTypesQueryResponseType;
    PathParams: ListWorkspaceZoneGpuTypesPathParamsType;
    QueryParams: ListWorkspaceZoneGpuTypesQueryParamsType;
    Errors: ListWorkspaceZoneGpuTypes400Type | ListWorkspaceZoneGpuTypes401Type | ListWorkspaceZoneGpuTypes404Type | ListWorkspaceZoneGpuTypes409Type | ListWorkspaceZoneGpuTypes412Type | ListWorkspaceZoneGpuTypes422Type | ListWorkspaceZoneGpuTypes500Type;
};
