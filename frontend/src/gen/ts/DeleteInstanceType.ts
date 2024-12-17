import type { OperationType } from "./OperationType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type DeleteInstance400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type DeleteInstance401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type DeleteInstance404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type DeleteInstance409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type DeleteInstance412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type DeleteInstance422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type DeleteInstance500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type DeleteInstanceMutationResponseType = OperationType;
export type DeleteInstanceTypeMutation = {
    Response: DeleteInstanceMutationResponseType;
    PathParams: DeleteInstancePathParamsType;
    Errors: DeleteInstance400Type | DeleteInstance401Type | DeleteInstance404Type | DeleteInstance409Type | DeleteInstance412Type | DeleteInstance422Type | DeleteInstance500Type;
};
