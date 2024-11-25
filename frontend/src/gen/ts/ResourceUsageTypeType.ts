export const resourceUsageType = {
    "instance": "instance",
    "volume": "volume",
    "snapshot": "snapshot"
} as const;
export type ResourceUsageTypeType = (typeof resourceUsageType)[keyof typeof resourceUsageType];