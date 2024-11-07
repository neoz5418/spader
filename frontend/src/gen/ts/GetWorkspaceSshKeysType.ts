import type { PaginatedListSshKeyType } from "./PaginatedListSshKeyType";
import type { ErrorType } from "./ErrorType";

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
export type GetWorkspaceSshKeys400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type GetWorkspaceSshKeys401Type = ErrorType;
/**
 * @description Not found
*/
export type GetWorkspaceSshKeys404Type = ErrorType;
/**
 * @description Validation error
*/
export type GetWorkspaceSshKeys422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type GetWorkspaceSshKeys429Type = ErrorType;
/**
 * @description Internal server error
*/
export type GetWorkspaceSshKeys500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type GetWorkspaceSshKeys503Type = ErrorType;
/**
 * @description Successful Response
*/
export type GetWorkspaceSshKeysQueryResponseType = PaginatedListSshKeyType;
export type GetWorkspaceSshKeysTypeQuery = {
    Response: GetWorkspaceSshKeysQueryResponseType;
    PathParams: GetWorkspaceSshKeysPathParamsType;
    Errors: GetWorkspaceSshKeys400Type | GetWorkspaceSshKeys401Type | GetWorkspaceSshKeys404Type | GetWorkspaceSshKeys422Type | GetWorkspaceSshKeys429Type | GetWorkspaceSshKeys500Type | GetWorkspaceSshKeys503Type;
};
