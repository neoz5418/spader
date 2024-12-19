export const operationType = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4"
} as const;
export type OperationTypeType = (typeof operationType)[keyof typeof operationType];