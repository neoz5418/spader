import type { InstanceType } from "./InstanceType";
import type { ErrorType } from "./ErrorType";

 export type GetInstancePathParamsType = {
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
export type GetInstance200Type = InstanceType;
/**
 * @description Request error
*/
export type GetInstance400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type GetInstance401Type = ErrorType;
/**
 * @description Not found
*/
export type GetInstance404Type = ErrorType;
/**
 * @description Validation error
*/
export type GetInstance422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type GetInstance429Type = ErrorType;
/**
 * @description Internal server error
*/
export type GetInstance500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type GetInstance503Type = ErrorType;
/**
 * @description Successful Response
*/
export type GetInstanceQueryResponseType = InstanceType;
export type GetInstanceTypeQuery = {
    Response: GetInstanceQueryResponseType;
    PathParams: GetInstancePathParamsType;
    Errors: GetInstance400Type | GetInstance401Type | GetInstance404Type | GetInstance422Type | GetInstance429Type | GetInstance500Type | GetInstance503Type;
};