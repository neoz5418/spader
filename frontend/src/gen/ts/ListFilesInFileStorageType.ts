import type { PaginatedListFileInfoType } from "./PaginatedListFileInfoType";
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

 export type ListFilesInFileStoragePathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    zone: string;
    /**
     * @type string
    */
    name: string;
};
export type ListFilesInFileStorageQueryParamsType = {
    /**
     * @default "/"
     * @type string | undefined
    */
    path?: string;
};
/**
 * @description Successful Response
*/
export type ListFilesInFileStorage200Type = PaginatedListFileInfoType;
/**
 * @description Unprocessable Entity
*/
export type ListFilesInFileStorage422Type = (ErrorInternalType | ErrorInvalidArgumentType | ErrorRefreshTokenCannotBeEmptyType | ErrorRefreshTokenExpiredType | ErrorRefreshTokenInvalidType | ErrorInsufficientBalanceType | ErrorForbiddenType | ErrorUnauthorizedType | ErrorUsernameOrEmailCannotBeEmptyType | ErrorValidationFailedType);
/**
 * @description Successful Response
*/
export type ListFilesInFileStorageQueryResponseType = PaginatedListFileInfoType;
export type ListFilesInFileStorageTypeQuery = {
    Response: ListFilesInFileStorageQueryResponseType;
    PathParams: ListFilesInFileStoragePathParamsType;
    QueryParams: ListFilesInFileStorageQueryParamsType;
    Errors: ListFilesInFileStorage422Type;
};