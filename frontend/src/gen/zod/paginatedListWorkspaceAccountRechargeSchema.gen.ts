import { z } from "@/utils/zod.ts";
import { paginationSchema } from "./paginationSchema.gen";
import { workspaceAccountRechargeSchema } from "./workspaceAccountRechargeSchema.gen";

export const paginatedListWorkspaceAccountRechargeSchema = z.object({
	items: z.array(z.lazy(() => workspaceAccountRechargeSchema)),
	pagination: z.lazy(() => paginationSchema),
});
export type PaginatedListWorkspaceAccountRechargeSchema = z.infer<
	typeof paginatedListWorkspaceAccountRechargeSchema
>;
