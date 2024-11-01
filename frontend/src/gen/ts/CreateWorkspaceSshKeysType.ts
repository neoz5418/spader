import type { ErrorType } from "./ErrorType";

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
export type CreateWorkspaceSshKeys400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type CreateWorkspaceSshKeys401Type = ErrorType;
/**
 * @description Not found
*/
export type CreateWorkspaceSshKeys404Type = ErrorType;
/**
 * @description Validation error
*/
export type CreateWorkspaceSshKeys422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type CreateWorkspaceSshKeys429Type = ErrorType;
/**
 * @description Internal server error
*/
export type CreateWorkspaceSshKeys500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type CreateWorkspaceSshKeys503Type = ErrorType;
/**
 * @description Successful Response
*/
export type CreateWorkspaceSshKeysMutationResponseType = any;
export type CreateWorkspaceSshKeysTypeMutation = {
    Response: CreateWorkspaceSshKeysMutationResponseType;
    PathParams: CreateWorkspaceSshKeysPathParamsType;
    Errors: CreateWorkspaceSshKeys400Type | CreateWorkspaceSshKeys401Type | CreateWorkspaceSshKeys404Type | CreateWorkspaceSshKeys422Type | CreateWorkspaceSshKeys429Type | CreateWorkspaceSshKeys500Type | CreateWorkspaceSshKeys503Type;
};