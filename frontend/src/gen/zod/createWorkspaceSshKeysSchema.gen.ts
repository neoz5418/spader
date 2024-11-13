import { z } from "@/utils/zod.ts";
import { errorSchema } from "./errorSchema.gen";


export const createWorkspaceSshKeysPathParamsSchema = z.object({ "workspace": z.string() });
export type CreateWorkspaceSshKeysPathParamsSchema = z.infer<typeof createWorkspaceSshKeysPathParamsSchema>;
/**
 * @description Successful Response
 */
export const createWorkspaceSshKeys201Schema = z.any();
export type CreateWorkspaceSshKeys201Schema = z.infer<typeof createWorkspaceSshKeys201Schema>;
/**
 * @description Request error
 */
export const createWorkspaceSshKeys400Schema = z.lazy(() => errorSchema);
export type CreateWorkspaceSshKeys400Schema = z.infer<typeof createWorkspaceSshKeys400Schema>;
/**
 * @description Unauthorized
 */
export const createWorkspaceSshKeys401Schema = z.lazy(() => errorSchema);
export type CreateWorkspaceSshKeys401Schema = z.infer<typeof createWorkspaceSshKeys401Schema>;
/**
 * @description Not found
 */
export const createWorkspaceSshKeys404Schema = z.lazy(() => errorSchema);
export type CreateWorkspaceSshKeys404Schema = z.infer<typeof createWorkspaceSshKeys404Schema>;
/**
 * @description Validation error
 */
export const createWorkspaceSshKeys422Schema = z.lazy(() => errorSchema);
export type CreateWorkspaceSshKeys422Schema = z.infer<typeof createWorkspaceSshKeys422Schema>;
/**
 * @description Rate limit exceeded
 */
export const createWorkspaceSshKeys429Schema = z.lazy(() => errorSchema);
export type CreateWorkspaceSshKeys429Schema = z.infer<typeof createWorkspaceSshKeys429Schema>;
/**
 * @description Internal server error
 */
export const createWorkspaceSshKeys500Schema = z.lazy(() => errorSchema);
export type CreateWorkspaceSshKeys500Schema = z.infer<typeof createWorkspaceSshKeys500Schema>;
/**
 * @description Service unavailable
 */
export const createWorkspaceSshKeys503Schema = z.lazy(() => errorSchema);
export type CreateWorkspaceSshKeys503Schema = z.infer<typeof createWorkspaceSshKeys503Schema>;
/**
 * @description Successful Response
 */
export const createWorkspaceSshKeysMutationResponseSchema = z.any();
export type CreateWorkspaceSshKeysMutationResponseSchema = z.infer<typeof createWorkspaceSshKeysMutationResponseSchema>;