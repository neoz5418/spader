import type { PaginationType } from "./PaginationType";
import type { WorkspaceAccountRechargeType } from "./WorkspaceAccountRechargeType";

export type PaginatedListWorkspaceAccountRechargeType = {
	/**
	 * @type array
	 */
	items: WorkspaceAccountRechargeType[];
	/**
	 * @type object
	 */
	pagination: PaginationType;
};
