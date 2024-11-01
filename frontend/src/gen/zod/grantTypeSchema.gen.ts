import { z } from "@/utils/zod.ts";


export const grantTypeSchema = z.enum(["password", "refresh_token"]);
export type GrantTypeSchema = z.infer<typeof grantTypeSchema>;