export const errorRefreshTokenExpiredType = {
    "RefreshTokenExpired": "RefreshTokenExpired"
} as const;
export type ErrorRefreshTokenExpiredTypeType = (typeof errorRefreshTokenExpiredType)[keyof typeof errorRefreshTokenExpiredType];
export type ErrorRefreshTokenExpiredType = {
    /**
     * @type string
    */
    type: ErrorRefreshTokenExpiredTypeType;
};