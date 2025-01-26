import { currencySchema } from "./currencySchema.gen";
import { z } from "@/utils/zod.ts";


export const workspaceAccountSchema = z.object({ "workspace": z.string().uuid(), "balance": z.number().int(), "rate_per_hour": z.number().int(), "currency": z.lazy(() => currencySchema) });
export type WorkspaceAccountSchema = z.infer<typeof workspaceAccountSchema>;