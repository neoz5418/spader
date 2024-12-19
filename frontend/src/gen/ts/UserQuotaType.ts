export type UserQuotaType = {
	/**
	 * @type string
	 */
	username: string;
	/**
	 * @default [object Object]
	 * @type object | undefined
	 */
	limitation?: {
		[key: string]: number;
	};
	/**
	 * @default [object Object]
	 * @type object | undefined
	 */
	status?: {
		[key: string]: number;
	};
};
