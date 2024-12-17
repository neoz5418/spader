import type { InstanceType } from "./InstanceType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

 export type GetInstancePathParamsType = {
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
/**
 * @description Successful Response
*/
export type GetInstance200Type = InstanceType;
/**
 * @description Request error
*/
export type GetInstance400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type GetInstance401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type GetInstance404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type GetInstance409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type GetInstance412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type GetInstance422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type GetInstance500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type GetInstanceQueryResponseType = InstanceType;
export type GetInstanceTypeQuery = {
    Response: GetInstanceQueryResponseType;
    PathParams: GetInstancePathParamsType;
    Errors: GetInstance400Type | GetInstance401Type | GetInstance404Type | GetInstance409Type | GetInstance412Type | GetInstance422Type | GetInstance500Type;
};
