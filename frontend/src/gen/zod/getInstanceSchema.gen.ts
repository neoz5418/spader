import { z } from "@/utils/zod.ts";
import { errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema } from "./errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorPasswordMismatchSchema } from "./errorPasswordMismatchSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { instanceSchema } from "./instanceSchema.gen";

export const getInstancePathParamsSchema = z.object({
	workspace: z.string(),
	name: z.string(),
});
export type GetInstancePathParamsSchema = z.infer<
	typeof getInstancePathParamsSchema
>;
/**
 * @description Successful Response
 */
export const getInstance200Schema = z.lazy(() => instanceSchema);
export type GetInstance200Schema = z.infer<typeof getInstance200Schema>;
/**
 * @description Unprocessable Entity
 */
export const getInstance422Schema = z.union([
	z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema),
	z.lazy(() => errorResourceNotFoundSchema),
	z.lazy(() => errorInternalSchema),
	z.lazy(() => errorInvalidArgumentSchema),
	z.lazy(() => errorPasswordMismatchSchema),
	z.lazy(() => errorRefreshTokenCannotBeEmptySchema),
	z.lazy(() => errorRefreshTokenExpiredSchema),
	z.lazy(() => errorRefreshTokenInvalidSchema),
	z.lazy(() => errorResourceConflictSchema),
	z.lazy(() => errorForbiddenSchema),
	z.lazy(() => errorUnauthorizedSchema),
	z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema),
	z.lazy(() => errorValidationFailedSchema),
]);
export type GetInstance422Schema = z.infer<typeof getInstance422Schema>;
/**
 * @description Successful Response
 */
export const getInstanceQueryResponseSchema = z.lazy(() => instanceSchema);
export type GetInstanceQueryResponseSchema = z.infer<
	typeof getInstanceQueryResponseSchema
>;
