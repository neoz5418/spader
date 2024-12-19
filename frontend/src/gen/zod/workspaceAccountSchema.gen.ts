import { currencySchema } from "./currencySchema.gen";
import { z } from "@/utils/zod.ts";


export const workspaceAccountSchema = z.object({ "workspace": z.string(), "balance": z.number().int(), "currency": z.lazy(() => currencySchema) });
export type WorkspaceAccountSchema = z.infer<typeof workspaceAccountSchema>;