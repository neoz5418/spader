import type { OperationType } from "./OperationType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type StopInstance400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type StopInstance401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type StopInstance404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type StopInstance409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type StopInstance412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type StopInstance422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type StopInstance500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type StopInstanceMutationResponseType = OperationType;
export type StopInstanceTypeMutation = {
    Response: StopInstanceMutationResponseType;
    PathParams: StopInstancePathParamsType;
    Errors: StopInstance400Type | StopInstance401Type | StopInstance404Type | StopInstance409Type | StopInstance412Type | StopInstance422Type | StopInstance500Type;
};
