import type { ErrorInternalType } from "./ErrorInternalType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorRefreshTokenCannotBeEmptyType } from "./ErrorRefreshTokenCannotBeEmptyType";
import type { ErrorRefreshTokenExpiredType } from "./ErrorRefreshTokenExpiredType";
import type { ErrorRefreshTokenInvalidType } from "./ErrorRefreshTokenInvalidType";
import type { ErrorInsufficientBalanceType } from "./ErrorInsufficientBalanceType";
import type { ErrorForbiddenType } from "./ErrorForbiddenType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorUsernameOrEmailCannotBeEmptyType } from "./ErrorUsernameOrEmailCannotBeEmptyType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";

 export type DeleteWorkspacePathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type DeleteWorkspace204Type = any;
/**
 * @description Unprocessable Entity
*/
export type DeleteWorkspace422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
export type DeleteWorkspaceMutationResponseType = any;
export type DeleteWorkspaceTypeMutation = {
    Response: DeleteWorkspaceMutationResponseType;
    PathParams: DeleteWorkspacePathParamsType;
    Errors: DeleteWorkspace422Type;
};
