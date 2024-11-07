import type { PaginatedListWorkspaceInvitationType } from "./PaginatedListWorkspaceInvitationType";
import type { ErrorType } from "./ErrorType";

 export type GetWorkspaceInvitationsPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type GetWorkspaceInvitations200Type = PaginatedListWorkspaceInvitationType;
/**
 * @description Request error
*/
export type GetWorkspaceInvitations400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type GetWorkspaceInvitations401Type = ErrorType;
/**
 * @description Not found
*/
export type GetWorkspaceInvitations404Type = ErrorType;
/**
 * @description Validation error
*/
export type GetWorkspaceInvitations422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type GetWorkspaceInvitations429Type = ErrorType;
/**
 * @description Internal server error
*/
export type GetWorkspaceInvitations500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type GetWorkspaceInvitations503Type = ErrorType;
/**
 * @description Successful Response
*/
export type GetWorkspaceInvitationsQueryResponseType = PaginatedListWorkspaceInvitationType;
export type GetWorkspaceInvitationsTypeQuery = {
    Response: GetWorkspaceInvitationsQueryResponseType;
    PathParams: GetWorkspaceInvitationsPathParamsType;
    Errors: GetWorkspaceInvitations400Type | GetWorkspaceInvitations401Type | GetWorkspaceInvitations404Type | GetWorkspaceInvitations422Type | GetWorkspaceInvitations429Type | GetWorkspaceInvitations500Type | GetWorkspaceInvitations503Type;
};
