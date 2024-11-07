export const operationStatus = {
    "pending": "pending",
    "running": "running",
    "failed": "failed",
    "done": "done"
} as const;
export type OperationStatusType = (typeof operationStatus)[keyof typeof operationStatus];
