import { z } from "@/utils/zod.ts";


export const errorResourceNotFoundSchema = z.object({ "status_code": z.number().int().default(404).optional(), "message": z.string().default("resource_not_found").optional(), "resource_name": z.string() });
export type ErrorResourceNotFoundSchema = z.infer<typeof errorResourceNotFoundSchema>;
