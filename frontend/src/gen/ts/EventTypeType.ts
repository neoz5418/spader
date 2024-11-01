export const eventType = {
    "ADDED": "ADDED",
    "MODIFIED": "MODIFIED",
    "DELETED": "DELETED",
    "ERROR": "ERROR"
} as const;
export type EventTypeType = (typeof eventType)[keyof typeof eventType];