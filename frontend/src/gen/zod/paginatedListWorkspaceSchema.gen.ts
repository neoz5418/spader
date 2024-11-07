import { workspaceSchema } from "./workspaceSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedListWorkspaceSchema = z.object({ "items": z.array(z.lazy(() => workspaceSchema)), "pagination": z.lazy(() => paginationSchema) });
export type PaginatedListWorkspaceSchema = z.infer<typeof paginatedListWorkspaceSchema>;
