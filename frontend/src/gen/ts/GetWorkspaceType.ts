import type { WorkspaceType } from "./WorkspaceType";
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

 export type GetWorkspacePathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type GetWorkspace200Type = WorkspaceType;
/**
 * @description Unprocessable Entity
*/
export type GetWorkspace422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
/**
 * @description Successful Response
*/
export type GetWorkspaceQueryResponseType = WorkspaceType;
export type GetWorkspaceTypeQuery = {
    Response: GetWorkspaceQueryResponseType;
    PathParams: GetWorkspacePathParamsType;
    Errors: GetWorkspace422Type;
};
