import { z } from "@/utils/zod.ts";
import { currencySchema } from "./currencySchema.gen";

export const workspaceAccountSchema = z.object({
	workspace: z.string(),
	balance: z.number().int(),
	currency: z.lazy(() => currencySchema),
});
export type WorkspaceAccountSchema = z.infer<typeof workspaceAccountSchema>;
