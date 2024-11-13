import type { ErrorType } from "./ErrorType";

 export type DeleteInstancePortForwardPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    zone: string;
    /**
     * @type string
    */
    name: string;
    /**
     * @type string
    */
    port_forward_name: string;
};
/**
 * @description Successful Response
*/
export type DeleteInstancePortForward204Type = any;
/**
 * @description Request error
*/
export type DeleteInstancePortForward400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type DeleteInstancePortForward401Type = ErrorType;
/**
 * @description Not found
*/
export type DeleteInstancePortForward404Type = ErrorType;
/**
 * @description Validation error
*/
export type DeleteInstancePortForward422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type DeleteInstancePortForward429Type = ErrorType;
/**
 * @description Internal server error
*/
export type DeleteInstancePortForward500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type DeleteInstancePortForward503Type = ErrorType;
export type DeleteInstancePortForwardMutationResponseType = any;
export type DeleteInstancePortForwardTypeMutation = {
    Response: DeleteInstancePortForwardMutationResponseType;
    PathParams: DeleteInstancePortForwardPathParamsType;
    Errors: DeleteInstancePortForward400Type | DeleteInstancePortForward401Type | DeleteInstancePortForward404Type | DeleteInstancePortForward422Type | DeleteInstancePortForward429Type | DeleteInstancePortForward500Type | DeleteInstancePortForward503Type;
};