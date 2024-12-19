import type { PaginationType } from "./PaginationType";
import type { SshKeyType } from "./SshKeyType";

export type PaginatedListSshKeyType = {
	/**
	 * @type array
	 */
	items: SshKeyType[];
	/**
	 * @type object
	 */
	pagination: PaginationType;
};
