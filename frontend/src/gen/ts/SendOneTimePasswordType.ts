import type { SendOneTimePasswordResponseType } from "./SendOneTimePasswordResponseType";
import type { ErrorType } from "./ErrorType";
import type { SendOneTimePasswordRequestType } from "./SendOneTimePasswordRequestType";

 /**
 * @description Successful Response
*/
export type SendOneTimePassword201Type = SendOneTimePasswordResponseType;
/**
 * @description Request error
*/
export type SendOneTimePassword400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type SendOneTimePassword401Type = ErrorType;
/**
 * @description Not found
*/
export type SendOneTimePassword404Type = ErrorType;
/**
 * @description Validation error
*/
export type SendOneTimePassword422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type SendOneTimePassword429Type = ErrorType;
/**
 * @description Internal server error
*/
export type SendOneTimePassword500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type SendOneTimePassword503Type = ErrorType;
export type SendOneTimePasswordMutationRequestType = SendOneTimePasswordRequestType;
/**
 * @description Successful Response
*/
export type SendOneTimePasswordMutationResponseType = SendOneTimePasswordResponseType;
export type SendOneTimePasswordTypeMutation = {
    Response: SendOneTimePasswordMutationResponseType;
    Request: SendOneTimePasswordMutationRequestType;
    Errors: SendOneTimePassword400Type | SendOneTimePassword401Type | SendOneTimePassword404Type | SendOneTimePassword422Type | SendOneTimePassword429Type | SendOneTimePassword500Type | SendOneTimePassword503Type;
};
