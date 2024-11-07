import type { ErrorType } from "./ErrorType";

 export type DeleteUserPathParamsType = {
    /**
     * @type string
    */
    username: string;
};
/**
 * @description Successful Response
*/
export type DeleteUser204Type = any;
/**
 * @description Request error
*/
export type DeleteUser400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type DeleteUser401Type = ErrorType;
/**
 * @description Not found
*/
export type DeleteUser404Type = ErrorType;
/**
 * @description Validation error
*/
export type DeleteUser422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type DeleteUser429Type = ErrorType;
/**
 * @description Internal server error
*/
export type DeleteUser500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type DeleteUser503Type = ErrorType;
export type DeleteUserMutationResponseType = any;
export type DeleteUserTypeMutation = {
    Response: DeleteUserMutationResponseType;
    PathParams: DeleteUserPathParamsType;
    Errors: DeleteUser400Type | DeleteUser401Type | DeleteUser404Type | DeleteUser422Type | DeleteUser429Type | DeleteUser500Type | DeleteUser503Type;
};
