import { billingRecordSchema } from "./billingRecordSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedListBillingRecordSchema = z.object({ "items": z.array(z.lazy(() => billingRecordSchema)), "pagination": z.lazy(() => paginationSchema) });
export type PaginatedListBillingRecordSchema = z.infer<typeof paginatedListBillingRecordSchema>;