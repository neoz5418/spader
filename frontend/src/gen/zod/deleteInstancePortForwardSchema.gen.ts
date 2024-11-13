import { z } from "@/utils/zod.ts";
import { errorSchema } from "./errorSchema.gen";


export const deleteInstancePortForwardPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string(), "port_forward_name": z.string() });
export type DeleteInstancePortForwardPathParamsSchema = z.infer<typeof deleteInstancePortForwardPathParamsSchema>;
/**
 * @description Successful Response
 */
export const deleteInstancePortForward204Schema = z.any();
export type DeleteInstancePortForward204Schema = z.infer<typeof deleteInstancePortForward204Schema>;
/**
 * @description Request error
 */
export const deleteInstancePortForward400Schema = z.lazy(() => errorSchema);
export type DeleteInstancePortForward400Schema = z.infer<typeof deleteInstancePortForward400Schema>;
/**
 * @description Unauthorized
 */
export const deleteInstancePortForward401Schema = z.lazy(() => errorSchema);
export type DeleteInstancePortForward401Schema = z.infer<typeof deleteInstancePortForward401Schema>;
/**
 * @description Not found
 */
export const deleteInstancePortForward404Schema = z.lazy(() => errorSchema);
export type DeleteInstancePortForward404Schema = z.infer<typeof deleteInstancePortForward404Schema>;
/**
 * @description Validation error
 */
export const deleteInstancePortForward422Schema = z.lazy(() => errorSchema);
export type DeleteInstancePortForward422Schema = z.infer<typeof deleteInstancePortForward422Schema>;
/**
 * @description Rate limit exceeded
 */
export const deleteInstancePortForward429Schema = z.lazy(() => errorSchema);
export type DeleteInstancePortForward429Schema = z.infer<typeof deleteInstancePortForward429Schema>;
/**
 * @description Internal server error
 */
export const deleteInstancePortForward500Schema = z.lazy(() => errorSchema);
export type DeleteInstancePortForward500Schema = z.infer<typeof deleteInstancePortForward500Schema>;
/**
 * @description Service unavailable
 */
export const deleteInstancePortForward503Schema = z.lazy(() => errorSchema);
export type DeleteInstancePortForward503Schema = z.infer<typeof deleteInstancePortForward503Schema>;

 export const deleteInstancePortForwardMutationResponseSchema = z.any();
export type DeleteInstancePortForwardMutationResponseSchema = z.infer<typeof deleteInstancePortForwardMutationResponseSchema>;