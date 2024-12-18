import { z } from "@/utils/zod.ts";


export const errorInternalSchema = z.object({ "type": z.enum(["Internal"]) });
export type ErrorInternalSchema = z.infer<typeof errorInternalSchema>;
