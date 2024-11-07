import type { PortForwardType } from "./PortForwardType";
import type { ErrorType } from "./ErrorType";

 export type CreateInstancePortForwardPathParamsType = {
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
};
/**
 * @description Successful Response
*/
export type CreateInstancePortForward201Type = PortForwardType;
/**
 * @description Request error
*/
export type CreateInstancePortForward400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type CreateInstancePortForward401Type = ErrorType;
/**
 * @description Not found
*/
export type CreateInstancePortForward404Type = ErrorType;
/**
 * @description Validation error
*/
export type CreateInstancePortForward422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type CreateInstancePortForward429Type = ErrorType;
/**
 * @description Internal server error
*/
export type CreateInstancePortForward500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type CreateInstancePortForward503Type = ErrorType;
export type CreateInstancePortForwardMutationRequestType = PortForwardType;
/**
 * @description Successful Response
*/
export type CreateInstancePortForwardMutationResponseType = PortForwardType;
export type CreateInstancePortForwardTypeMutation = {
    Response: CreateInstancePortForwardMutationResponseType;
    Request: CreateInstancePortForwardMutationRequestType;
    PathParams: CreateInstancePortForwardPathParamsType;
    Errors: CreateInstancePortForward400Type | CreateInstancePortForward401Type | CreateInstancePortForward404Type | CreateInstancePortForward422Type | CreateInstancePortForward429Type | CreateInstancePortForward500Type | CreateInstancePortForward503Type;
};
