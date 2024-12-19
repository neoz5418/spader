export type FileInfoType = {
	/**
	 * @description \nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or \'-\'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n
	 * @type string
	 */
	name: string;
	/**
	 * @type integer
	 */
	size: number;
	/**
	 * @type boolean
	 */
	is_dir: boolean;
	/**
	 * @type string, date-time
	 */
	modify_time: string;
};
