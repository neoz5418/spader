export const listInstancesSortOptions = {
    "create_time": "create_time",
    "name": "name"
} as const;
export type ListInstancesSortOptionsType = (typeof listInstancesSortOptions)[keyof typeof listInstancesSortOptions];