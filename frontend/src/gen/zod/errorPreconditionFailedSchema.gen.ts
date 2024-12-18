import { z } from "@/utils/zod.ts";


export const errorPreconditionFailedSchema = z.object({ "type": z.enum(["PreconditionFailed"]) });
export type ErrorPreconditionFailedSchema = z.infer<typeof errorPreconditionFailedSchema>;
