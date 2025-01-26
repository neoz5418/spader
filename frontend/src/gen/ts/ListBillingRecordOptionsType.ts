export const listBillingRecordOptions = {
    "uid": "uid"
} as const;
export type ListBillingRecordOptionsType = (typeof listBillingRecordOptions)[keyof typeof listBillingRecordOptions];