import { architectureSchema } from "./architectureSchema.gen";
import { imageVisibilitySchema } from "./imageVisibilitySchema.gen";
import { z } from "@/utils/zod.ts";


export const imageSchema = z.object({ "name": z.string().regex(new RegExp("^[a-z0-9][a-z0-9-]*[a-z0-9]$")).min(3).max(32).describe("\nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or '-'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n"), "uid": z.string().uuid().optional(), "display_name": z.union([z.string(), z.null()]).optional(), "description": z.union([z.string(), z.null()]).optional(), "architecture": z.lazy(() => architectureSchema), "url": z.string(), "visibility": z.lazy(() => imageVisibilitySchema), "workspace": z.string().default("").optional() });
export type ImageSchema = z.infer<typeof imageSchema>;