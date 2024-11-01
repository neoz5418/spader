import { z } from "@/utils/zod.ts";


export const userQuotaSchema = z.object({ "username": z.string(), "limitation": z.object({}).catchall(z.number().int()).default({}).optional(), "status": z.object({}).catchall(z.number().int()).default({}).optional() });
export type UserQuotaSchema = z.infer<typeof userQuotaSchema>;