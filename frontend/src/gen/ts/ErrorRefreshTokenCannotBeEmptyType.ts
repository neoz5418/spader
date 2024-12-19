export const errorRefreshTokenCannotBeEmptyType = {
	RefreshTokenCannotBeEmpty: "RefreshTokenCannotBeEmpty",
} as const;
export type ErrorRefreshTokenCannotBeEmptyTypeType =
	(typeof errorRefreshTokenCannotBeEmptyType)[keyof typeof errorRefreshTokenCannotBeEmptyType];
export type ErrorRefreshTokenCannotBeEmptyType = {
	/**
	 * @type string
	 */
	type: ErrorRefreshTokenCannotBeEmptyTypeType;
};
