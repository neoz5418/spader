import { z } from "@/utils/zod.ts";


export const errorInvalidArgumentSchema = z.object({ "type": z.enum(["InvalidArgument"]), "location": z.string(), "input": z.any() });
export type ErrorInvalidArgumentSchema = z.infer<typeof errorInvalidArgumentSchema>;
