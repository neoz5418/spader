import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type CreateWorkspaceSshKeysPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type CreateWorkspaceSshKeys201Type = any;
/**
 * @description Request error
*/
export type CreateWorkspaceSshKeys400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type CreateWorkspaceSshKeys401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type CreateWorkspaceSshKeys404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type CreateWorkspaceSshKeys409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type CreateWorkspaceSshKeys412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type CreateWorkspaceSshKeys422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type CreateWorkspaceSshKeys500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type CreateWorkspaceSshKeysMutationResponseType = any;
export type CreateWorkspaceSshKeysTypeMutation = {
    Response: CreateWorkspaceSshKeysMutationResponseType;
    PathParams: CreateWorkspaceSshKeysPathParamsType;
    Errors: CreateWorkspaceSshKeys400Type | CreateWorkspaceSshKeys401Type | CreateWorkspaceSshKeys404Type | CreateWorkspaceSshKeys409Type | CreateWorkspaceSshKeys412Type | CreateWorkspaceSshKeys422Type | CreateWorkspaceSshKeys500Type;
};
