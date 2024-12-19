import type { PaginationType } from "./PaginationType";
import type { ResourceUsageRecordType } from "./ResourceUsageRecordType";

export type PaginatedListResourceUsageRecordType = {
	/**
	 * @type array
	 */
	items: ResourceUsageRecordType[];
	/**
	 * @type object
	 */
	pagination: PaginationType;
};
