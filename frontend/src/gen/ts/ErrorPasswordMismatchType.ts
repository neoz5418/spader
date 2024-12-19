export const errorPasswordMismatchType = {
	PasswordMismatch: "PasswordMismatch",
} as const;
export type ErrorPasswordMismatchTypeType =
	(typeof errorPasswordMismatchType)[keyof typeof errorPasswordMismatchType];
export type ErrorPasswordMismatchType = {
	/**
	 * @type string
	 */
	type: ErrorPasswordMismatchTypeType;
};
