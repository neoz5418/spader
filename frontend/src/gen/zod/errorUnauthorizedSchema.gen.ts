import { messageSchema } from "./messageSchema.gen";
import { z } from "@/utils/zod.ts";


export const errorUnauthorizedSchema = z.object({ "status_code": z.number().int().default(401).optional(), "message": z.lazy(() => messageSchema).optional() });
export type ErrorUnauthorizedSchema = z.infer<typeof errorUnauthorizedSchema>;
