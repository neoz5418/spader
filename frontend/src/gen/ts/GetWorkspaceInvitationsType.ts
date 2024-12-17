import type { PaginatedListWorkspaceInvitationType } from "./PaginatedListWorkspaceInvitationType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type GetWorkspaceInvitations400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type GetWorkspaceInvitations401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type GetWorkspaceInvitations404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type GetWorkspaceInvitations409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type GetWorkspaceInvitations412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type GetWorkspaceInvitations422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type GetWorkspaceInvitations500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type GetWorkspaceInvitationsQueryResponseType = PaginatedListWorkspaceInvitationType;
export type GetWorkspaceInvitationsTypeQuery = {
    Response: GetWorkspaceInvitationsQueryResponseType;
    PathParams: GetWorkspaceInvitationsPathParamsType;
    Errors: GetWorkspaceInvitations400Type | GetWorkspaceInvitations401Type | GetWorkspaceInvitations404Type | GetWorkspaceInvitations409Type | GetWorkspaceInvitations412Type | GetWorkspaceInvitations422Type | GetWorkspaceInvitations500Type;
};
