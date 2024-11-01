import { z } from "@/utils/zod.ts";
import { paginatedListSshKeySchema } from "./paginatedListSshKeySchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const getWorkspaceSshKeysPathParamsSchema = z.object({ "workspace": z.string() });
export type GetWorkspaceSshKeysPathParamsSchema = z.infer<typeof getWorkspaceSshKeysPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspaceSshKeys200Schema = z.lazy(() => paginatedListSshKeySchema);
export type GetWorkspaceSshKeys200Schema = z.infer<typeof getWorkspaceSshKeys200Schema>;
/**
 * @description Request error
 */
export const getWorkspaceSshKeys400Schema = z.lazy(() => errorSchema);
export type GetWorkspaceSshKeys400Schema = z.infer<typeof getWorkspaceSshKeys400Schema>;
/**
 * @description Unauthorized
 */
export const getWorkspaceSshKeys401Schema = z.lazy(() => errorSchema);
export type GetWorkspaceSshKeys401Schema = z.infer<typeof getWorkspaceSshKeys401Schema>;
/**
 * @description Not found
 */
export const getWorkspaceSshKeys404Schema = z.lazy(() => errorSchema);
export type GetWorkspaceSshKeys404Schema = z.infer<typeof getWorkspaceSshKeys404Schema>;
/**
 * @description Validation error
 */
export const getWorkspaceSshKeys422Schema = z.lazy(() => errorSchema);
export type GetWorkspaceSshKeys422Schema = z.infer<typeof getWorkspaceSshKeys422Schema>;
/**
 * @description Rate limit exceeded
 */
export const getWorkspaceSshKeys429Schema = z.lazy(() => errorSchema);
export type GetWorkspaceSshKeys429Schema = z.infer<typeof getWorkspaceSshKeys429Schema>;
/**
 * @description Internal server error
 */
export const getWorkspaceSshKeys500Schema = z.lazy(() => errorSchema);
export type GetWorkspaceSshKeys500Schema = z.infer<typeof getWorkspaceSshKeys500Schema>;
/**
 * @description Service unavailable
 */
export const getWorkspaceSshKeys503Schema = z.lazy(() => errorSchema);
export type GetWorkspaceSshKeys503Schema = z.infer<typeof getWorkspaceSshKeys503Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceSshKeysQueryResponseSchema = z.lazy(() => paginatedListSshKeySchema);
export type GetWorkspaceSshKeysQueryResponseSchema = z.infer<typeof getWorkspaceSshKeysQueryResponseSchema>;