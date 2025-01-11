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

 export type DeleteWorkspaceSshKeysPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    name: string;
};
/**
 * @description Successful Response
*/
export type DeleteWorkspaceSshKeys204Type = any;
/**
 * @description Unprocessable Entity
*/
export type DeleteWorkspaceSshKeys422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
export type DeleteWorkspaceSshKeysMutationResponseType = any;
export type DeleteWorkspaceSshKeysTypeMutation = {
    Response: DeleteWorkspaceSshKeysMutationResponseType;
    PathParams: DeleteWorkspaceSshKeysPathParamsType;
    Errors: DeleteWorkspaceSshKeys422Type;
};