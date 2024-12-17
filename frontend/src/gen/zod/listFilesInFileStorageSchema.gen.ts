import { z } from "@/utils/zod.ts";
import { paginatedListFileInfoSchema } from "./paginatedListFileInfoSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const listFilesInFileStoragePathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string() });
export type ListFilesInFileStoragePathParamsSchema = z.infer<typeof listFilesInFileStoragePathParamsSchema>;

 export const listFilesInFileStorageQueryParamsSchema = z.object({ "path": z.string().default("/").optional() }).optional();
export type ListFilesInFileStorageQueryParamsSchema = z.infer<typeof listFilesInFileStorageQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listFilesInFileStorage200Schema = z.lazy(() => paginatedListFileInfoSchema);
export type ListFilesInFileStorage200Schema = z.infer<typeof listFilesInFileStorage200Schema>;
/**
 * @description Request error
 */
export const listFilesInFileStorage400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type ListFilesInFileStorage400Schema = z.infer<typeof listFilesInFileStorage400Schema>;
/**
 * @description Unauthorized
 */
export const listFilesInFileStorage401Schema = z.lazy(() => errorUnauthorizedSchema);
export type ListFilesInFileStorage401Schema = z.infer<typeof listFilesInFileStorage401Schema>;
/**
 * @description Not found
 */
export const listFilesInFileStorage404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type ListFilesInFileStorage404Schema = z.infer<typeof listFilesInFileStorage404Schema>;
/**
 * @description Resource conflict
 */
export const listFilesInFileStorage409Schema = z.lazy(() => errorResourceConflictSchema);
export type ListFilesInFileStorage409Schema = z.infer<typeof listFilesInFileStorage409Schema>;
/**
 * @description Precondition failed
 */
export const listFilesInFileStorage412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type ListFilesInFileStorage412Schema = z.infer<typeof listFilesInFileStorage412Schema>;
/**
 * @description Validation error
 */
export const listFilesInFileStorage422Schema = z.lazy(() => errorValidationFailedSchema);
export type ListFilesInFileStorage422Schema = z.infer<typeof listFilesInFileStorage422Schema>;
/**
 * @description Internal server error
 */
export const listFilesInFileStorage500Schema = z.lazy(() => errorInternalSchema);
export type ListFilesInFileStorage500Schema = z.infer<typeof listFilesInFileStorage500Schema>;
/**
 * @description Successful Response
 */
export const listFilesInFileStorageQueryResponseSchema = z.lazy(() => paginatedListFileInfoSchema);
export type ListFilesInFileStorageQueryResponseSchema = z.infer<typeof listFilesInFileStorageQueryResponseSchema>;
