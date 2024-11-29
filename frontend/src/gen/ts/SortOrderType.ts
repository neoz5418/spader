export const sortOrder = {
    "asc": "asc",
    "desc": "desc"
} as const;
export type SortOrderType = (typeof sortOrder)[keyof typeof sortOrder];
