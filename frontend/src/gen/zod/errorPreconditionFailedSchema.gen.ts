import { typeSchema } from "./typeSchema.gen";
import { z } from "@/utils/zod.ts";


export const errorPreconditionFailedSchema = z.object({ "status_code": z.number().int().default(412).optional(), "message": z.string().default("precondition_failed").optional(), "type": z.lazy(() => typeSchema) });
export type ErrorPreconditionFailedSchema = z.infer<typeof errorPreconditionFailedSchema>;
