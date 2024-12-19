import type { PaginationType } from "./PaginationType";
import type { WorkspaceType } from "./WorkspaceType";

export type PaginatedListWorkspaceType = {
	/**
	 * @type array
	 */
	items: WorkspaceType[];
	/**
	 * @type object
	 */
	pagination: PaginationType;
};
