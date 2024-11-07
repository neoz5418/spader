import { z } from "@/utils/zod.ts";
import { operationSchema } from "./operationSchema.gen";
import { errorSchema } from "./errorSchema.gen";
import { createInstanceRequestSchema } from "./createInstanceRequestSchema.gen";


export const createInstancePathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string() });
export type CreateInstancePathParamsSchema = z.infer<typeof createInstancePathParamsSchema>;
/**
 * @description Successful Response
 */
export const createInstance201Schema = z.lazy(() => operationSchema);
export type CreateInstance201Schema = z.infer<typeof createInstance201Schema>;
/**
 * @description Request error
 */
export const createInstance400Schema = z.lazy(() => errorSchema);
export type CreateInstance400Schema = z.infer<typeof createInstance400Schema>;
/**
 * @description Unauthorized
 */
export const createInstance401Schema = z.lazy(() => errorSchema);
export type CreateInstance401Schema = z.infer<typeof createInstance401Schema>;
/**
 * @description Not found
 */
export const createInstance404Schema = z.lazy(() => errorSchema);
export type CreateInstance404Schema = z.infer<typeof createInstance404Schema>;
/**
 * @description Validation error
 */
export const createInstance422Schema = z.lazy(() => errorSchema);
export type CreateInstance422Schema = z.infer<typeof createInstance422Schema>;
/**
 * @description Rate limit exceeded
 */
export const createInstance429Schema = z.lazy(() => errorSchema);
export type CreateInstance429Schema = z.infer<typeof createInstance429Schema>;
/**
 * @description Internal server error
 */
export const createInstance500Schema = z.lazy(() => errorSchema);
export type CreateInstance500Schema = z.infer<typeof createInstance500Schema>;
/**
 * @description Service unavailable
 */
export const createInstance503Schema = z.lazy(() => errorSchema);
export type CreateInstance503Schema = z.infer<typeof createInstance503Schema>;

 export const createInstanceMutationRequestSchema = z.lazy(() => createInstanceRequestSchema);
export type CreateInstanceMutationRequestSchema = z.infer<typeof createInstanceMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const createInstanceMutationResponseSchema = z.lazy(() => operationSchema);
export type CreateInstanceMutationResponseSchema = z.infer<typeof createInstanceMutationResponseSchema>;
