import type { PaginatedListWorkspaceAccountRechargeType } from "./PaginatedListWorkspaceAccountRechargeType";
import type { ErrorType } from "./ErrorType";

 export type ListWorkspaceAccountRechargesPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
export type ListWorkspaceAccountRechargesQueryParamsType = {
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
export type ListWorkspaceAccountRecharges200Type = PaginatedListWorkspaceAccountRechargeType;
/**
 * @description Request error
*/
export type ListWorkspaceAccountRecharges400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type ListWorkspaceAccountRecharges401Type = ErrorType;
/**
 * @description Not found
*/
export type ListWorkspaceAccountRecharges404Type = ErrorType;
/**
 * @description Validation error
*/
export type ListWorkspaceAccountRecharges422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type ListWorkspaceAccountRecharges429Type = ErrorType;
/**
 * @description Internal server error
*/
export type ListWorkspaceAccountRecharges500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type ListWorkspaceAccountRecharges503Type = ErrorType;
/**
 * @description Successful Response
*/
export type ListWorkspaceAccountRechargesQueryResponseType = PaginatedListWorkspaceAccountRechargeType;
export type ListWorkspaceAccountRechargesTypeQuery = {
    Response: ListWorkspaceAccountRechargesQueryResponseType;
    PathParams: ListWorkspaceAccountRechargesPathParamsType;
    QueryParams: ListWorkspaceAccountRechargesQueryParamsType;
    Errors: ListWorkspaceAccountRecharges400Type | ListWorkspaceAccountRecharges401Type | ListWorkspaceAccountRecharges404Type | ListWorkspaceAccountRecharges422Type | ListWorkspaceAccountRecharges429Type | ListWorkspaceAccountRecharges500Type | ListWorkspaceAccountRecharges503Type;
};