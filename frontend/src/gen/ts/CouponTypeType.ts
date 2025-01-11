export const couponType = {
    "discount": "discount",
    "cash": "cash"
} as const;
export type CouponTypeType = (typeof couponType)[keyof typeof couponType];