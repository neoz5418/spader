import { errorInfoSchema } from "./errorInfoSchema.gen";
import { localizedMessageSchema } from "./localizedMessageSchema.gen";
import { baseModelSchema } from "./baseModelSchema.gen";
import { z } from "@/utils/zod.ts";


export const errorSchema = z.object({ "http_code": z.number().int(), "message": z.string(), "details": z.array(z.union([z.lazy(() => errorInfoSchema), z.lazy(() => localizedMessageSchema), z.lazy(() => baseModelSchema)])) });
export type ErrorSchema = z.infer<typeof errorSchema>;