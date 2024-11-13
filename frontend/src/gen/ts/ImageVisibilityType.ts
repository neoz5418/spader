export const imageVisibility = {
    "public": "public",
    "private": "private"
} as const;
export type ImageVisibilityType = (typeof imageVisibility)[keyof typeof imageVisibility];