import { z } from "@/utils/zod.ts";

export const rechargeTypeSchema = z.enum(["alipay"]);
export type RechargeTypeSchema = z.infer<typeof rechargeTypeSchema>;
