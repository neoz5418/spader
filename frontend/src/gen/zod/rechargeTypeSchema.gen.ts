import { z } from "@/utils/zod.ts";


export const rechargeTypeSchema = z.enum(["alipay", "free"]);
export type RechargeTypeSchema = z.infer<typeof rechargeTypeSchema>;