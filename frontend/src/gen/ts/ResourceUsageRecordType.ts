import type { ResourceUsageTypeType } from "./ResourceUsageTypeType";

export type ResourceUsageRecordType = {
	/**
	 * @type string | undefined, uuid
	 */
	uid?: string;
	/**
	 * @type string, uuid
	 */
	billing_cycle_group: string;
	/**
	 * @type string
	 */
	workspace: string;
	/**
	 * @type string
	 */
	zone: string;
	/**
	 * @type string, date-time
	 */
	start_time: string;
	/**
	 * @type string, date-time
	 */
	end_time: string;
	/**
	 * @type string, uuid
	 */
	target_id: string;
	/**
	 * @type string
	 */
	target_resource_type: ResourceUsageTypeType;
};
