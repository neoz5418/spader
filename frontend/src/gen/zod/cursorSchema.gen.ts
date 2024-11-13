import { z } from "@/utils/zod.ts";


export const cursorSchema = z.object({ "limit": z.number().int(), "before": z.union([z.string(), z.null()]).optional(), "after": z.union([z.string(), z.null()]).optional() });
export type CursorSchema = z.infer<typeof cursorSchema>;