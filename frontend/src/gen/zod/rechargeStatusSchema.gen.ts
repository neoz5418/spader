import { z } from "@/utils/zod.ts";

export const rechargeStatusSchema = z.enum(["pending", "succeeded", "failed"]);
export type RechargeStatusSchema = z.infer<typeof rechargeStatusSchema>;
