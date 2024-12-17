import { z } from "@/utils/zod.ts";


export const errorResourceConflictSchema = z.object({ "status_code": z.number().int().default(409).optional(), "message": z.string().default("resource_conflict").optional(), "input": z.union([z.number().int(), z.string(), z.object({}).strict()]), "loc": z.array(z.union([z.number().int(), z.string()])), "resource_name": z.string() });
export type ErrorResourceConflictSchema = z.infer<typeof errorResourceConflictSchema>;
