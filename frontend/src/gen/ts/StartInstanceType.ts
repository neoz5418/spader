import type { OperationType } from "./OperationType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type StartInstance400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type StartInstance401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type StartInstance404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type StartInstance409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type StartInstance412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type StartInstance422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type StartInstance500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type StartInstanceMutationResponseType = OperationType;
export type StartInstanceTypeMutation = {
    Response: StartInstanceMutationResponseType;
    PathParams: StartInstancePathParamsType;
    Errors: StartInstance400Type | StartInstance401Type | StartInstance404Type | StartInstance409Type | StartInstance412Type | StartInstance422Type | StartInstance500Type;
};
