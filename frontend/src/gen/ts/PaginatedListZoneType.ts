import type { PaginationType } from "./PaginationType";
import type { ZoneType } from "./ZoneType";

export type PaginatedListZoneType = {
	/**
	 * @type array
	 */
	items: ZoneType[];
	/**
	 * @type object
	 */
	pagination: PaginationType;
};
