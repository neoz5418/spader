import type { PaginationType } from "./PaginationType";
import type { UserType } from "./UserType";

export type PaginatedListUserType = {
	/**
	 * @type array
	 */
	items: UserType[];
	/**
	 * @type object
	 */
	pagination: PaginationType;
};
