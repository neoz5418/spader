import { operationSchema } from "./operationSchema.gen";
import { cursorSchema } from "./cursorSchema.gen";
import { z } from "@/utils/zod.ts";


export const cursorListOperationSchema = z.object({ "items": z.array(z.lazy(() => operationSchema)), "cursor": z.lazy(() => cursorSchema) });
export type CursorListOperationSchema = z.infer<typeof cursorListOperationSchema>;
