import type { ListInstancesSortOptionsType } from "./ListInstancesSortOptionsType";
import type { SortOrderType } from "./SortOrderType";
import type { PaginatedListInstancePublicType } from "./PaginatedListInstancePublicType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type ListWorkspaceInstancesPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
export type ListWorkspaceInstancesQueryParamsType = {
    /**
     * @type string | undefined
    */
    zone?: string;
    /**
     * @type string | undefined
    */
    search?: string;
    /**
     * @type string | undefined
    */
    status?: string;
    /**
     * @type string | undefined
    */
    sort?: ListInstancesSortOptionsType;
    /**
     * @type string | undefined
    */
    sort_order?: SortOrderType;
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
export type ListWorkspaceInstances200Type = PaginatedListInstancePublicType;
/**
 * @description Request error
*/
export type ListWorkspaceInstances400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type ListWorkspaceInstances401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type ListWorkspaceInstances404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type ListWorkspaceInstances409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type ListWorkspaceInstances412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type ListWorkspaceInstances422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type ListWorkspaceInstances500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type ListWorkspaceInstancesQueryResponseType = PaginatedListInstancePublicType;
export type ListWorkspaceInstancesTypeQuery = {
    Response: ListWorkspaceInstancesQueryResponseType;
    PathParams: ListWorkspaceInstancesPathParamsType;
    QueryParams: ListWorkspaceInstancesQueryParamsType;
    Errors: ListWorkspaceInstances400Type | ListWorkspaceInstances401Type | ListWorkspaceInstances404Type | ListWorkspaceInstances409Type | ListWorkspaceInstances412Type | ListWorkspaceInstances422Type | ListWorkspaceInstances500Type;
};
