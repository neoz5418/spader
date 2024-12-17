import type { PaginatedListZoneType } from "./PaginatedListZoneType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type ListWorkspaceZonesPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
export type ListWorkspaceZonesQueryParamsType = {
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
export type ListWorkspaceZones200Type = PaginatedListZoneType;
/**
 * @description Request error
*/
export type ListWorkspaceZones400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type ListWorkspaceZones401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type ListWorkspaceZones404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type ListWorkspaceZones409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type ListWorkspaceZones412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type ListWorkspaceZones422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type ListWorkspaceZones500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type ListWorkspaceZonesQueryResponseType = PaginatedListZoneType;
export type ListWorkspaceZonesTypeQuery = {
    Response: ListWorkspaceZonesQueryResponseType;
    PathParams: ListWorkspaceZonesPathParamsType;
    QueryParams: ListWorkspaceZonesQueryParamsType;
    Errors: ListWorkspaceZones400Type | ListWorkspaceZones401Type | ListWorkspaceZones404Type | ListWorkspaceZones409Type | ListWorkspaceZones412Type | ListWorkspaceZones422Type | ListWorkspaceZones500Type;
};
