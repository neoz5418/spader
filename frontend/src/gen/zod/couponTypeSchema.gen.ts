import { z } from "@/utils/zod.ts";


export const couponTypeSchema = z.enum(["discount", "cash"]);
export type CouponTypeSchema = z.infer<typeof couponTypeSchema>;
