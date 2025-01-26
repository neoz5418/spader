import { billingRecordPublicSchema } from "./billingRecordPublicSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedListBillingRecordPublicSchema = z.object({ "items": z.array(z.lazy(() => billingRecordPublicSchema)), "pagination": z.lazy(() => paginationSchema) });
export type PaginatedListBillingRecordPublicSchema = z.infer<typeof paginatedListBillingRecordPublicSchema>;