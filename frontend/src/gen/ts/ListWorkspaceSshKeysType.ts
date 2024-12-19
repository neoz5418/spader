import type { PaginatedListSshKeyType } from "./PaginatedListSshKeyType";
import type { ErrorEmailAndUsernameCannotBeProvidedAtTheSameTimeType } from "./ErrorEmailAndUsernameCannotBeProvidedAtTheSameTimeType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorInternalType } from "./ErrorInternalType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorPasswordMismatchType } from "./ErrorPasswordMismatchType";
import type { ErrorRefreshTokenCannotBeEmptyType } from "./ErrorRefreshTokenCannotBeEmptyType";
import type { ErrorRefreshTokenExpiredType } from "./ErrorRefreshTokenExpiredType";
import type { ErrorRefreshTokenInvalidType } from "./ErrorRefreshTokenInvalidType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorForbiddenType } from "./ErrorForbiddenType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorUsernameOrEmailCannotBeEmptyType } from "./ErrorUsernameOrEmailCannotBeEmptyType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";

 export type ListWorkspaceSshKeysPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type ListWorkspaceSshKeys200Type = PaginatedListSshKeyType;
/**
 * @description Unprocessable Entity
*/
export type ListWorkspaceSshKeys422Type = (ErrorEmailAndUsernameCannotBeProvidedAtTheSameTimeType | ErrorResourceNotFoundType | ErrorInternalType | ErrorInvalidArgumentType | ErrorPasswordMismatchType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorResourceConflictType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
/**
 * @description Successful Response
*/
export type ListWorkspaceSshKeysQueryResponseType = PaginatedListSshKeyType;
export type ListWorkspaceSshKeysTypeQuery = {
    Response: ListWorkspaceSshKeysQueryResponseType;
    PathParams: ListWorkspaceSshKeysPathParamsType;
    Errors: ListWorkspaceSshKeys422Type;
};