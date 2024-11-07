import type { UserType } from "./UserType";
import type { ErrorType } from "./ErrorType";

 export type GetUserPathParamsType = {
    /**
     * @type string
    */
    username: string;
};
/**
 * @description Successful Response
*/
export type GetUser200Type = UserType;
/**
 * @description Request error
*/
export type GetUser400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type GetUser401Type = ErrorType;
/**
 * @description Not found
*/
export type GetUser404Type = ErrorType;
/**
 * @description Validation error
*/
export type GetUser422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type GetUser429Type = ErrorType;
/**
 * @description Internal server error
*/
export type GetUser500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type GetUser503Type = ErrorType;
/**
 * @description Successful Response
*/
export type GetUserQueryResponseType = UserType;
export type GetUserTypeQuery = {
    Response: GetUserQueryResponseType;
    PathParams: GetUserPathParamsType;
    Errors: GetUser400Type | GetUser401Type | GetUser404Type | GetUser422Type | GetUser429Type | GetUser500Type | GetUser503Type;
};
