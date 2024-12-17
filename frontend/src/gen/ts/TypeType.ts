export const type = {
    "username_or_email_cannot_be_empty": "username_or_email_cannot_be_empty",
    "email_and_username_cannot_be_provided_at_the_same_time": "email_and_username_cannot_be_provided_at_the_same_time",
    "refresh_token_cannot_be_empty": "refresh_token_cannot_be_empty",
    "refresh_token_invalid": "refresh_token_invalid",
    "refresh_token_expired": "refresh_token_expired"
} as const;
export type TypeType = (typeof type)[keyof typeof type];
