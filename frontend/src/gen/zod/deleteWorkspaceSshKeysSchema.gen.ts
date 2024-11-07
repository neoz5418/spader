import { z } from "@/utils/zod.ts";
import { errorSchema } from "./errorSchema.gen";


export const deleteWorkspaceSshKeysPathParamsSchema = z.object({ "workspace": z.string(), "name": z.string() });
export type DeleteWorkspaceSshKeysPathParamsSchema = z.infer<typeof deleteWorkspaceSshKeysPathParamsSchema>;
/**
 * @description Successful Response
 */
export const deleteWorkspaceSshKeys204Schema = z.any();
export type DeleteWorkspaceSshKeys204Schema = z.infer<typeof deleteWorkspaceSshKeys204Schema>;
/**
 * @description Request error
 */
export const deleteWorkspaceSshKeys400Schema = z.lazy(() => errorSchema);
export type DeleteWorkspaceSshKeys400Schema = z.infer<typeof deleteWorkspaceSshKeys400Schema>;
/**
 * @description Unauthorized
 */
export const deleteWorkspaceSshKeys401Schema = z.lazy(() => errorSchema);
export type DeleteWorkspaceSshKeys401Schema = z.infer<typeof deleteWorkspaceSshKeys401Schema>;
/**
 * @description Not found
 */
export const deleteWorkspaceSshKeys404Schema = z.lazy(() => errorSchema);
export type DeleteWorkspaceSshKeys404Schema = z.infer<typeof deleteWorkspaceSshKeys404Schema>;
/**
 * @description Validation error
 */
export const deleteWorkspaceSshKeys422Schema = z.lazy(() => errorSchema);
export type DeleteWorkspaceSshKeys422Schema = z.infer<typeof deleteWorkspaceSshKeys422Schema>;
/**
 * @description Rate limit exceeded
 */
export const deleteWorkspaceSshKeys429Schema = z.lazy(() => errorSchema);
export type DeleteWorkspaceSshKeys429Schema = z.infer<typeof deleteWorkspaceSshKeys429Schema>;
/**
 * @description Internal server error
 */
export const deleteWorkspaceSshKeys500Schema = z.lazy(() => errorSchema);
export type DeleteWorkspaceSshKeys500Schema = z.infer<typeof deleteWorkspaceSshKeys500Schema>;
/**
 * @description Service unavailable
 */
export const deleteWorkspaceSshKeys503Schema = z.lazy(() => errorSchema);
export type DeleteWorkspaceSshKeys503Schema = z.infer<typeof deleteWorkspaceSshKeys503Schema>;

 export const deleteWorkspaceSshKeysMutationResponseSchema = z.any();
export type DeleteWorkspaceSshKeysMutationResponseSchema = z.infer<typeof deleteWorkspaceSshKeysMutationResponseSchema>;
