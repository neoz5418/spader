export const currency = {
    "USD": "USD",
    "CNY": "CNY"
} as const;
export type CurrencyType = (typeof currency)[keyof typeof currency];