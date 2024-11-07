import { z } from "@/utils/zod.ts";
import { errorSchema } from "./errorSchema.gen";


export const deleteWorkspacePathParamsSchema = z.object({ "workspace": z.string() });
export type DeleteWorkspacePathParamsSchema = z.infer<typeof deleteWorkspacePathParamsSchema>;
/**
 * @description Successful Response
 */
export const deleteWorkspace204Schema = z.any();
export type DeleteWorkspace204Schema = z.infer<typeof deleteWorkspace204Schema>;
/**
 * @description Request error
 */
export const deleteWorkspace400Schema = z.lazy(() => errorSchema);
export type DeleteWorkspace400Schema = z.infer<typeof deleteWorkspace400Schema>;
/**
 * @description Unauthorized
 */
export const deleteWorkspace401Schema = z.lazy(() => errorSchema);
export type DeleteWorkspace401Schema = z.infer<typeof deleteWorkspace401Schema>;
/**
 * @description Not found
 */
export const deleteWorkspace404Schema = z.lazy(() => errorSchema);
export type DeleteWorkspace404Schema = z.infer<typeof deleteWorkspace404Schema>;
/**
 * @description Validation error
 */
export const deleteWorkspace422Schema = z.lazy(() => errorSchema);
export type DeleteWorkspace422Schema = z.infer<typeof deleteWorkspace422Schema>;
/**
 * @description Rate limit exceeded
 */
export const deleteWorkspace429Schema = z.lazy(() => errorSchema);
export type DeleteWorkspace429Schema = z.infer<typeof deleteWorkspace429Schema>;
/**
 * @description Internal server error
 */
export const deleteWorkspace500Schema = z.lazy(() => errorSchema);
export type DeleteWorkspace500Schema = z.infer<typeof deleteWorkspace500Schema>;
/**
 * @description Service unavailable
 */
export const deleteWorkspace503Schema = z.lazy(() => errorSchema);
export type DeleteWorkspace503Schema = z.infer<typeof deleteWorkspace503Schema>;

 export const deleteWorkspaceMutationResponseSchema = z.any();
export type DeleteWorkspaceMutationResponseSchema = z.infer<typeof deleteWorkspaceMutationResponseSchema>;
