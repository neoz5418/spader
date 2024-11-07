import { z } from "@/utils/zod.ts";


export const workspaceCreateSchema = z.object({ "name": z.string().regex(new RegExp("^[a-z0-9][a-z0-9-]*[a-z0-9]$")).min(3).max(32).describe("\nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or '-'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n"), "display_name": z.union([z.string(), z.null()]).optional() });
export type WorkspaceCreateSchema = z.infer<typeof workspaceCreateSchema>;
