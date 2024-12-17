import type { PortForwardType } from "./PortForwardType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type ListInstancePortForwards400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type ListInstancePortForwards401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type ListInstancePortForwards404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type ListInstancePortForwards409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type ListInstancePortForwards412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type ListInstancePortForwards422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type ListInstancePortForwards500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type ListInstancePortForwardsQueryResponseType = PortForwardType[];
export type ListInstancePortForwardsTypeQuery = {
    Response: ListInstancePortForwardsQueryResponseType;
    PathParams: ListInstancePortForwardsPathParamsType;
    Errors: ListInstancePortForwards400Type | ListInstancePortForwards401Type | ListInstancePortForwards404Type | ListInstancePortForwards409Type | ListInstancePortForwards412Type | ListInstancePortForwards422Type | ListInstancePortForwards500Type;
};
