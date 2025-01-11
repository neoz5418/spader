import { z } from "@/utils/zod.ts";
import { sshKeySchema } from "./sshKeySchema.gen";
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


export const getSshKeyPathParamsSchema = z.object({ "workspace": z.string(), "name": z.string() });
export type GetSshKeyPathParamsSchema = z.infer<typeof getSshKeyPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getSshKey200Schema = z.lazy(() => sshKeySchema);
export type GetSshKey200Schema = z.infer<typeof getSshKey200Schema>;
/**
 * @description Unprocessable Entity
 */
export const getSshKey422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type GetSshKey422Schema = z.infer<typeof getSshKey422Schema>;
/**
 * @description Successful Response
 */
export const getSshKeyQueryResponseSchema = z.lazy(() => sshKeySchema);
export type GetSshKeyQueryResponseSchema = z.infer<typeof getSshKeyQueryResponseSchema>;