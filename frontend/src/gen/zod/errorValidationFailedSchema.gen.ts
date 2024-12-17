import { argumentDetailSchema } from "./argumentDetailSchema.gen";
import { z } from "@/utils/zod.ts";


export const errorValidationFailedSchema = z.object({ "status_code": z.number().int().default(422).optional(), "message": z.string().default("request_validation_failed").optional(), "details": z.array(z.lazy(() => argumentDetailSchema)) });
export type ErrorValidationFailedSchema = z.infer<typeof errorValidationFailedSchema>;
