export const billingRecordType = {
    "deduction": "deduction",
    "top_up": "top_up"
} as const;
export type BillingRecordTypeType = (typeof billingRecordType)[keyof typeof billingRecordType];
