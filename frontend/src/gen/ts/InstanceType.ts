import type { InstanceStatusType } from "./InstanceStatusType";

export type InstanceType = {
	/**
	 * @type string | undefined, date-time
	 */
	create_time?: string;
	update_time?: string | null;
	delete_time?: string | null;
	/**
	 * @description \nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or \'-\'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n
	 * @type string
	 */
	name: string;
	display_name?: string | null;
	/**
	 * @type string | undefined, uuid
	 */
	uid?: string;
	/**
	 * @type string
	 */
	status: InstanceStatusType;
	/**
	 * @type string
	 */
	zone: string;
	/**
	 * @type string
	 */
	workspace: string;
	/**
	 * @type integer
	 */
	gpu_count: number;
	/**
	 * @type string
	 */
	gpu_type: string;
	/**
	 * @type string
	 */
	image: string;
	/**
	 * @default ""
	 * @type string | undefined
	 */
	target_id?: string;
	/**
	 * @default [object Object]
	 * @type object | undefined
	 */
	services?: object;
};
