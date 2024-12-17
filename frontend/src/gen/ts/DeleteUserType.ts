import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type DeleteUserPathParamsType = {
    /**
     * @type string
    */
    username: string;
};
/**
 * @description Successful Response
*/
export type DeleteUser204Type = any;
/**
 * @description Request error
*/
export type DeleteUser400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type DeleteUser401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type DeleteUser404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type DeleteUser409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type DeleteUser412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type DeleteUser422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type DeleteUser500Type = ErrorInternalType;
export type DeleteUserMutationResponseType = any;
export type DeleteUserTypeMutation = {
    Response: DeleteUserMutationResponseType;
    PathParams: DeleteUserPathParamsType;
    Errors: DeleteUser400Type | DeleteUser401Type | DeleteUser404Type | DeleteUser409Type | DeleteUser412Type | DeleteUser422Type | DeleteUser500Type;
};
