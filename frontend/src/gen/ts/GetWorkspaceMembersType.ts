import type { PaginatedListWorkspaceMemberType } from "./PaginatedListWorkspaceMemberType";
import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";
import type { ErrorUnauthorizedType } from "./ErrorUnauthorizedType";
import type { ErrorResourceNotFoundType } from "./ErrorResourceNotFoundType";
import type { ErrorResourceConflictType } from "./ErrorResourceConflictType";
import type { ErrorPreconditionFailedType } from "./ErrorPreconditionFailedType";
import type { ErrorValidationFailedType } from "./ErrorValidationFailedType";
import type { ErrorInternalType } from "./ErrorInternalType";

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
export type GetWorkspaceMembers400Type = ErrorInvalidArgumentType;
/**
 * @description Unauthorized
*/
export type GetWorkspaceMembers401Type = ErrorUnauthorizedType;
/**
 * @description Not found
*/
export type GetWorkspaceMembers404Type = ErrorResourceNotFoundType;
/**
 * @description Resource conflict
*/
export type GetWorkspaceMembers409Type = ErrorResourceConflictType;
/**
 * @description Precondition failed
*/
export type GetWorkspaceMembers412Type = ErrorPreconditionFailedType;
/**
 * @description Validation error
*/
export type GetWorkspaceMembers422Type = ErrorValidationFailedType;
/**
 * @description Internal server error
*/
export type GetWorkspaceMembers500Type = ErrorInternalType;
/**
 * @description Successful Response
*/
export type GetWorkspaceMembersQueryResponseType = PaginatedListWorkspaceMemberType;
export type GetWorkspaceMembersTypeQuery = {
    Response: GetWorkspaceMembersQueryResponseType;
    PathParams: GetWorkspaceMembersPathParamsType;
    Errors: GetWorkspaceMembers400Type | GetWorkspaceMembers401Type | GetWorkspaceMembers404Type | GetWorkspaceMembers409Type | GetWorkspaceMembers412Type | GetWorkspaceMembers422Type | GetWorkspaceMembers500Type;
};
