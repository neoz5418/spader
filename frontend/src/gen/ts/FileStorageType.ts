import type { FileStorageStatusType } from "./FileStorageStatusType";

export type FileStorageType = {
	/**
	 * @description \nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or \'-\'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n
	 * @type string
	 */
	name: string;
	display_name?: string | null;
	/**
	 * @type integer
	 */
	size: number;
	/**
	 * @type string
	 */
	status: FileStorageStatusType;
	/**
	 * @type string | undefined, uuid
	 */
	uid?: string;
	/**
	 * @type string
	 */
	zone: string;
	/**
	 * @type string
	 */
	workspace: string;
	/**
	 * @type string, date-time
	 */
	create_time: string;
	update_time?: string | null;
	delete_time?: string | null;
};
