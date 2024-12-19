import { z } from "@/utils/zod.ts";


export const errorForbiddenSchema = z.object({ "type": z.enum(["Forbidden"]) });
export type ErrorForbiddenSchema = z.infer<typeof errorForbiddenSchema>;