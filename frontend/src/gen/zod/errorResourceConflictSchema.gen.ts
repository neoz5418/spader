import { z } from "@/utils/zod.ts";


export const errorResourceConflictSchema = z.object({ "type": z.enum(["ResourceConflict"]), "input": z.any(), "location": z.string(), "resource_name": z.string() });
export type ErrorResourceConflictSchema = z.infer<typeof errorResourceConflictSchema>;
