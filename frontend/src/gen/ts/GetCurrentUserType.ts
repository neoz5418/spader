import type { UserType } from "./UserType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 /**
 * @description Successful Response
*/
export type GetCurrentUser200Type = UserType;
/**
 * @description Request error
*/
export type GetCurrentUser400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type GetCurrentUser401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type GetCurrentUser404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type GetCurrentUser409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type GetCurrentUser412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type GetCurrentUser422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type GetCurrentUser500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type GetCurrentUserQueryResponseType = UserType;
export type GetCurrentUserTypeQuery = {
    Response: GetCurrentUserQueryResponseType;
    Errors: GetCurrentUser400Type | GetCurrentUser401Type | GetCurrentUser404Type | GetCurrentUser409Type | GetCurrentUser412Type | GetCurrentUser422Type | GetCurrentUser500Type;
};
