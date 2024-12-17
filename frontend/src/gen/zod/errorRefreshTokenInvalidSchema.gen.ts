import { z } from "@/utils/zod.ts";


export const errorRefreshTokenInvalidSchema = z.object({ "type": z.enum(["RefreshTokenInvalid"]) });
export type ErrorRefreshTokenInvalidSchema = z.infer<typeof errorRefreshTokenInvalidSchema>;
