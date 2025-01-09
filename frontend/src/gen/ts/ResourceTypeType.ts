export const resourceType = {
    "instance": "instance",
    "volume": "volume",
    "snapshot": "snapshot"
} as const;
export type ResourceTypeType = (typeof resourceType)[keyof typeof resourceType];
