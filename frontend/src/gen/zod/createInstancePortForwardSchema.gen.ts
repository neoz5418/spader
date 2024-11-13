import { z } from "@/utils/zod.ts";
import { portForwardSchema } from "./portForwardSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const createInstancePortForwardPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string() });
export type CreateInstancePortForwardPathParamsSchema = z.infer<typeof createInstancePortForwardPathParamsSchema>;
/**
 * @description Successful Response
 */
export const createInstancePortForward201Schema = z.lazy(() => portForwardSchema);
export type CreateInstancePortForward201Schema = z.infer<typeof createInstancePortForward201Schema>;
/**
 * @description Request error
 */
export const createInstancePortForward400Schema = z.lazy(() => errorSchema);
export type CreateInstancePortForward400Schema = z.infer<typeof createInstancePortForward400Schema>;
/**
 * @description Unauthorized
 */
export const createInstancePortForward401Schema = z.lazy(() => errorSchema);
export type CreateInstancePortForward401Schema = z.infer<typeof createInstancePortForward401Schema>;
/**
 * @description Not found
 */
export const createInstancePortForward404Schema = z.lazy(() => errorSchema);
export type CreateInstancePortForward404Schema = z.infer<typeof createInstancePortForward404Schema>;
/**
 * @description Validation error
 */
export const createInstancePortForward422Schema = z.lazy(() => errorSchema);
export type CreateInstancePortForward422Schema = z.infer<typeof createInstancePortForward422Schema>;
/**
 * @description Rate limit exceeded
 */
export const createInstancePortForward429Schema = z.lazy(() => errorSchema);
export type CreateInstancePortForward429Schema = z.infer<typeof createInstancePortForward429Schema>;
/**
 * @description Internal server error
 */
export const createInstancePortForward500Schema = z.lazy(() => errorSchema);
export type CreateInstancePortForward500Schema = z.infer<typeof createInstancePortForward500Schema>;
/**
 * @description Service unavailable
 */
export const createInstancePortForward503Schema = z.lazy(() => errorSchema);
export type CreateInstancePortForward503Schema = z.infer<typeof createInstancePortForward503Schema>;

 export const createInstancePortForwardMutationRequestSchema = z.lazy(() => portForwardSchema);
export type CreateInstancePortForwardMutationRequestSchema = z.infer<typeof createInstancePortForwardMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const createInstancePortForwardMutationResponseSchema = z.lazy(() => portForwardSchema);
export type CreateInstancePortForwardMutationResponseSchema = z.infer<typeof createInstancePortForwardMutationResponseSchema>;