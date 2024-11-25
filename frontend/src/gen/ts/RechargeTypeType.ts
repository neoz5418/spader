export const rechargeType = {
    "alipay": "alipay"
} as const;
export type RechargeTypeType = (typeof rechargeType)[keyof typeof rechargeType];