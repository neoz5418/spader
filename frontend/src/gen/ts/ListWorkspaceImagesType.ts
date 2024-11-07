import type { PaginatedListImageType } from "./PaginatedListImageType";
import type { ErrorType } from "./ErrorType";

 export type ListWorkspaceImagesPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    zone: string;
};
export type ListWorkspaceImagesQueryParamsType = {
    /**
     * @default 20
     * @type integer | undefined
    */
    limit?: number;
    /**
     * @default 1
     * @type integer | undefined
    */
    page?: number;
    /**
     * @default ""
     * @type string | undefined
    */
    before?: string;
    /**
     * @default ""
     * @type string | undefined
    */
    after?: string;
};
/**
 * @description Successful Response
*/
export type ListWorkspaceImages200Type = PaginatedListImageType;
/**
 * @description Request error
*/
export type ListWorkspaceImages400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type ListWorkspaceImages401Type = ErrorType;
/**
 * @description Not found
*/
export type ListWorkspaceImages404Type = ErrorType;
/**
 * @description Validation error
*/
export type ListWorkspaceImages422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type ListWorkspaceImages429Type = ErrorType;
/**
 * @description Internal server error
*/
export type ListWorkspaceImages500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type ListWorkspaceImages503Type = ErrorType;
/**
 * @description Successful Response
*/
export type ListWorkspaceImagesQueryResponseType = PaginatedListImageType;
export type ListWorkspaceImagesTypeQuery = {
    Response: ListWorkspaceImagesQueryResponseType;
    PathParams: ListWorkspaceImagesPathParamsType;
    QueryParams: ListWorkspaceImagesQueryParamsType;
    Errors: ListWorkspaceImages400Type | ListWorkspaceImages401Type | ListWorkspaceImages404Type | ListWorkspaceImages422Type | ListWorkspaceImages429Type | ListWorkspaceImages500Type | ListWorkspaceImages503Type;
};
