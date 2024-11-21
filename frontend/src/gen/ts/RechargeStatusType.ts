export const rechargeStatus = {
    "pending": "pending",
    "succeeded": "succeeded",
    "failed": "failed"
} as const;
export type RechargeStatusType = (typeof rechargeStatus)[keyof typeof rechargeStatus];
