export const provider = {
    "ecloud": "ecloud"
} as const;
export type ProviderType = (typeof provider)[keyof typeof provider];