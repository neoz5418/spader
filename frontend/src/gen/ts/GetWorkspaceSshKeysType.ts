import type { PaginatedListSshKeyType } from "./PaginatedListSshKeyType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type GetWorkspaceSshKeysPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type GetWorkspaceSshKeys200Type = PaginatedListSshKeyType;
/**
 * @description Request error
*/
export type GetWorkspaceSshKeys400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type GetWorkspaceSshKeys401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type GetWorkspaceSshKeys404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type GetWorkspaceSshKeys409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type GetWorkspaceSshKeys412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type GetWorkspaceSshKeys422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type GetWorkspaceSshKeys500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type GetWorkspaceSshKeysQueryResponseType = PaginatedListSshKeyType;
export type GetWorkspaceSshKeysTypeQuery = {
    Response: GetWorkspaceSshKeysQueryResponseType;
    PathParams: GetWorkspaceSshKeysPathParamsType;
    Errors: GetWorkspaceSshKeys400Type | GetWorkspaceSshKeys401Type | GetWorkspaceSshKeys404Type | GetWorkspaceSshKeys409Type | GetWorkspaceSshKeys412Type | GetWorkspaceSshKeys422Type | GetWorkspaceSshKeys500Type;
};
