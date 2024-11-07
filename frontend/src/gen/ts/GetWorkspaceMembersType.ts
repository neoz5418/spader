import type { PaginatedListWorkspaceMemberType } from "./PaginatedListWorkspaceMemberType";
import type { ErrorType } from "./ErrorType";

 export type GetWorkspaceMembersPathParamsType = {
    /**
     * @type string
    */
    workspace: string;
};
/**
 * @description Successful Response
*/
export type GetWorkspaceMembers200Type = PaginatedListWorkspaceMemberType;
/**
 * @description Request error
*/
export type GetWorkspaceMembers400Type = ErrorType;
/**
 * @description Unauthorized
*/
export type GetWorkspaceMembers401Type = ErrorType;
/**
 * @description Not found
*/
export type GetWorkspaceMembers404Type = ErrorType;
/**
 * @description Validation error
*/
export type GetWorkspaceMembers422Type = ErrorType;
/**
 * @description Rate limit exceeded
*/
export type GetWorkspaceMembers429Type = ErrorType;
/**
 * @description Internal server error
*/
export type GetWorkspaceMembers500Type = ErrorType;
/**
 * @description Service unavailable
*/
export type GetWorkspaceMembers503Type = ErrorType;
/**
 * @description Successful Response
*/
export type GetWorkspaceMembersQueryResponseType = PaginatedListWorkspaceMemberType;
export type GetWorkspaceMembersTypeQuery = {
    Response: GetWorkspaceMembersQueryResponseType;
    PathParams: GetWorkspaceMembersPathParamsType;
    Errors: GetWorkspaceMembers400Type | GetWorkspaceMembers401Type | GetWorkspaceMembers404Type | GetWorkspaceMembers422Type | GetWorkspaceMembers429Type | GetWorkspaceMembers500Type | GetWorkspaceMembers503Type;
};
