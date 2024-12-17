import type { CursorListOperationType } from "./CursorListOperationType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type GetWorkspaceOperationPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    zone: string;
    /**
     * @type string, uuid
    */
    uid: string;
};
/**
 * @description Successful Response
*/
export type GetWorkspaceOperation200Type = CursorListOperationType;
/**
 * @description Request error
*/
export type GetWorkspaceOperation400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type GetWorkspaceOperation401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type GetWorkspaceOperation404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type GetWorkspaceOperation409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type GetWorkspaceOperation412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type GetWorkspaceOperation422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type GetWorkspaceOperation500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type GetWorkspaceOperationQueryResponseType = CursorListOperationType;
export type GetWorkspaceOperationTypeQuery = {
    Response: GetWorkspaceOperationQueryResponseType;
    PathParams: GetWorkspaceOperationPathParamsType;
    Errors: GetWorkspaceOperation400Type | GetWorkspaceOperation401Type | GetWorkspaceOperation404Type | GetWorkspaceOperation409Type | GetWorkspaceOperation412Type | GetWorkspaceOperation422Type | GetWorkspaceOperation500Type;
};
