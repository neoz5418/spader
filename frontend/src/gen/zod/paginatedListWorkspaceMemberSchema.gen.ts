import { workspaceMemberSchema } from "./workspaceMemberSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedListWorkspaceMemberSchema = z.object({ "items": z.array(z.lazy(() => workspaceMemberSchema)), "pagination": z.lazy(() => paginationSchema) });
export type PaginatedListWorkspaceMemberSchema = z.infer<typeof paginatedListWorkspaceMemberSchema>;