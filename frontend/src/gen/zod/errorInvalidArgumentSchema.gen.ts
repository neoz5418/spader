import { localizedMessageSchema } from "./localizedMessageSchema.gen";
import { z } from "@/utils/zod.ts";


export const errorInvalidArgumentSchema = z.object({ "type": z.string().default("invalid_argument").optional(), "metadata": z.object({}).default({}).optional(), "msg": z.string().default("Invalid argument").optional(), "loc": z.array(z.union([z.number().int(), z.string()])), "input": z.union([z.number().int(), z.string(), z.object({}).strict()]), "i18n": z.lazy(() => localizedMessageSchema).optional(), "status_code": z.number().int().default(400).optional(), "message": z.string().default("invalid_argument").optional() });
export type ErrorInvalidArgumentSchema = z.infer<typeof errorInvalidArgumentSchema>;
