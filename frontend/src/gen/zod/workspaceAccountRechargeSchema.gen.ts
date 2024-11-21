import { currencySchema } from "./currencySchema.gen";
import { rechargeTypeSchema } from "./rechargeTypeSchema.gen";
import { rechargeStatusSchema } from "./rechargeStatusSchema.gen";
import { z } from "@/utils/zod.ts";


export const workspaceAccountRechargeSchema = z.object({ "create_time": z.string().datetime().optional(), "update_time": z.union([z.string().datetime(), z.null()]).optional(), "delete_time": z.union([z.string().datetime(), z.null()]).optional(), "uid": z.string().uuid().optional(), "workspace": z.string(), "currency": z.lazy(() => currencySchema), "amount": z.number().int(), "type": z.lazy(() => rechargeTypeSchema), "pay_url": z.string(), "status": z.lazy(() => rechargeStatusSchema) });
export type WorkspaceAccountRechargeSchema = z.infer<typeof workspaceAccountRechargeSchema>;
