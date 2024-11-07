export const listUsersSortOptions = {
    "create_time": "create_time",
    "uid": "uid",
    "delete_time": "delete_time",
    "name": "name",
    "email": "email",
    "update_time": "update_time"
} as const;
export type ListUsersSortOptionsType = (typeof listUsersSortOptions)[keyof typeof listUsersSortOptions];
