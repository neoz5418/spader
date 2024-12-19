import { z } from "@/utils/zod.ts";


export const errorRefreshTokenExpiredSchema = z.object({ "type": z.enum(["RefreshTokenExpired"]) });
export type ErrorRefreshTokenExpiredSchema = z.infer<typeof errorRefreshTokenExpiredSchema>;