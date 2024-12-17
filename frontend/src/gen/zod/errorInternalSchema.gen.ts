import { z } from "@/utils/zod.ts";


export const errorInternalSchema = z.object({ "status_code": z.number().int().default(500).optional(), "message": z.string().default("Internal Error").optional() });
export type ErrorInternalSchema = z.infer<typeof errorInternalSchema>;
