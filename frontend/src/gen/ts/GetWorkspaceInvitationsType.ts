import type { PaginatedListWorkspaceInvitationType } from "./PaginatedListWorkspaceInvitationType";
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

 export type GetWorkspaceInvitationsPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type GetWorkspaceInvitations200Type = PaginatedListWorkspaceInvitationType;
/**
 * @description Unprocessable Entity
*/
export type GetWorkspaceInvitations422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
/**
 * @description Successful Response
*/
export type GetWorkspaceInvitationsQueryResponseType = PaginatedListWorkspaceInvitationType;
export type GetWorkspaceInvitationsTypeQuery = {
    Response: GetWorkspaceInvitationsQueryResponseType;
    PathParams: GetWorkspaceInvitationsPathParamsType;
    Errors: GetWorkspaceInvitations422Type;
};
