import type { PaginationType } from "./PaginationType";
import type { WorkspaceMemberType } from "./WorkspaceMemberType";

export type PaginatedListWorkspaceMemberType = {
	/**
	 * @type array
	 */
	items: WorkspaceMemberType[];
	/**
	 * @type object
	 */
	pagination: PaginationType;
};
