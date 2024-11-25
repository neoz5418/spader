import type { PaginatedListResourceUsageRecordType } from "./PaginatedListResourceUsageRecordType";
import type { ErrorType } from "./ErrorType";

 export type ListWorkspaceResourceUsageRecordsPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
export type ListWorkspaceResourceUsageRecordsQueryParamsType = {
    /**
     * @type string, uuid
    */
    target_id: string;
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
export type ListWorkspaceResourceUsageRecords200Type = PaginatedListResourceUsageRecordType;
/**
 * @description Request error
*/
export type ListWorkspaceResourceUsageRecords400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type ListWorkspaceResourceUsageRecords401Type = ErrorType;
/**
 * @description Not found
*/
export type ListWorkspaceResourceUsageRecords404Type = ErrorType;
/**
 * @description Validation error
*/
export type ListWorkspaceResourceUsageRecords422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type ListWorkspaceResourceUsageRecords429Type = ErrorType;
/**
 * @description Internal server error
*/
export type ListWorkspaceResourceUsageRecords500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type ListWorkspaceResourceUsageRecords503Type = ErrorType;
/**
 * @description Successful Response
*/
export type ListWorkspaceResourceUsageRecordsQueryResponseType = PaginatedListResourceUsageRecordType;
export type ListWorkspaceResourceUsageRecordsTypeQuery = {
    Response: ListWorkspaceResourceUsageRecordsQueryResponseType;
    PathParams: ListWorkspaceResourceUsageRecordsPathParamsType;
    QueryParams: ListWorkspaceResourceUsageRecordsQueryParamsType;
    Errors: ListWorkspaceResourceUsageRecords400Type | ListWorkspaceResourceUsageRecords401Type | ListWorkspaceResourceUsageRecords404Type | ListWorkspaceResourceUsageRecords422Type | ListWorkspaceResourceUsageRecords429Type | ListWorkspaceResourceUsageRecords500Type | ListWorkspaceResourceUsageRecords503Type;
};