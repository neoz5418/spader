import type { OperationType } from "./OperationType";
import type { PaginationType } from "./PaginationType";

export type PaginatedListOperationType = {
	/**
	 * @type array
	 */
	items: OperationType[];
	/**
	 * @type object
	 */
	pagination: PaginationType;
};
