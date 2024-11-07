import { z } from "@/utils/zod.ts";
import { operationSchema } from "./operationSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const startInstancePathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string() });
export type StartInstancePathParamsSchema = z.infer<typeof startInstancePathParamsSchema>;
/**
 * @description Successful Response
 */
export const startInstance200Schema = z.lazy(() => operationSchema);
export type StartInstance200Schema = z.infer<typeof startInstance200Schema>;
/**
 * @description Request error
 */
export const startInstance400Schema = z.lazy(() => errorSchema);
export type StartInstance400Schema = z.infer<typeof startInstance400Schema>;
/**
 * @description Unauthorized
 */
export const startInstance401Schema = z.lazy(() => errorSchema);
export type StartInstance401Schema = z.infer<typeof startInstance401Schema>;
/**
 * @description Not found
 */
export const startInstance404Schema = z.lazy(() => errorSchema);
export type StartInstance404Schema = z.infer<typeof startInstance404Schema>;
/**
 * @description Validation error
 */
export const startInstance422Schema = z.lazy(() => errorSchema);
export type StartInstance422Schema = z.infer<typeof startInstance422Schema>;
/**
 * @description Rate limit exceeded
 */
export const startInstance429Schema = z.lazy(() => errorSchema);
export type StartInstance429Schema = z.infer<typeof startInstance429Schema>;
/**
 * @description Internal server error
 */
export const startInstance500Schema = z.lazy(() => errorSchema);
export type StartInstance500Schema = z.infer<typeof startInstance500Schema>;
/**
 * @description Service unavailable
 */
export const startInstance503Schema = z.lazy(() => errorSchema);
export type StartInstance503Schema = z.infer<typeof startInstance503Schema>;
/**
 * @description Successful Response
 */
export const startInstanceMutationResponseSchema = z.lazy(() => operationSchema);
export type StartInstanceMutationResponseSchema = z.infer<typeof startInstanceMutationResponseSchema>;
