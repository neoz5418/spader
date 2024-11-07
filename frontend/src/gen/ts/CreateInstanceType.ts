import type { OperationType } from "./OperationType";
import type { ErrorType } from "./ErrorType";
import type { CreateInstanceRequestType } from "./CreateInstanceRequestType";

 export type CreateInstancePathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    zone: string;
};
/**
 * @description Successful Response
*/
export type CreateInstance201Type = OperationType;
/**
 * @description Request error
*/
export type CreateInstance400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type CreateInstance401Type = ErrorType;
/**
 * @description Not found
*/
export type CreateInstance404Type = ErrorType;
/**
 * @description Validation error
*/
export type CreateInstance422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type CreateInstance429Type = ErrorType;
/**
 * @description Internal server error
*/
export type CreateInstance500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type CreateInstance503Type = ErrorType;
export type CreateInstanceMutationRequestType = CreateInstanceRequestType;
/**
 * @description Successful Response
*/
export type CreateInstanceMutationResponseType = OperationType;
export type CreateInstanceTypeMutation = {
    Response: CreateInstanceMutationResponseType;
    Request: CreateInstanceMutationRequestType;
    PathParams: CreateInstancePathParamsType;
    Errors: CreateInstance400Type | CreateInstance401Type | CreateInstance404Type | CreateInstance422Type | CreateInstance429Type | CreateInstance500Type | CreateInstance503Type;
};
