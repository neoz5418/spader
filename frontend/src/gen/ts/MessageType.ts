export const message = {
    "unauthorized": "unauthorized",
    "password_mismatch": "password_mismatch"
} as const;
export type MessageType = (typeof message)[keyof typeof message];
