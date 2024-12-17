import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type DeleteWorkspaceSshKeysPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    name: string;
};
/**
 * @description Successful Response
*/
export type DeleteWorkspaceSshKeys204Type = any;
/**
 * @description Request error
*/
export type DeleteWorkspaceSshKeys400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type DeleteWorkspaceSshKeys401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type DeleteWorkspaceSshKeys404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type DeleteWorkspaceSshKeys409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type DeleteWorkspaceSshKeys412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type DeleteWorkspaceSshKeys422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type DeleteWorkspaceSshKeys500Type = ErrorInternalType;
export type DeleteWorkspaceSshKeysMutationResponseType = any;
export type DeleteWorkspaceSshKeysTypeMutation = {
    Response: DeleteWorkspaceSshKeysMutationResponseType;
    PathParams: DeleteWorkspaceSshKeysPathParamsType;
    Errors: DeleteWorkspaceSshKeys400Type | DeleteWorkspaceSshKeys401Type | DeleteWorkspaceSshKeys404Type | DeleteWorkspaceSshKeys409Type | DeleteWorkspaceSshKeys412Type | DeleteWorkspaceSshKeys422Type | DeleteWorkspaceSshKeys500Type;
};
