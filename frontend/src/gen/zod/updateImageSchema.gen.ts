import { z } from "@/utils/zod.ts";
import { imageSchema } from "./imageSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const updateImagePathParamsSchema = z.object({ "zone": z.string(), "name": z.string() });
export type UpdateImagePathParamsSchema = z.infer<typeof updateImagePathParamsSchema>;
/**
 * @description Successful Response
 */
export const updateImage200Schema = z.lazy(() => imageSchema);
export type UpdateImage200Schema = z.infer<typeof updateImage200Schema>;
/**
 * @description Unprocessable Entity
 */
export const updateImage422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type UpdateImage422Schema = z.infer<typeof updateImage422Schema>;
/**
 * @description Successful Response
 */
export const updateImageMutationResponseSchema = z.lazy(() => imageSchema);
export type UpdateImageMutationResponseSchema = z.infer<typeof updateImageMutationResponseSchema>;