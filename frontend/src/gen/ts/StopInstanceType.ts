import type { OperationType } from "./OperationType";
import type { ErrorType } from "./ErrorType";

 export type StopInstancePathParamsType = {
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
export type StopInstance200Type = OperationType;
/**
 * @description Request error
*/
export type StopInstance400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type StopInstance401Type = ErrorType;
/**
 * @description Not found
*/
export type StopInstance404Type = ErrorType;
/**
 * @description Validation error
*/
export type StopInstance422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type StopInstance429Type = ErrorType;
/**
 * @description Internal server error
*/
export type StopInstance500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type StopInstance503Type = ErrorType;
/**
 * @description Successful Response
*/
export type StopInstanceMutationResponseType = OperationType;
export type StopInstanceTypeMutation = {
    Response: StopInstanceMutationResponseType;
    PathParams: StopInstancePathParamsType;
    Errors: StopInstance400Type | StopInstance401Type | StopInstance404Type | StopInstance422Type | StopInstance429Type | StopInstance500Type | StopInstance503Type;
};