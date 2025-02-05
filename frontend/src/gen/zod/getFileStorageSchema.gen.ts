import { z } from "@/utils/zod.ts";
import { fileStorageSchema } from "./fileStorageSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorInsufficientBalanceSchema } from "./errorInsufficientBalanceSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const getFileStoragePathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string() });
export type GetFileStoragePathParamsSchema = z.infer<typeof getFileStoragePathParamsSchema>;
/**
 * @description Successful Response
 */
export const getFileStorage200Schema = z.lazy(() => fileStorageSchema);
export type GetFileStorage200Schema = z.infer<typeof getFileStorage200Schema>;
/**
 * @description Unprocessable Entity
 */
export const getFileStorage422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type GetFileStorage422Schema = z.infer<typeof getFileStorage422Schema>;
/**
 * @description Successful Response
 */
export const getFileStorageQueryResponseSchema = z.lazy(() => fileStorageSchema);
export type GetFileStorageQueryResponseSchema = z.infer<typeof getFileStorageQueryResponseSchema>;