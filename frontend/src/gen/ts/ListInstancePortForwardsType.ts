import type { PortForwardType } from "./PortForwardType";
import type { ErrorType } from "./ErrorType";

 export type ListInstancePortForwardsPathParamsType = {
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
export type ListInstancePortForwards200Type = PortForwardType[];
/**
 * @description Request error
*/
export type ListInstancePortForwards400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type ListInstancePortForwards401Type = ErrorType;
/**
 * @description Not found
*/
export type ListInstancePortForwards404Type = ErrorType;
/**
 * @description Validation error
*/
export type ListInstancePortForwards422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type ListInstancePortForwards429Type = ErrorType;
/**
 * @description Internal server error
*/
export type ListInstancePortForwards500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type ListInstancePortForwards503Type = ErrorType;
/**
 * @description Successful Response
*/
export type ListInstancePortForwardsQueryResponseType = PortForwardType[];
export type ListInstancePortForwardsTypeQuery = {
    Response: ListInstancePortForwardsQueryResponseType;
    PathParams: ListInstancePortForwardsPathParamsType;
    Errors: ListInstancePortForwards400Type | ListInstancePortForwards401Type | ListInstancePortForwards404Type | ListInstancePortForwards422Type | ListInstancePortForwards429Type | ListInstancePortForwards500Type | ListInstancePortForwards503Type;
};
