import { z } from "@/utils/zod.ts";


export const errorResourceNotFoundSchema = z.object({ "type": z.enum(["ResourceNotFound"]), "resource_name": z.string(), "input": z.any() });
export type ErrorResourceNotFoundSchema = z.infer<typeof errorResourceNotFoundSchema>;
