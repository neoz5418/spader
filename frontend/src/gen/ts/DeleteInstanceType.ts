import type { OperationType } from "./OperationType";
import type { ErrorType } from "./ErrorType";

 export type DeleteInstancePathParamsType = {
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
export type DeleteInstance200Type = OperationType;
/**
 * @description Request error
*/
export type DeleteInstance400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type DeleteInstance401Type = ErrorType;
/**
 * @description Not found
*/
export type DeleteInstance404Type = ErrorType;
/**
 * @description Validation error
*/
export type DeleteInstance422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type DeleteInstance429Type = ErrorType;
/**
 * @description Internal server error
*/
export type DeleteInstance500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type DeleteInstance503Type = ErrorType;
/**
 * @description Successful Response
*/
export type DeleteInstanceMutationResponseType = OperationType;
export type DeleteInstanceTypeMutation = {
    Response: DeleteInstanceMutationResponseType;
    PathParams: DeleteInstancePathParamsType;
    Errors: DeleteInstance400Type | DeleteInstance401Type | DeleteInstance404Type | DeleteInstance422Type | DeleteInstance429Type | DeleteInstance500Type | DeleteInstance503Type;
};
