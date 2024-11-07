import { sshKeySchema } from "./sshKeySchema.gen";
import { paginationSchema } from "./paginationSchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedListSshKeySchema = z.object({ "items": z.array(z.lazy(() => sshKeySchema)), "pagination": z.lazy(() => paginationSchema) });
export type PaginatedListSshKeySchema = z.infer<typeof paginatedListSshKeySchema>;
