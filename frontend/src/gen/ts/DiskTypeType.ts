export const diskType = {
    "SSD": "SSD",
    "HDD": "HDD"
} as const;
export type DiskTypeType = (typeof diskType)[keyof typeof diskType];
