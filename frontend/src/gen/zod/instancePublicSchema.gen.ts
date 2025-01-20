import { billingPeriodSchema } from "./billingPeriodSchema.gen";
import { autoRenewPeriodSchema } from "./autoRenewPeriodSchema.gen";
import { leaseStatusSchema } from "./leaseStatusSchema.gen";
import { instanceStatusSchema } from "./instanceStatusSchema.gen";
import { z } from "@/utils/zod.ts";


export const instancePublicSchema = z.object({ "lease_period": z.lazy(() => billingPeriodSchema).optional(), "auto_renew_period": z.lazy(() => autoRenewPeriodSchema).optional(), "coupon": z.union([z.string(), z.null()]).optional(), "lease_status": z.lazy(() => leaseStatusSchema), "create_time": z.string().datetime().optional(), "update_time": z.union([z.string().datetime(), z.null()]).optional(), "delete_time": z.union([z.string().datetime(), z.null()]).optional(), "name": z.string().regex(new RegExp("^[a-z0-9][a-z0-9-]*[a-z0-9]$")).min(3).max(32).describe("\nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or '-'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n"), "display_name": z.union([z.string(), z.null()]).optional(), "uid": z.string().uuid().optional(), "status": z.lazy(() => instanceStatusSchema), "zone": z.string(), "workspace": z.string(), "gpu_type": z.string(), "image": z.string(), "target_id": z.string().default("").optional(), "services": z.object({}).default({}).optional(), "gpu_display_name": z.string(), "zone_display_name": z.string() });
export type InstancePublicSchema = z.infer<typeof instancePublicSchema>;
