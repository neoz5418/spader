import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type DeleteInstancePortForward400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type DeleteInstancePortForward401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type DeleteInstancePortForward404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type DeleteInstancePortForward409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type DeleteInstancePortForward412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type DeleteInstancePortForward422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type DeleteInstancePortForward500Type = ErrorInternalType;
export type DeleteInstancePortForwardMutationResponseType = any;
export type DeleteInstancePortForwardTypeMutation = {
    Response: DeleteInstancePortForwardMutationResponseType;
    PathParams: DeleteInstancePortForwardPathParamsType;
    Errors: DeleteInstancePortForward400Type | DeleteInstancePortForward401Type | DeleteInstancePortForward404Type | DeleteInstancePortForward409Type | DeleteInstancePortForward412Type | DeleteInstancePortForward422Type | DeleteInstancePortForward500Type;
};
