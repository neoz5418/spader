import type { PaginatedListResourceUsageRecordType } from "./PaginatedListResourceUsageRecordType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type ListWorkspaceResourceUsageRecords400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type ListWorkspaceResourceUsageRecords401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type ListWorkspaceResourceUsageRecords404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type ListWorkspaceResourceUsageRecords409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type ListWorkspaceResourceUsageRecords412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type ListWorkspaceResourceUsageRecords422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type ListWorkspaceResourceUsageRecords500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type ListWorkspaceResourceUsageRecordsQueryResponseType = PaginatedListResourceUsageRecordType;
export type ListWorkspaceResourceUsageRecordsTypeQuery = {
    Response: ListWorkspaceResourceUsageRecordsQueryResponseType;
    PathParams: ListWorkspaceResourceUsageRecordsPathParamsType;
    QueryParams: ListWorkspaceResourceUsageRecordsQueryParamsType;
    Errors: ListWorkspaceResourceUsageRecords400Type | ListWorkspaceResourceUsageRecords401Type | ListWorkspaceResourceUsageRecords404Type | ListWorkspaceResourceUsageRecords409Type | ListWorkspaceResourceUsageRecords412Type | ListWorkspaceResourceUsageRecords422Type | ListWorkspaceResourceUsageRecords500Type;
};
