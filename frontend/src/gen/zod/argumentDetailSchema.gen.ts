import { localizedMessageSchema } from "./localizedMessageSchema.gen";
import { z } from "@/utils/zod.ts";


export const argumentDetailSchema = z.object({ "type": z.string(), "metadata": z.object({}), "msg": z.string(), "loc": z.array(z.union([z.number().int(), z.string()])), "input": z.union([z.number().int(), z.string(), z.object({}).strict()]), "i18n": z.lazy(() => localizedMessageSchema).optional() });
export type ArgumentDetailSchema = z.infer<typeof argumentDetailSchema>;
