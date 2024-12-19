import type { PortForwardProtocolType } from "./PortForwardProtocolType";

export type PortForwardType = {
	/**
	 * @type string | undefined, uuid
	 */
	uid?: string;
	/**
	 * @type string, uuid
	 */
	instance: string;
	/**
	 * @description \nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or \'-\'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n
	 * @type string
	 */
	name: string;
	/**
	 * @type integer
	 */
	port: number;
	/**
	 * @type integer
	 */
	target_port: number;
	/**
	 * @type string
	 */
	protocol: PortForwardProtocolType;
};
