import type { PaginatedListWorkspaceMemberType } from "./PaginatedListWorkspaceMemberType";
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

 export type GetWorkspaceMembersPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type GetWorkspaceMembers200Type = PaginatedListWorkspaceMemberType;
/**
 * @description Unprocessable Entity
*/
export type GetWorkspaceMembers422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
/**
 * @description Successful Response
*/
export type GetWorkspaceMembersQueryResponseType = PaginatedListWorkspaceMemberType;
export type GetWorkspaceMembersTypeQuery = {
    Response: GetWorkspaceMembersQueryResponseType;
    PathParams: GetWorkspaceMembersPathParamsType;
    Errors: GetWorkspaceMembers422Type;
};
