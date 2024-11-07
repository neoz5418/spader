import type { OperationType } from "./OperationType";
import type { ErrorType } from "./ErrorType";

 export type StartInstancePathParamsType = {
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
export type StartInstance200Type = OperationType;
/**
 * @description Request error
*/
export type StartInstance400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type StartInstance401Type = ErrorType;
/**
 * @description Not found
*/
export type StartInstance404Type = ErrorType;
/**
 * @description Validation error
*/
export type StartInstance422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type StartInstance429Type = ErrorType;
/**
 * @description Internal server error
*/
export type StartInstance500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type StartInstance503Type = ErrorType;
/**
 * @description Successful Response
*/
export type StartInstanceMutationResponseType = OperationType;
export type StartInstanceTypeMutation = {
    Response: StartInstanceMutationResponseType;
    PathParams: StartInstancePathParamsType;
    Errors: StartInstance400Type | StartInstance401Type | StartInstance404Type | StartInstance422Type | StartInstance429Type | StartInstance500Type | StartInstance503Type;
};
