import type { ErrorType } from "./ErrorType";

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
export type DeleteWorkspaceSshKeys400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type DeleteWorkspaceSshKeys401Type = ErrorType;
/**
 * @description Not found
*/
export type DeleteWorkspaceSshKeys404Type = ErrorType;
/**
 * @description Validation error
*/
export type DeleteWorkspaceSshKeys422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type DeleteWorkspaceSshKeys429Type = ErrorType;
/**
 * @description Internal server error
*/
export type DeleteWorkspaceSshKeys500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type DeleteWorkspaceSshKeys503Type = ErrorType;
export type DeleteWorkspaceSshKeysMutationResponseType = any;
export type DeleteWorkspaceSshKeysTypeMutation = {
    Response: DeleteWorkspaceSshKeysMutationResponseType;
    PathParams: DeleteWorkspaceSshKeysPathParamsType;
    Errors: DeleteWorkspaceSshKeys400Type | DeleteWorkspaceSshKeys401Type | DeleteWorkspaceSshKeys404Type | DeleteWorkspaceSshKeys422Type | DeleteWorkspaceSshKeys429Type | DeleteWorkspaceSshKeys500Type | DeleteWorkspaceSshKeys503Type;
};
