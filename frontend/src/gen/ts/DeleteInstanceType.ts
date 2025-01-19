import type { OperationType } from "./OperationType";
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

 export type DeleteInstancePathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    name: string;
};
export type DeleteInstanceQueryParamsType = {
    force?: (boolean | null);
};
/**
 * @description Successful Response
*/
export type DeleteInstance200Type = OperationType;
/**
 * @description Unprocessable Entity
*/
export type DeleteInstance422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
/**
 * @description Successful Response
*/
export type DeleteInstanceMutationResponseType = OperationType;
export type DeleteInstanceTypeMutation = {
    Response: DeleteInstanceMutationResponseType;
    PathParams: DeleteInstancePathParamsType;
    QueryParams: DeleteInstanceQueryParamsType;
    Errors: DeleteInstance422Type;
};