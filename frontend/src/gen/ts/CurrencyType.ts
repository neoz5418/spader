export const currency = {
    "CNY": "CNY",
    "USD": "USD"
} as const;
export type CurrencyType = (typeof currency)[keyof typeof currency];