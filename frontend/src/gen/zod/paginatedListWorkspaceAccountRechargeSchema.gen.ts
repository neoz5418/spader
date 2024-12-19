import { workspaceAccountRechargeSchema } from "./workspaceAccountRechargeSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedListWorkspaceAccountRechargeSchema = z.object({ "items": z.array(z.lazy(() => workspaceAccountRechargeSchema)), "pagination": z.lazy(() => paginationSchema) });
export type PaginatedListWorkspaceAccountRechargeSchema = z.infer<typeof paginatedListWorkspaceAccountRechargeSchema>;