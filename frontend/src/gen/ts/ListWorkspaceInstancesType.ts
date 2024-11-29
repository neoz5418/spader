import type { ListInstancesSortOptionsType } from "./ListInstancesSortOptionsType";
import type { SortOrderType } from "./SortOrderType";
import type { PaginatedListInstancePublicType } from "./PaginatedListInstancePublicType";
import type { ErrorType } from "./ErrorType";

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
export type ListWorkspaceInstances400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type ListWorkspaceInstances401Type = ErrorType;
/**
 * @description Not found
*/
export type ListWorkspaceInstances404Type = ErrorType;
/**
 * @description Validation error
*/
export type ListWorkspaceInstances422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type ListWorkspaceInstances429Type = ErrorType;
/**
 * @description Internal server error
*/
export type ListWorkspaceInstances500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type ListWorkspaceInstances503Type = ErrorType;
/**
 * @description Successful Response
*/
export type ListWorkspaceInstancesQueryResponseType = PaginatedListInstancePublicType;
export type ListWorkspaceInstancesTypeQuery = {
    Response: ListWorkspaceInstancesQueryResponseType;
    PathParams: ListWorkspaceInstancesPathParamsType;
    QueryParams: ListWorkspaceInstancesQueryParamsType;
    Errors: ListWorkspaceInstances400Type | ListWorkspaceInstances401Type | ListWorkspaceInstances404Type | ListWorkspaceInstances422Type | ListWorkspaceInstances429Type | ListWorkspaceInstances500Type | ListWorkspaceInstances503Type;
};
