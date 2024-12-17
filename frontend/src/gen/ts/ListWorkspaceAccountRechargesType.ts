import type { PaginatedListWorkspaceAccountRechargeType } from "./PaginatedListWorkspaceAccountRechargeType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type ListWorkspaceAccountRecharges400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type ListWorkspaceAccountRecharges401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type ListWorkspaceAccountRecharges404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type ListWorkspaceAccountRecharges409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type ListWorkspaceAccountRecharges412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type ListWorkspaceAccountRecharges422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type ListWorkspaceAccountRecharges500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type ListWorkspaceAccountRechargesQueryResponseType = PaginatedListWorkspaceAccountRechargeType;
export type ListWorkspaceAccountRechargesTypeQuery = {
    Response: ListWorkspaceAccountRechargesQueryResponseType;
    PathParams: ListWorkspaceAccountRechargesPathParamsType;
    QueryParams: ListWorkspaceAccountRechargesQueryParamsType;
    Errors: ListWorkspaceAccountRecharges400Type | ListWorkspaceAccountRecharges401Type | ListWorkspaceAccountRecharges404Type | ListWorkspaceAccountRecharges409Type | ListWorkspaceAccountRecharges412Type | ListWorkspaceAccountRecharges422Type | ListWorkspaceAccountRecharges500Type;
};
