export const grantType = {
    "password": "password",
    "refresh_token": "refresh_token"
} as const;
export type GrantTypeType = (typeof grantType)[keyof typeof grantType];
