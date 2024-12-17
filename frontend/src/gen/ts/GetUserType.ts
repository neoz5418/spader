import type { UserType } from "./UserType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type GetUserPathParamsType = {
    /**
     * @type string
    */
    username: string;
};
/**
 * @description Successful Response
*/
export type GetUser200Type = UserType;
/**
 * @description Request error
*/
export type GetUser400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type GetUser401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type GetUser404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type GetUser409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type GetUser412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type GetUser422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type GetUser500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type GetUserQueryResponseType = UserType;
export type GetUserTypeQuery = {
    Response: GetUserQueryResponseType;
    PathParams: GetUserPathParamsType;
    Errors: GetUser400Type | GetUser401Type | GetUser404Type | GetUser409Type | GetUser412Type | GetUser422Type | GetUser500Type;
};
