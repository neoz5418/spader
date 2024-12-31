import { z } from "@/utils/zod.ts";
import { instanceSchema } from "./instanceSchema.gen";
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


export const getInstancePathParamsSchema = z.object({ "workspace": z.string(), "name": z.string() });
export type GetInstancePathParamsSchema = z.infer<typeof getInstancePathParamsSchema>;
/**
 * @description Successful Response
 */
export const getInstance200Schema = z.lazy(() => instanceSchema);
export type GetInstance200Schema = z.infer<typeof getInstance200Schema>;
/**
 * @description Unprocessable Entity
 */
export const getInstance422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type GetInstance422Schema = z.infer<typeof getInstance422Schema>;
/**
 * @description Successful Response
 */
export const getInstanceQueryResponseSchema = z.lazy(() => instanceSchema);
export type GetInstanceQueryResponseSchema = z.infer<typeof getInstanceQueryResponseSchema>;
