import { z } from "@/utils/zod.ts";


export const workspaceQuotaSchema = z.object({ "workspace": z.string(), "limitation": z.object({}).catchall(z.number().int()), "status": z.object({}).catchall(z.number().int()) });
export type WorkspaceQuotaSchema = z.infer<typeof workspaceQuotaSchema>;