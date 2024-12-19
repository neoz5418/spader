import type { PaginationType } from "./PaginationType";
import type { WorkspaceInvitationType } from "./WorkspaceInvitationType";

export type PaginatedListWorkspaceInvitationType = {
	/**
	 * @type array
	 */
	items: WorkspaceInvitationType[];
	/**
	 * @type object
	 */
	pagination: PaginationType;
};
