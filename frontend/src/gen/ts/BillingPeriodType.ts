export const billingPeriod = {
    "one_hour": "one_hour",
    "one_day": "one_day",
    "one_week": "one_week",
    "one_month": "one_month",
    "real_time": "real_time"
} as const;
export type BillingPeriodType = (typeof billingPeriod)[keyof typeof billingPeriod];