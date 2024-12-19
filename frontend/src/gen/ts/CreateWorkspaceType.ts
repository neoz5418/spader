import type { WorkspaceType } from "./WorkspaceType";
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
import type { WorkspaceCreateType } from "./WorkspaceCreateType";

 export type CreateWorkspacePathParamsType = {
    /**
     * @type string
    */
    username: string;
};
/**
 * @description Successful Response
*/
export type CreateWorkspace201Type = WorkspaceType;
/**
 * @description Unprocessable Entity
*/
export type CreateWorkspace422Type = (ErrorEmailAndUsernameCannotBeProvidedAtTheSameTimeType | ErrorResourceNotFoundType | ErrorInternalType | ErrorInvalidArgumentType | ErrorPasswordMismatchType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorResourceConflictType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
export type CreateWorkspaceMutationRequestType = WorkspaceCreateType;
/**
 * @description Successful Response
*/
export type CreateWorkspaceMutationResponseType = WorkspaceType;
export type CreateWorkspaceTypeMutation = {
    Response: CreateWorkspaceMutationResponseType;
    Request: CreateWorkspaceMutationRequestType;
    PathParams: CreateWorkspacePathParamsType;
    Errors: CreateWorkspace422Type;
};