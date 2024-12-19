export const errorRefreshTokenInvalidType = {
	RefreshTokenInvalid: "RefreshTokenInvalid",
} as const;
export type ErrorRefreshTokenInvalidTypeType =
	(typeof errorRefreshTokenInvalidType)[keyof typeof errorRefreshTokenInvalidType];
export type ErrorRefreshTokenInvalidType = {
	/**
	 * @type string
	 */
	type: ErrorRefreshTokenInvalidTypeType;
};
