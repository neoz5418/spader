export const billingPeriod = {
    "one_hour": "one_hour",
    "one_day": "one_day",
    "one_week": "one_week",
    "two_week": "two_week",
    "one_month": "one_month",
    "three_month": "three_month"
} as const;
export type BillingPeriodType = (typeof billingPeriod)[keyof typeof billingPeriod];