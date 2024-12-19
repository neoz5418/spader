export const errorInternalType = {
	Internal: "Internal",
} as const;
export type ErrorInternalTypeType =
	(typeof errorInternalType)[keyof typeof errorInternalType];
export type ErrorInternalType = {
	/**
	 * @type string
	 */
	type: ErrorInternalTypeType;
};
