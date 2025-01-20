export const rechargeType = {
    "alipay": "alipay",
    "free": "free"
} as const;
export type RechargeTypeType = (typeof rechargeType)[keyof typeof rechargeType];
