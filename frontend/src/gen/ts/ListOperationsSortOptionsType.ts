export const listOperationsSortOptions = {
    "create_time": "create_time",
    "start_time": "start_time",
    "end_time": "end_time"
} as const;
export type ListOperationsSortOptionsType = (typeof listOperationsSortOptions)[keyof typeof listOperationsSortOptions];