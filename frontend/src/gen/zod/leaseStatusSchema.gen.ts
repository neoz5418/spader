import { z } from "@/utils/zod.ts";


export const leaseStatusSchema = z.enum(["active", "in_debt", "expired", "deleted", "completed"]);
export type LeaseStatusSchema = z.infer<typeof leaseStatusSchema>;
