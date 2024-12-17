import type { PortForwardType } from "./PortForwardType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type CreateInstancePortForward400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type CreateInstancePortForward401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type CreateInstancePortForward404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type CreateInstancePortForward409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type CreateInstancePortForward412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type CreateInstancePortForward422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type CreateInstancePortForward500Type = ErrorInternalType;
export type CreateInstancePortForwardMutationRequestType = PortForwardType;
/**
 * @description Successful Response
*/
export type CreateInstancePortForwardMutationResponseType = PortForwardType;
export type CreateInstancePortForwardTypeMutation = {
    Response: CreateInstancePortForwardMutationResponseType;
    Request: CreateInstancePortForwardMutationRequestType;
    PathParams: CreateInstancePortForwardPathParamsType;
    Errors: CreateInstancePortForward400Type | CreateInstancePortForward401Type | CreateInstancePortForward404Type | CreateInstancePortForward409Type | CreateInstancePortForward412Type | CreateInstancePortForward422Type | CreateInstancePortForward500Type;
};
