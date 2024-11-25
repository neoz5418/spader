import { getCurrentUserQueryResponseSchema, getCurrentUser400Schema, getCurrentUser401Schema, getCurrentUser404Schema, getCurrentUser422Schema, getCurrentUser429Schema, getCurrentUser500Schema, getCurrentUser503Schema } from "./getCurrentUserSchema.gen";
import { listUsersQueryResponseSchema, listUsers400Schema, listUsers401Schema, listUsers404Schema, listUsers422Schema, listUsers429Schema, listUsers500Schema, listUsers503Schema, listUsersQueryParamsSchema } from "./listUsersSchema.gen";
import { registerUserMutationRequestSchema, registerUserMutationResponseSchema, registerUser400Schema, registerUser401Schema, registerUser404Schema, registerUser422Schema, registerUser429Schema, registerUser500Schema, registerUser503Schema } from "./registerUserSchema.gen";
import { getUserQueryResponseSchema, getUser400Schema, getUser401Schema, getUser404Schema, getUser422Schema, getUser429Schema, getUser500Schema, getUser503Schema, getUserPathParamsSchema } from "./getUserSchema.gen";
import { deleteUserMutationResponseSchema, deleteUser400Schema, deleteUser401Schema, deleteUser404Schema, deleteUser422Schema, deleteUser429Schema, deleteUser500Schema, deleteUser503Schema, deleteUserPathParamsSchema } from "./deleteUserSchema.gen";
import { sendOneTimePasswordMutationRequestSchema, sendOneTimePasswordMutationResponseSchema, sendOneTimePassword400Schema, sendOneTimePassword401Schema, sendOneTimePassword404Schema, sendOneTimePassword422Schema, sendOneTimePassword429Schema, sendOneTimePassword500Schema, sendOneTimePassword503Schema } from "./sendOneTimePasswordSchema.gen";
import { getUserQuotaQueryResponseSchema, getUserQuota400Schema, getUserQuota401Schema, getUserQuota404Schema, getUserQuota422Schema, getUserQuota429Schema, getUserQuota500Schema, getUserQuota503Schema, getUserQuotaPathParamsSchema } from "./getUserQuotaSchema.gen";
import { updateUserQuotaMutationResponseSchema, updateUserQuota400Schema, updateUserQuota401Schema, updateUserQuota404Schema, updateUserQuota422Schema, updateUserQuota429Schema, updateUserQuota500Schema, updateUserQuota503Schema, updateUserQuotaPathParamsSchema } from "./updateUserQuotaSchema.gen";
import { replaceUserQuotaMutationResponseSchema, replaceUserQuota400Schema, replaceUserQuota401Schema, replaceUserQuota404Schema, replaceUserQuota422Schema, replaceUserQuota429Schema, replaceUserQuota500Schema, replaceUserQuota503Schema, replaceUserQuotaPathParamsSchema } from "./replaceUserQuotaSchema.gen";
import { createWorkspaceMutationRequestSchema, createWorkspaceMutationResponseSchema, createWorkspace400Schema, createWorkspace401Schema, createWorkspace404Schema, createWorkspace422Schema, createWorkspace429Schema, createWorkspace500Schema, createWorkspace503Schema, createWorkspacePathParamsSchema } from "./createWorkspaceSchema.gen";
import { listUserWorkspacesQueryResponseSchema, listUserWorkspaces400Schema, listUserWorkspaces401Schema, listUserWorkspaces404Schema, listUserWorkspaces422Schema, listUserWorkspaces429Schema, listUserWorkspaces500Schema, listUserWorkspaces503Schema, listUserWorkspacesPathParamsSchema, listUserWorkspacesQueryParamsSchema } from "./listUserWorkspacesSchema.gen";
import { listWorkspacesQueryResponseSchema, listWorkspaces400Schema, listWorkspaces401Schema, listWorkspaces404Schema, listWorkspaces422Schema, listWorkspaces429Schema, listWorkspaces500Schema, listWorkspaces503Schema, listWorkspacesQueryParamsSchema } from "./listWorkspacesSchema.gen";
import { getWorkspaceQueryResponseSchema, getWorkspace400Schema, getWorkspace401Schema, getWorkspace404Schema, getWorkspace422Schema, getWorkspace429Schema, getWorkspace500Schema, getWorkspace503Schema, getWorkspacePathParamsSchema } from "./getWorkspaceSchema.gen";
import { deleteWorkspaceMutationResponseSchema, deleteWorkspace400Schema, deleteWorkspace401Schema, deleteWorkspace404Schema, deleteWorkspace422Schema, deleteWorkspace429Schema, deleteWorkspace500Schema, deleteWorkspace503Schema, deleteWorkspacePathParamsSchema } from "./deleteWorkspaceSchema.gen";
import { getWorkspaceQuotaQueryResponseSchema, getWorkspaceQuota400Schema, getWorkspaceQuota401Schema, getWorkspaceQuota404Schema, getWorkspaceQuota422Schema, getWorkspaceQuota429Schema, getWorkspaceQuota500Schema, getWorkspaceQuota503Schema, getWorkspaceQuotaPathParamsSchema } from "./getWorkspaceQuotaSchema.gen";
import { updateWorkspaceQuotaMutationRequestSchema, updateWorkspaceQuotaMutationResponseSchema, updateWorkspaceQuota400Schema, updateWorkspaceQuota401Schema, updateWorkspaceQuota404Schema, updateWorkspaceQuota422Schema, updateWorkspaceQuota429Schema, updateWorkspaceQuota500Schema, updateWorkspaceQuota503Schema, updateWorkspaceQuotaPathParamsSchema } from "./updateWorkspaceQuotaSchema.gen";
import { replaceWorkspaceQuotaMutationRequestSchema, replaceWorkspaceQuotaMutationResponseSchema, replaceWorkspaceQuota400Schema, replaceWorkspaceQuota401Schema, replaceWorkspaceQuota404Schema, replaceWorkspaceQuota422Schema, replaceWorkspaceQuota429Schema, replaceWorkspaceQuota500Schema, replaceWorkspaceQuota503Schema, replaceWorkspaceQuotaPathParamsSchema } from "./replaceWorkspaceQuotaSchema.gen";
import { getWorkspaceAccountQueryResponseSchema, getWorkspaceAccount400Schema, getWorkspaceAccount401Schema, getWorkspaceAccount404Schema, getWorkspaceAccount422Schema, getWorkspaceAccount429Schema, getWorkspaceAccount500Schema, getWorkspaceAccount503Schema, getWorkspaceAccountPathParamsSchema } from "./getWorkspaceAccountSchema.gen";
import { rechargeWorkspaceAccountMutationRequestSchema, rechargeWorkspaceAccountMutationResponseSchema, rechargeWorkspaceAccount400Schema, rechargeWorkspaceAccount401Schema, rechargeWorkspaceAccount404Schema, rechargeWorkspaceAccount422Schema, rechargeWorkspaceAccount429Schema, rechargeWorkspaceAccount500Schema, rechargeWorkspaceAccount503Schema, rechargeWorkspaceAccountPathParamsSchema } from "./rechargeWorkspaceAccountSchema.gen";
import { listWorkspaceAccountRechargesQueryResponseSchema, listWorkspaceAccountRecharges400Schema, listWorkspaceAccountRecharges401Schema, listWorkspaceAccountRecharges404Schema, listWorkspaceAccountRecharges422Schema, listWorkspaceAccountRecharges429Schema, listWorkspaceAccountRecharges500Schema, listWorkspaceAccountRecharges503Schema, listWorkspaceAccountRechargesPathParamsSchema, listWorkspaceAccountRechargesQueryParamsSchema } from "./listWorkspaceAccountRechargesSchema.gen";
import { getWorkspaceAccountRechargeQueryResponseSchema, getWorkspaceAccountRecharge400Schema, getWorkspaceAccountRecharge401Schema, getWorkspaceAccountRecharge404Schema, getWorkspaceAccountRecharge422Schema, getWorkspaceAccountRecharge429Schema, getWorkspaceAccountRecharge500Schema, getWorkspaceAccountRecharge503Schema, getWorkspaceAccountRechargePathParamsSchema } from "./getWorkspaceAccountRechargeSchema.gen";
import { checkWorkspaceAccountRechargeMutationResponseSchema, checkWorkspaceAccountRecharge400Schema, checkWorkspaceAccountRecharge401Schema, checkWorkspaceAccountRecharge404Schema, checkWorkspaceAccountRecharge422Schema, checkWorkspaceAccountRecharge429Schema, checkWorkspaceAccountRecharge500Schema, checkWorkspaceAccountRecharge503Schema, checkWorkspaceAccountRechargePathParamsSchema } from "./checkWorkspaceAccountRechargeSchema.gen";
import { listWorkspaceResourceUsageRecordsQueryResponseSchema, listWorkspaceResourceUsageRecords400Schema, listWorkspaceResourceUsageRecords401Schema, listWorkspaceResourceUsageRecords404Schema, listWorkspaceResourceUsageRecords422Schema, listWorkspaceResourceUsageRecords429Schema, listWorkspaceResourceUsageRecords500Schema, listWorkspaceResourceUsageRecords503Schema, listWorkspaceResourceUsageRecordsPathParamsSchema, listWorkspaceResourceUsageRecordsQueryParamsSchema } from "./listWorkspaceResourceUsageRecordsSchema.gen";
import { getWorkspaceSshKeysQueryResponseSchema, getWorkspaceSshKeys400Schema, getWorkspaceSshKeys401Schema, getWorkspaceSshKeys404Schema, getWorkspaceSshKeys422Schema, getWorkspaceSshKeys429Schema, getWorkspaceSshKeys500Schema, getWorkspaceSshKeys503Schema, getWorkspaceSshKeysPathParamsSchema } from "./getWorkspaceSshKeysSchema.gen";
import { createWorkspaceSshKeysMutationResponseSchema, createWorkspaceSshKeys400Schema, createWorkspaceSshKeys401Schema, createWorkspaceSshKeys404Schema, createWorkspaceSshKeys422Schema, createWorkspaceSshKeys429Schema, createWorkspaceSshKeys500Schema, createWorkspaceSshKeys503Schema, createWorkspaceSshKeysPathParamsSchema } from "./createWorkspaceSshKeysSchema.gen";
import { deleteWorkspaceSshKeysMutationResponseSchema, deleteWorkspaceSshKeys400Schema, deleteWorkspaceSshKeys401Schema, deleteWorkspaceSshKeys404Schema, deleteWorkspaceSshKeys422Schema, deleteWorkspaceSshKeys429Schema, deleteWorkspaceSshKeys500Schema, deleteWorkspaceSshKeys503Schema, deleteWorkspaceSshKeysPathParamsSchema } from "./deleteWorkspaceSshKeysSchema.gen";
import { getWorkspaceMembersQueryResponseSchema, getWorkspaceMembers400Schema, getWorkspaceMembers401Schema, getWorkspaceMembers404Schema, getWorkspaceMembers422Schema, getWorkspaceMembers429Schema, getWorkspaceMembers500Schema, getWorkspaceMembers503Schema, getWorkspaceMembersPathParamsSchema } from "./getWorkspaceMembersSchema.gen";
import { getWorkspaceInvitationsQueryResponseSchema, getWorkspaceInvitations400Schema, getWorkspaceInvitations401Schema, getWorkspaceInvitations404Schema, getWorkspaceInvitations422Schema, getWorkspaceInvitations429Schema, getWorkspaceInvitations500Schema, getWorkspaceInvitations503Schema, getWorkspaceInvitationsPathParamsSchema } from "./getWorkspaceInvitationsSchema.gen";
import { createZoneMutationRequestSchema, createZoneMutationResponseSchema, createZone400Schema, createZone401Schema, createZone404Schema, createZone422Schema, createZone429Schema, createZone500Schema, createZone503Schema } from "./createZoneSchema.gen";
import { listZonesQueryResponseSchema, listZones400Schema, listZones401Schema, listZones404Schema, listZones422Schema, listZones429Schema, listZones500Schema, listZones503Schema, listZonesQueryParamsSchema } from "./listZonesSchema.gen";
import { listGpuTypesQueryResponseSchema, listGpuTypes400Schema, listGpuTypes401Schema, listGpuTypes404Schema, listGpuTypes422Schema, listGpuTypes429Schema, listGpuTypes500Schema, listGpuTypes503Schema, listGpuTypesPathParamsSchema, listGpuTypesQueryParamsSchema } from "./listGpuTypesSchema.gen";
import { listWorkspaceZonesQueryResponseSchema, listWorkspaceZones400Schema, listWorkspaceZones401Schema, listWorkspaceZones404Schema, listWorkspaceZones422Schema, listWorkspaceZones429Schema, listWorkspaceZones500Schema, listWorkspaceZones503Schema, listWorkspaceZonesPathParamsSchema, listWorkspaceZonesQueryParamsSchema } from "./listWorkspaceZonesSchema.gen";
import { watchWorkspaceZonesQueryResponseSchema, watchWorkspaceZones400Schema, watchWorkspaceZones401Schema, watchWorkspaceZones404Schema, watchWorkspaceZones422Schema, watchWorkspaceZones429Schema, watchWorkspaceZones500Schema, watchWorkspaceZones503Schema, watchWorkspaceZonesPathParamsSchema } from "./watchWorkspaceZonesSchema.gen";
import { listWorkspaceZoneGpuTypesQueryResponseSchema, listWorkspaceZoneGpuTypes400Schema, listWorkspaceZoneGpuTypes401Schema, listWorkspaceZoneGpuTypes404Schema, listWorkspaceZoneGpuTypes422Schema, listWorkspaceZoneGpuTypes429Schema, listWorkspaceZoneGpuTypes500Schema, listWorkspaceZoneGpuTypes503Schema, listWorkspaceZoneGpuTypesPathParamsSchema, listWorkspaceZoneGpuTypesQueryParamsSchema } from "./listWorkspaceZoneGpuTypesSchema.gen";
import { getWorkspaceZoneQuotaQueryResponseSchema, getWorkspaceZoneQuota400Schema, getWorkspaceZoneQuota401Schema, getWorkspaceZoneQuota404Schema, getWorkspaceZoneQuota422Schema, getWorkspaceZoneQuota429Schema, getWorkspaceZoneQuota500Schema, getWorkspaceZoneQuota503Schema, getWorkspaceZoneQuotaPathParamsSchema } from "./getWorkspaceZoneQuotaSchema.gen";
import { listInstancesQueryResponseSchema, listInstances400Schema, listInstances401Schema, listInstances404Schema, listInstances422Schema, listInstances429Schema, listInstances500Schema, listInstances503Schema, listInstancesQueryParamsSchema } from "./listInstancesSchema.gen";
import { listWorkspaceInstancesQueryResponseSchema, listWorkspaceInstances400Schema, listWorkspaceInstances401Schema, listWorkspaceInstances404Schema, listWorkspaceInstances422Schema, listWorkspaceInstances429Schema, listWorkspaceInstances500Schema, listWorkspaceInstances503Schema, listWorkspaceInstancesPathParamsSchema, listWorkspaceInstancesQueryParamsSchema } from "./listWorkspaceInstancesSchema.gen";
import { getInstanceQueryResponseSchema, getInstance400Schema, getInstance401Schema, getInstance404Schema, getInstance422Schema, getInstance429Schema, getInstance500Schema, getInstance503Schema, getInstancePathParamsSchema } from "./getInstanceSchema.gen";
import { deleteInstanceMutationResponseSchema, deleteInstance400Schema, deleteInstance401Schema, deleteInstance404Schema, deleteInstance422Schema, deleteInstance429Schema, deleteInstance500Schema, deleteInstance503Schema, deleteInstancePathParamsSchema } from "./deleteInstanceSchema.gen";
import { createInstanceMutationRequestSchema, createInstanceMutationResponseSchema, createInstance400Schema, createInstance401Schema, createInstance404Schema, createInstance422Schema, createInstance429Schema, createInstance500Schema, createInstance503Schema, createInstancePathParamsSchema } from "./createInstanceSchema.gen";
import { startInstanceMutationResponseSchema, startInstance400Schema, startInstance401Schema, startInstance404Schema, startInstance422Schema, startInstance429Schema, startInstance500Schema, startInstance503Schema, startInstancePathParamsSchema } from "./startInstanceSchema.gen";
import { stopInstanceMutationResponseSchema, stopInstance400Schema, stopInstance401Schema, stopInstance404Schema, stopInstance422Schema, stopInstance429Schema, stopInstance500Schema, stopInstance503Schema, stopInstancePathParamsSchema } from "./stopInstanceSchema.gen";
import { createInstancePortForwardMutationRequestSchema, createInstancePortForwardMutationResponseSchema, createInstancePortForward400Schema, createInstancePortForward401Schema, createInstancePortForward404Schema, createInstancePortForward422Schema, createInstancePortForward429Schema, createInstancePortForward500Schema, createInstancePortForward503Schema, createInstancePortForwardPathParamsSchema } from "./createInstancePortForwardSchema.gen";
import { deleteInstancePortForwardMutationResponseSchema, deleteInstancePortForward400Schema, deleteInstancePortForward401Schema, deleteInstancePortForward404Schema, deleteInstancePortForward422Schema, deleteInstancePortForward429Schema, deleteInstancePortForward500Schema, deleteInstancePortForward503Schema, deleteInstancePortForwardPathParamsSchema } from "./deleteInstancePortForwardSchema.gen";
import { listInstancePortForwardsQueryResponseSchema, listInstancePortForwards400Schema, listInstancePortForwards401Schema, listInstancePortForwards404Schema, listInstancePortForwards422Schema, listInstancePortForwards429Schema, listInstancePortForwards500Schema, listInstancePortForwards503Schema, listInstancePortForwardsPathParamsSchema } from "./listInstancePortForwardsSchema.gen";
import { listWorkspaceOperationsQueryResponseSchema, listWorkspaceOperations400Schema, listWorkspaceOperations401Schema, listWorkspaceOperations404Schema, listWorkspaceOperations422Schema, listWorkspaceOperations429Schema, listWorkspaceOperations500Schema, listWorkspaceOperations503Schema, listWorkspaceOperationsPathParamsSchema, listWorkspaceOperationsQueryParamsSchema } from "./listWorkspaceOperationsSchema.gen";
import { getWorkspaceOperationQueryResponseSchema, getWorkspaceOperation400Schema, getWorkspaceOperation401Schema, getWorkspaceOperation404Schema, getWorkspaceOperation422Schema, getWorkspaceOperation429Schema, getWorkspaceOperation500Schema, getWorkspaceOperation503Schema, getWorkspaceOperationPathParamsSchema } from "./getWorkspaceOperationSchema.gen";
import { watchWorkspaceOperationsQueryResponseSchema, watchWorkspaceOperations400Schema, watchWorkspaceOperations401Schema, watchWorkspaceOperations404Schema, watchWorkspaceOperations422Schema, watchWorkspaceOperations429Schema, watchWorkspaceOperations500Schema, watchWorkspaceOperations503Schema, watchWorkspaceOperationsPathParamsSchema } from "./watchWorkspaceOperationsSchema.gen";
import { watchWorkspaceOperationQueryResponseSchema, watchWorkspaceOperation400Schema, watchWorkspaceOperation401Schema, watchWorkspaceOperation404Schema, watchWorkspaceOperation422Schema, watchWorkspaceOperation429Schema, watchWorkspaceOperation500Schema, watchWorkspaceOperation503Schema, watchWorkspaceOperationPathParamsSchema } from "./watchWorkspaceOperationSchema.gen";
import { createFileStorageMutationRequestSchema, createFileStorageMutationResponseSchema, createFileStorage400Schema, createFileStorage401Schema, createFileStorage404Schema, createFileStorage422Schema, createFileStorage429Schema, createFileStorage500Schema, createFileStorage503Schema, createFileStoragePathParamsSchema } from "./createFileStorageSchema.gen";
import { listWorkspaceFileStoragesQueryResponseSchema, listWorkspaceFileStorages400Schema, listWorkspaceFileStorages401Schema, listWorkspaceFileStorages404Schema, listWorkspaceFileStorages422Schema, listWorkspaceFileStorages429Schema, listWorkspaceFileStorages500Schema, listWorkspaceFileStorages503Schema, listWorkspaceFileStoragesPathParamsSchema, listWorkspaceFileStoragesQueryParamsSchema } from "./listWorkspaceFileStoragesSchema.gen";
import { getFileStorageQueryResponseSchema, getFileStorage400Schema, getFileStorage401Schema, getFileStorage404Schema, getFileStorage422Schema, getFileStorage429Schema, getFileStorage500Schema, getFileStorage503Schema, getFileStoragePathParamsSchema } from "./getFileStorageSchema.gen";
import { deleteFileStorageMutationResponseSchema, deleteFileStorage400Schema, deleteFileStorage401Schema, deleteFileStorage404Schema, deleteFileStorage422Schema, deleteFileStorage429Schema, deleteFileStorage500Schema, deleteFileStorage503Schema, deleteFileStoragePathParamsSchema } from "./deleteFileStorageSchema.gen";
import { listFilesInFileStorageQueryResponseSchema, listFilesInFileStorage400Schema, listFilesInFileStorage401Schema, listFilesInFileStorage404Schema, listFilesInFileStorage422Schema, listFilesInFileStorage429Schema, listFilesInFileStorage500Schema, listFilesInFileStorage503Schema, listFilesInFileStoragePathParamsSchema, listFilesInFileStorageQueryParamsSchema } from "./listFilesInFileStorageSchema.gen";
import { createImageMutationRequestSchema, createImageMutationResponseSchema, createImage400Schema, createImage401Schema, createImage404Schema, createImage422Schema, createImage429Schema, createImage500Schema, createImage503Schema, createImagePathParamsSchema } from "./createImageSchema.gen";
import { updateImageMutationResponseSchema, updateImage400Schema, updateImage401Schema, updateImage404Schema, updateImage422Schema, updateImage429Schema, updateImage500Schema, updateImage503Schema, updateImagePathParamsSchema } from "./updateImageSchema.gen";
import { listWorkspaceImagesQueryResponseSchema, listWorkspaceImages400Schema, listWorkspaceImages401Schema, listWorkspaceImages404Schema, listWorkspaceImages422Schema, listWorkspaceImages429Schema, listWorkspaceImages500Schema, listWorkspaceImages503Schema, listWorkspaceImagesPathParamsSchema, listWorkspaceImagesQueryParamsSchema } from "./listWorkspaceImagesSchema.gen";
import { authMutationRequestSchema, authMutationResponseSchema, auth400Schema, auth401Schema, auth404Schema, auth422Schema, auth429Schema, auth500Schema, auth503Schema } from "./authSchema.gen";
import { tokenMutationRequestSchema, tokenMutationResponseSchema, token400Schema, token401Schema, token404Schema, token422Schema, token429Schema, token500Schema, token503Schema } from "./tokenSchema.gen";

 export const operations = { "get_current_user": {
        request: undefined,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: getCurrentUserQueryResponseSchema,
            400: getCurrentUser400Schema,
            401: getCurrentUser401Schema,
            404: getCurrentUser404Schema,
            422: getCurrentUser422Schema,
            429: getCurrentUser429Schema,
            500: getCurrentUser500Schema,
            503: getCurrentUser503Schema,
            default: getCurrentUserQueryResponseSchema
        },
        errors: {
            400: getCurrentUser400Schema,
            401: getCurrentUser401Schema,
            404: getCurrentUser404Schema,
            422: getCurrentUser422Schema,
            429: getCurrentUser429Schema,
            500: getCurrentUser500Schema,
            503: getCurrentUser503Schema
        }
    }, "list_users": {
        request: undefined,
        parameters: {
            path: undefined,
            query: listUsersQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listUsersQueryResponseSchema,
            400: listUsers400Schema,
            401: listUsers401Schema,
            404: listUsers404Schema,
            422: listUsers422Schema,
            429: listUsers429Schema,
            500: listUsers500Schema,
            503: listUsers503Schema,
            default: listUsersQueryResponseSchema
        },
        errors: {
            400: listUsers400Schema,
            401: listUsers401Schema,
            404: listUsers404Schema,
            422: listUsers422Schema,
            429: listUsers429Schema,
            500: listUsers500Schema,
            503: listUsers503Schema
        }
    }, "register_user": {
        request: registerUserMutationRequestSchema,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: registerUserMutationResponseSchema,
            400: registerUser400Schema,
            401: registerUser401Schema,
            404: registerUser404Schema,
            422: registerUser422Schema,
            429: registerUser429Schema,
            500: registerUser500Schema,
            503: registerUser503Schema,
            default: registerUserMutationResponseSchema
        },
        errors: {
            400: registerUser400Schema,
            401: registerUser401Schema,
            404: registerUser404Schema,
            422: registerUser422Schema,
            429: registerUser429Schema,
            500: registerUser500Schema,
            503: registerUser503Schema
        }
    }, "get_user": {
        request: undefined,
        parameters: {
            path: getUserPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: getUserQueryResponseSchema,
            400: getUser400Schema,
            401: getUser401Schema,
            404: getUser404Schema,
            422: getUser422Schema,
            429: getUser429Schema,
            500: getUser500Schema,
            503: getUser503Schema,
            default: getUserQueryResponseSchema
        },
        errors: {
            400: getUser400Schema,
            401: getUser401Schema,
            404: getUser404Schema,
            422: getUser422Schema,
            429: getUser429Schema,
            500: getUser500Schema,
            503: getUser503Schema
        }
    }, "delete_user": {
        request: undefined,
        parameters: {
            path: deleteUserPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            204: deleteUserMutationResponseSchema,
            400: deleteUser400Schema,
            401: deleteUser401Schema,
            404: deleteUser404Schema,
            422: deleteUser422Schema,
            429: deleteUser429Schema,
            500: deleteUser500Schema,
            503: deleteUser503Schema,
            default: deleteUserMutationResponseSchema
        },
        errors: {
            400: deleteUser400Schema,
            401: deleteUser401Schema,
            404: deleteUser404Schema,
            422: deleteUser422Schema,
            429: deleteUser429Schema,
            500: deleteUser500Schema,
            503: deleteUser503Schema
        }
    }, "send_one_time_password": {
        request: sendOneTimePasswordMutationRequestSchema,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            201: sendOneTimePasswordMutationResponseSchema,
            400: sendOneTimePassword400Schema,
            401: sendOneTimePassword401Schema,
            404: sendOneTimePassword404Schema,
            422: sendOneTimePassword422Schema,
            429: sendOneTimePassword429Schema,
            500: sendOneTimePassword500Schema,
            503: sendOneTimePassword503Schema,
            default: sendOneTimePasswordMutationResponseSchema
        },
        errors: {
            400: sendOneTimePassword400Schema,
            401: sendOneTimePassword401Schema,
            404: sendOneTimePassword404Schema,
            422: sendOneTimePassword422Schema,
            429: sendOneTimePassword429Schema,
            500: sendOneTimePassword500Schema,
            503: sendOneTimePassword503Schema
        }
    }, "get_user_quota": {
        request: undefined,
        parameters: {
            path: getUserQuotaPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: getUserQuotaQueryResponseSchema,
            400: getUserQuota400Schema,
            401: getUserQuota401Schema,
            404: getUserQuota404Schema,
            422: getUserQuota422Schema,
            429: getUserQuota429Schema,
            500: getUserQuota500Schema,
            503: getUserQuota503Schema,
            default: getUserQuotaQueryResponseSchema
        },
        errors: {
            400: getUserQuota400Schema,
            401: getUserQuota401Schema,
            404: getUserQuota404Schema,
            422: getUserQuota422Schema,
            429: getUserQuota429Schema,
            500: getUserQuota500Schema,
            503: getUserQuota503Schema
        }
    }, "update_user_quota": {
        request: undefined,
        parameters: {
            path: updateUserQuotaPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: updateUserQuotaMutationResponseSchema,
            400: updateUserQuota400Schema,
            401: updateUserQuota401Schema,
            404: updateUserQuota404Schema,
            422: updateUserQuota422Schema,
            429: updateUserQuota429Schema,
            500: updateUserQuota500Schema,
            503: updateUserQuota503Schema,
            default: updateUserQuotaMutationResponseSchema
        },
        errors: {
            400: updateUserQuota400Schema,
            401: updateUserQuota401Schema,
            404: updateUserQuota404Schema,
            422: updateUserQuota422Schema,
            429: updateUserQuota429Schema,
            500: updateUserQuota500Schema,
            503: updateUserQuota503Schema
        }
    }, "replace_user_quota": {
        request: undefined,
        parameters: {
            path: replaceUserQuotaPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: replaceUserQuotaMutationResponseSchema,
            400: replaceUserQuota400Schema,
            401: replaceUserQuota401Schema,
            404: replaceUserQuota404Schema,
            422: replaceUserQuota422Schema,
            429: replaceUserQuota429Schema,
            500: replaceUserQuota500Schema,
            503: replaceUserQuota503Schema,
            default: replaceUserQuotaMutationResponseSchema
        },
        errors: {
            400: replaceUserQuota400Schema,
            401: replaceUserQuota401Schema,
            404: replaceUserQuota404Schema,
            422: replaceUserQuota422Schema,
            429: replaceUserQuota429Schema,
            500: replaceUserQuota500Schema,
            503: replaceUserQuota503Schema
        }
    }, "create_workspace": {
        request: createWorkspaceMutationRequestSchema,
        parameters: {
            path: createWorkspacePathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            201: createWorkspaceMutationResponseSchema,
            400: createWorkspace400Schema,
            401: createWorkspace401Schema,
            404: createWorkspace404Schema,
            422: createWorkspace422Schema,
            429: createWorkspace429Schema,
            500: createWorkspace500Schema,
            503: createWorkspace503Schema,
            default: createWorkspaceMutationResponseSchema
        },
        errors: {
            400: createWorkspace400Schema,
            401: createWorkspace401Schema,
            404: createWorkspace404Schema,
            422: createWorkspace422Schema,
            429: createWorkspace429Schema,
            500: createWorkspace500Schema,
            503: createWorkspace503Schema
        }
    }, "list_user_workspaces": {
        request: undefined,
        parameters: {
            path: listUserWorkspacesPathParamsSchema,
            query: listUserWorkspacesQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listUserWorkspacesQueryResponseSchema,
            400: listUserWorkspaces400Schema,
            401: listUserWorkspaces401Schema,
            404: listUserWorkspaces404Schema,
            422: listUserWorkspaces422Schema,
            429: listUserWorkspaces429Schema,
            500: listUserWorkspaces500Schema,
            503: listUserWorkspaces503Schema,
            default: listUserWorkspacesQueryResponseSchema
        },
        errors: {
            400: listUserWorkspaces400Schema,
            401: listUserWorkspaces401Schema,
            404: listUserWorkspaces404Schema,
            422: listUserWorkspaces422Schema,
            429: listUserWorkspaces429Schema,
            500: listUserWorkspaces500Schema,
            503: listUserWorkspaces503Schema
        }
    }, "list_workspaces": {
        request: undefined,
        parameters: {
            path: undefined,
            query: listWorkspacesQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listWorkspacesQueryResponseSchema,
            400: listWorkspaces400Schema,
            401: listWorkspaces401Schema,
            404: listWorkspaces404Schema,
            422: listWorkspaces422Schema,
            429: listWorkspaces429Schema,
            500: listWorkspaces500Schema,
            503: listWorkspaces503Schema,
            default: listWorkspacesQueryResponseSchema
        },
        errors: {
            400: listWorkspaces400Schema,
            401: listWorkspaces401Schema,
            404: listWorkspaces404Schema,
            422: listWorkspaces422Schema,
            429: listWorkspaces429Schema,
            500: listWorkspaces500Schema,
            503: listWorkspaces503Schema
        }
    }, "get_workspace": {
        request: undefined,
        parameters: {
            path: getWorkspacePathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: getWorkspaceQueryResponseSchema,
            400: getWorkspace400Schema,
            401: getWorkspace401Schema,
            404: getWorkspace404Schema,
            422: getWorkspace422Schema,
            429: getWorkspace429Schema,
            500: getWorkspace500Schema,
            503: getWorkspace503Schema,
            default: getWorkspaceQueryResponseSchema
        },
        errors: {
            400: getWorkspace400Schema,
            401: getWorkspace401Schema,
            404: getWorkspace404Schema,
            422: getWorkspace422Schema,
            429: getWorkspace429Schema,
            500: getWorkspace500Schema,
            503: getWorkspace503Schema
        }
    }, "delete_workspace": {
        request: undefined,
        parameters: {
            path: deleteWorkspacePathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            204: deleteWorkspaceMutationResponseSchema,
            400: deleteWorkspace400Schema,
            401: deleteWorkspace401Schema,
            404: deleteWorkspace404Schema,
            422: deleteWorkspace422Schema,
            429: deleteWorkspace429Schema,
            500: deleteWorkspace500Schema,
            503: deleteWorkspace503Schema,
            default: deleteWorkspaceMutationResponseSchema
        },
        errors: {
            400: deleteWorkspace400Schema,
            401: deleteWorkspace401Schema,
            404: deleteWorkspace404Schema,
            422: deleteWorkspace422Schema,
            429: deleteWorkspace429Schema,
            500: deleteWorkspace500Schema,
            503: deleteWorkspace503Schema
        }
    }, "get_workspace_quota": {
        request: undefined,
        parameters: {
            path: getWorkspaceQuotaPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: getWorkspaceQuotaQueryResponseSchema,
            400: getWorkspaceQuota400Schema,
            401: getWorkspaceQuota401Schema,
            404: getWorkspaceQuota404Schema,
            422: getWorkspaceQuota422Schema,
            429: getWorkspaceQuota429Schema,
            500: getWorkspaceQuota500Schema,
            503: getWorkspaceQuota503Schema,
            default: getWorkspaceQuotaQueryResponseSchema
        },
        errors: {
            400: getWorkspaceQuota400Schema,
            401: getWorkspaceQuota401Schema,
            404: getWorkspaceQuota404Schema,
            422: getWorkspaceQuota422Schema,
            429: getWorkspaceQuota429Schema,
            500: getWorkspaceQuota500Schema,
            503: getWorkspaceQuota503Schema
        }
    }, "update_workspace_quota": {
        request: updateWorkspaceQuotaMutationRequestSchema,
        parameters: {
            path: updateWorkspaceQuotaPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: updateWorkspaceQuotaMutationResponseSchema,
            400: updateWorkspaceQuota400Schema,
            401: updateWorkspaceQuota401Schema,
            404: updateWorkspaceQuota404Schema,
            422: updateWorkspaceQuota422Schema,
            429: updateWorkspaceQuota429Schema,
            500: updateWorkspaceQuota500Schema,
            503: updateWorkspaceQuota503Schema,
            default: updateWorkspaceQuotaMutationResponseSchema
        },
        errors: {
            400: updateWorkspaceQuota400Schema,
            401: updateWorkspaceQuota401Schema,
            404: updateWorkspaceQuota404Schema,
            422: updateWorkspaceQuota422Schema,
            429: updateWorkspaceQuota429Schema,
            500: updateWorkspaceQuota500Schema,
            503: updateWorkspaceQuota503Schema
        }
    }, "replace_workspace_quota": {
        request: replaceWorkspaceQuotaMutationRequestSchema,
        parameters: {
            path: replaceWorkspaceQuotaPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: replaceWorkspaceQuotaMutationResponseSchema,
            400: replaceWorkspaceQuota400Schema,
            401: replaceWorkspaceQuota401Schema,
            404: replaceWorkspaceQuota404Schema,
            422: replaceWorkspaceQuota422Schema,
            429: replaceWorkspaceQuota429Schema,
            500: replaceWorkspaceQuota500Schema,
            503: replaceWorkspaceQuota503Schema,
            default: replaceWorkspaceQuotaMutationResponseSchema
        },
        errors: {
            400: replaceWorkspaceQuota400Schema,
            401: replaceWorkspaceQuota401Schema,
            404: replaceWorkspaceQuota404Schema,
            422: replaceWorkspaceQuota422Schema,
            429: replaceWorkspaceQuota429Schema,
            500: replaceWorkspaceQuota500Schema,
            503: replaceWorkspaceQuota503Schema
        }
    }, "get_workspace_account": {
        request: undefined,
        parameters: {
            path: getWorkspaceAccountPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: getWorkspaceAccountQueryResponseSchema,
            400: getWorkspaceAccount400Schema,
            401: getWorkspaceAccount401Schema,
            404: getWorkspaceAccount404Schema,
            422: getWorkspaceAccount422Schema,
            429: getWorkspaceAccount429Schema,
            500: getWorkspaceAccount500Schema,
            503: getWorkspaceAccount503Schema,
            default: getWorkspaceAccountQueryResponseSchema
        },
        errors: {
            400: getWorkspaceAccount400Schema,
            401: getWorkspaceAccount401Schema,
            404: getWorkspaceAccount404Schema,
            422: getWorkspaceAccount422Schema,
            429: getWorkspaceAccount429Schema,
            500: getWorkspaceAccount500Schema,
            503: getWorkspaceAccount503Schema
        }
    }, "recharge_workspace_account": {
        request: rechargeWorkspaceAccountMutationRequestSchema,
        parameters: {
            path: rechargeWorkspaceAccountPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: rechargeWorkspaceAccountMutationResponseSchema,
            400: rechargeWorkspaceAccount400Schema,
            401: rechargeWorkspaceAccount401Schema,
            404: rechargeWorkspaceAccount404Schema,
            422: rechargeWorkspaceAccount422Schema,
            429: rechargeWorkspaceAccount429Schema,
            500: rechargeWorkspaceAccount500Schema,
            503: rechargeWorkspaceAccount503Schema,
            default: rechargeWorkspaceAccountMutationResponseSchema
        },
        errors: {
            400: rechargeWorkspaceAccount400Schema,
            401: rechargeWorkspaceAccount401Schema,
            404: rechargeWorkspaceAccount404Schema,
            422: rechargeWorkspaceAccount422Schema,
            429: rechargeWorkspaceAccount429Schema,
            500: rechargeWorkspaceAccount500Schema,
            503: rechargeWorkspaceAccount503Schema
        }
    }, "list_workspace_account_recharges": {
        request: undefined,
        parameters: {
            path: listWorkspaceAccountRechargesPathParamsSchema,
            query: listWorkspaceAccountRechargesQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listWorkspaceAccountRechargesQueryResponseSchema,
            400: listWorkspaceAccountRecharges400Schema,
            401: listWorkspaceAccountRecharges401Schema,
            404: listWorkspaceAccountRecharges404Schema,
            422: listWorkspaceAccountRecharges422Schema,
            429: listWorkspaceAccountRecharges429Schema,
            500: listWorkspaceAccountRecharges500Schema,
            503: listWorkspaceAccountRecharges503Schema,
            default: listWorkspaceAccountRechargesQueryResponseSchema
        },
        errors: {
            400: listWorkspaceAccountRecharges400Schema,
            401: listWorkspaceAccountRecharges401Schema,
            404: listWorkspaceAccountRecharges404Schema,
            422: listWorkspaceAccountRecharges422Schema,
            429: listWorkspaceAccountRecharges429Schema,
            500: listWorkspaceAccountRecharges500Schema,
            503: listWorkspaceAccountRecharges503Schema
        }
    }, "get_workspace_account_recharge": {
        request: undefined,
        parameters: {
            path: getWorkspaceAccountRechargePathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: getWorkspaceAccountRechargeQueryResponseSchema,
            400: getWorkspaceAccountRecharge400Schema,
            401: getWorkspaceAccountRecharge401Schema,
            404: getWorkspaceAccountRecharge404Schema,
            422: getWorkspaceAccountRecharge422Schema,
            429: getWorkspaceAccountRecharge429Schema,
            500: getWorkspaceAccountRecharge500Schema,
            503: getWorkspaceAccountRecharge503Schema,
            default: getWorkspaceAccountRechargeQueryResponseSchema
        },
        errors: {
            400: getWorkspaceAccountRecharge400Schema,
            401: getWorkspaceAccountRecharge401Schema,
            404: getWorkspaceAccountRecharge404Schema,
            422: getWorkspaceAccountRecharge422Schema,
            429: getWorkspaceAccountRecharge429Schema,
            500: getWorkspaceAccountRecharge500Schema,
            503: getWorkspaceAccountRecharge503Schema
        }
    }, "check_workspace_account_recharge": {
        request: undefined,
        parameters: {
            path: checkWorkspaceAccountRechargePathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: checkWorkspaceAccountRechargeMutationResponseSchema,
            400: checkWorkspaceAccountRecharge400Schema,
            401: checkWorkspaceAccountRecharge401Schema,
            404: checkWorkspaceAccountRecharge404Schema,
            422: checkWorkspaceAccountRecharge422Schema,
            429: checkWorkspaceAccountRecharge429Schema,
            500: checkWorkspaceAccountRecharge500Schema,
            503: checkWorkspaceAccountRecharge503Schema,
            default: checkWorkspaceAccountRechargeMutationResponseSchema
        },
        errors: {
            400: checkWorkspaceAccountRecharge400Schema,
            401: checkWorkspaceAccountRecharge401Schema,
            404: checkWorkspaceAccountRecharge404Schema,
            422: checkWorkspaceAccountRecharge422Schema,
            429: checkWorkspaceAccountRecharge429Schema,
            500: checkWorkspaceAccountRecharge500Schema,
            503: checkWorkspaceAccountRecharge503Schema
        }
    }, "list_workspace_resource_usage_records": {
        request: undefined,
        parameters: {
            path: listWorkspaceResourceUsageRecordsPathParamsSchema,
            query: listWorkspaceResourceUsageRecordsQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listWorkspaceResourceUsageRecordsQueryResponseSchema,
            400: listWorkspaceResourceUsageRecords400Schema,
            401: listWorkspaceResourceUsageRecords401Schema,
            404: listWorkspaceResourceUsageRecords404Schema,
            422: listWorkspaceResourceUsageRecords422Schema,
            429: listWorkspaceResourceUsageRecords429Schema,
            500: listWorkspaceResourceUsageRecords500Schema,
            503: listWorkspaceResourceUsageRecords503Schema,
            default: listWorkspaceResourceUsageRecordsQueryResponseSchema
        },
        errors: {
            400: listWorkspaceResourceUsageRecords400Schema,
            401: listWorkspaceResourceUsageRecords401Schema,
            404: listWorkspaceResourceUsageRecords404Schema,
            422: listWorkspaceResourceUsageRecords422Schema,
            429: listWorkspaceResourceUsageRecords429Schema,
            500: listWorkspaceResourceUsageRecords500Schema,
            503: listWorkspaceResourceUsageRecords503Schema
        }
    }, "get_workspace_ssh_keys": {
        request: undefined,
        parameters: {
            path: getWorkspaceSshKeysPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: getWorkspaceSshKeysQueryResponseSchema,
            400: getWorkspaceSshKeys400Schema,
            401: getWorkspaceSshKeys401Schema,
            404: getWorkspaceSshKeys404Schema,
            422: getWorkspaceSshKeys422Schema,
            429: getWorkspaceSshKeys429Schema,
            500: getWorkspaceSshKeys500Schema,
            503: getWorkspaceSshKeys503Schema,
            default: getWorkspaceSshKeysQueryResponseSchema
        },
        errors: {
            400: getWorkspaceSshKeys400Schema,
            401: getWorkspaceSshKeys401Schema,
            404: getWorkspaceSshKeys404Schema,
            422: getWorkspaceSshKeys422Schema,
            429: getWorkspaceSshKeys429Schema,
            500: getWorkspaceSshKeys500Schema,
            503: getWorkspaceSshKeys503Schema
        }
    }, "create_workspace_ssh_keys": {
        request: undefined,
        parameters: {
            path: createWorkspaceSshKeysPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            201: createWorkspaceSshKeysMutationResponseSchema,
            400: createWorkspaceSshKeys400Schema,
            401: createWorkspaceSshKeys401Schema,
            404: createWorkspaceSshKeys404Schema,
            422: createWorkspaceSshKeys422Schema,
            429: createWorkspaceSshKeys429Schema,
            500: createWorkspaceSshKeys500Schema,
            503: createWorkspaceSshKeys503Schema,
            default: createWorkspaceSshKeysMutationResponseSchema
        },
        errors: {
            400: createWorkspaceSshKeys400Schema,
            401: createWorkspaceSshKeys401Schema,
            404: createWorkspaceSshKeys404Schema,
            422: createWorkspaceSshKeys422Schema,
            429: createWorkspaceSshKeys429Schema,
            500: createWorkspaceSshKeys500Schema,
            503: createWorkspaceSshKeys503Schema
        }
    }, "delete_workspace_ssh_keys": {
        request: undefined,
        parameters: {
            path: deleteWorkspaceSshKeysPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            204: deleteWorkspaceSshKeysMutationResponseSchema,
            400: deleteWorkspaceSshKeys400Schema,
            401: deleteWorkspaceSshKeys401Schema,
            404: deleteWorkspaceSshKeys404Schema,
            422: deleteWorkspaceSshKeys422Schema,
            429: deleteWorkspaceSshKeys429Schema,
            500: deleteWorkspaceSshKeys500Schema,
            503: deleteWorkspaceSshKeys503Schema,
            default: deleteWorkspaceSshKeysMutationResponseSchema
        },
        errors: {
            400: deleteWorkspaceSshKeys400Schema,
            401: deleteWorkspaceSshKeys401Schema,
            404: deleteWorkspaceSshKeys404Schema,
            422: deleteWorkspaceSshKeys422Schema,
            429: deleteWorkspaceSshKeys429Schema,
            500: deleteWorkspaceSshKeys500Schema,
            503: deleteWorkspaceSshKeys503Schema
        }
    }, "get_workspace_members": {
        request: undefined,
        parameters: {
            path: getWorkspaceMembersPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: getWorkspaceMembersQueryResponseSchema,
            400: getWorkspaceMembers400Schema,
            401: getWorkspaceMembers401Schema,
            404: getWorkspaceMembers404Schema,
            422: getWorkspaceMembers422Schema,
            429: getWorkspaceMembers429Schema,
            500: getWorkspaceMembers500Schema,
            503: getWorkspaceMembers503Schema,
            default: getWorkspaceMembersQueryResponseSchema
        },
        errors: {
            400: getWorkspaceMembers400Schema,
            401: getWorkspaceMembers401Schema,
            404: getWorkspaceMembers404Schema,
            422: getWorkspaceMembers422Schema,
            429: getWorkspaceMembers429Schema,
            500: getWorkspaceMembers500Schema,
            503: getWorkspaceMembers503Schema
        }
    }, "get_workspace_invitations": {
        request: undefined,
        parameters: {
            path: getWorkspaceInvitationsPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: getWorkspaceInvitationsQueryResponseSchema,
            400: getWorkspaceInvitations400Schema,
            401: getWorkspaceInvitations401Schema,
            404: getWorkspaceInvitations404Schema,
            422: getWorkspaceInvitations422Schema,
            429: getWorkspaceInvitations429Schema,
            500: getWorkspaceInvitations500Schema,
            503: getWorkspaceInvitations503Schema,
            default: getWorkspaceInvitationsQueryResponseSchema
        },
        errors: {
            400: getWorkspaceInvitations400Schema,
            401: getWorkspaceInvitations401Schema,
            404: getWorkspaceInvitations404Schema,
            422: getWorkspaceInvitations422Schema,
            429: getWorkspaceInvitations429Schema,
            500: getWorkspaceInvitations500Schema,
            503: getWorkspaceInvitations503Schema
        }
    }, "create_zone": {
        request: createZoneMutationRequestSchema,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            201: createZoneMutationResponseSchema,
            400: createZone400Schema,
            401: createZone401Schema,
            404: createZone404Schema,
            422: createZone422Schema,
            429: createZone429Schema,
            500: createZone500Schema,
            503: createZone503Schema,
            default: createZoneMutationResponseSchema
        },
        errors: {
            400: createZone400Schema,
            401: createZone401Schema,
            404: createZone404Schema,
            422: createZone422Schema,
            429: createZone429Schema,
            500: createZone500Schema,
            503: createZone503Schema
        }
    }, "list_zones": {
        request: undefined,
        parameters: {
            path: undefined,
            query: listZonesQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listZonesQueryResponseSchema,
            400: listZones400Schema,
            401: listZones401Schema,
            404: listZones404Schema,
            422: listZones422Schema,
            429: listZones429Schema,
            500: listZones500Schema,
            503: listZones503Schema,
            default: listZonesQueryResponseSchema
        },
        errors: {
            400: listZones400Schema,
            401: listZones401Schema,
            404: listZones404Schema,
            422: listZones422Schema,
            429: listZones429Schema,
            500: listZones500Schema,
            503: listZones503Schema
        }
    }, "list_gpu_types": {
        request: undefined,
        parameters: {
            path: listGpuTypesPathParamsSchema,
            query: listGpuTypesQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listGpuTypesQueryResponseSchema,
            400: listGpuTypes400Schema,
            401: listGpuTypes401Schema,
            404: listGpuTypes404Schema,
            422: listGpuTypes422Schema,
            429: listGpuTypes429Schema,
            500: listGpuTypes500Schema,
            503: listGpuTypes503Schema,
            default: listGpuTypesQueryResponseSchema
        },
        errors: {
            400: listGpuTypes400Schema,
            401: listGpuTypes401Schema,
            404: listGpuTypes404Schema,
            422: listGpuTypes422Schema,
            429: listGpuTypes429Schema,
            500: listGpuTypes500Schema,
            503: listGpuTypes503Schema
        }
    }, "list_workspace_zones": {
        request: undefined,
        parameters: {
            path: listWorkspaceZonesPathParamsSchema,
            query: listWorkspaceZonesQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listWorkspaceZonesQueryResponseSchema,
            400: listWorkspaceZones400Schema,
            401: listWorkspaceZones401Schema,
            404: listWorkspaceZones404Schema,
            422: listWorkspaceZones422Schema,
            429: listWorkspaceZones429Schema,
            500: listWorkspaceZones500Schema,
            503: listWorkspaceZones503Schema,
            default: listWorkspaceZonesQueryResponseSchema
        },
        errors: {
            400: listWorkspaceZones400Schema,
            401: listWorkspaceZones401Schema,
            404: listWorkspaceZones404Schema,
            422: listWorkspaceZones422Schema,
            429: listWorkspaceZones429Schema,
            500: listWorkspaceZones500Schema,
            503: listWorkspaceZones503Schema
        }
    }, "watch_workspace_zones": {
        request: undefined,
        parameters: {
            path: watchWorkspaceZonesPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: watchWorkspaceZonesQueryResponseSchema,
            400: watchWorkspaceZones400Schema,
            401: watchWorkspaceZones401Schema,
            404: watchWorkspaceZones404Schema,
            422: watchWorkspaceZones422Schema,
            429: watchWorkspaceZones429Schema,
            500: watchWorkspaceZones500Schema,
            503: watchWorkspaceZones503Schema,
            default: watchWorkspaceZonesQueryResponseSchema
        },
        errors: {
            400: watchWorkspaceZones400Schema,
            401: watchWorkspaceZones401Schema,
            404: watchWorkspaceZones404Schema,
            422: watchWorkspaceZones422Schema,
            429: watchWorkspaceZones429Schema,
            500: watchWorkspaceZones500Schema,
            503: watchWorkspaceZones503Schema
        }
    }, "list_workspace_zone_gpu_types": {
        request: undefined,
        parameters: {
            path: listWorkspaceZoneGpuTypesPathParamsSchema,
            query: listWorkspaceZoneGpuTypesQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listWorkspaceZoneGpuTypesQueryResponseSchema,
            400: listWorkspaceZoneGpuTypes400Schema,
            401: listWorkspaceZoneGpuTypes401Schema,
            404: listWorkspaceZoneGpuTypes404Schema,
            422: listWorkspaceZoneGpuTypes422Schema,
            429: listWorkspaceZoneGpuTypes429Schema,
            500: listWorkspaceZoneGpuTypes500Schema,
            503: listWorkspaceZoneGpuTypes503Schema,
            default: listWorkspaceZoneGpuTypesQueryResponseSchema
        },
        errors: {
            400: listWorkspaceZoneGpuTypes400Schema,
            401: listWorkspaceZoneGpuTypes401Schema,
            404: listWorkspaceZoneGpuTypes404Schema,
            422: listWorkspaceZoneGpuTypes422Schema,
            429: listWorkspaceZoneGpuTypes429Schema,
            500: listWorkspaceZoneGpuTypes500Schema,
            503: listWorkspaceZoneGpuTypes503Schema
        }
    }, "get_workspace_zone_quota": {
        request: undefined,
        parameters: {
            path: getWorkspaceZoneQuotaPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: getWorkspaceZoneQuotaQueryResponseSchema,
            400: getWorkspaceZoneQuota400Schema,
            401: getWorkspaceZoneQuota401Schema,
            404: getWorkspaceZoneQuota404Schema,
            422: getWorkspaceZoneQuota422Schema,
            429: getWorkspaceZoneQuota429Schema,
            500: getWorkspaceZoneQuota500Schema,
            503: getWorkspaceZoneQuota503Schema,
            default: getWorkspaceZoneQuotaQueryResponseSchema
        },
        errors: {
            400: getWorkspaceZoneQuota400Schema,
            401: getWorkspaceZoneQuota401Schema,
            404: getWorkspaceZoneQuota404Schema,
            422: getWorkspaceZoneQuota422Schema,
            429: getWorkspaceZoneQuota429Schema,
            500: getWorkspaceZoneQuota500Schema,
            503: getWorkspaceZoneQuota503Schema
        }
    }, "list_instances": {
        request: undefined,
        parameters: {
            path: undefined,
            query: listInstancesQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listInstancesQueryResponseSchema,
            400: listInstances400Schema,
            401: listInstances401Schema,
            404: listInstances404Schema,
            422: listInstances422Schema,
            429: listInstances429Schema,
            500: listInstances500Schema,
            503: listInstances503Schema,
            default: listInstancesQueryResponseSchema
        },
        errors: {
            400: listInstances400Schema,
            401: listInstances401Schema,
            404: listInstances404Schema,
            422: listInstances422Schema,
            429: listInstances429Schema,
            500: listInstances500Schema,
            503: listInstances503Schema
        }
    }, "list_workspace_instances": {
        request: undefined,
        parameters: {
            path: listWorkspaceInstancesPathParamsSchema,
            query: listWorkspaceInstancesQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listWorkspaceInstancesQueryResponseSchema,
            400: listWorkspaceInstances400Schema,
            401: listWorkspaceInstances401Schema,
            404: listWorkspaceInstances404Schema,
            422: listWorkspaceInstances422Schema,
            429: listWorkspaceInstances429Schema,
            500: listWorkspaceInstances500Schema,
            503: listWorkspaceInstances503Schema,
            default: listWorkspaceInstancesQueryResponseSchema
        },
        errors: {
            400: listWorkspaceInstances400Schema,
            401: listWorkspaceInstances401Schema,
            404: listWorkspaceInstances404Schema,
            422: listWorkspaceInstances422Schema,
            429: listWorkspaceInstances429Schema,
            500: listWorkspaceInstances500Schema,
            503: listWorkspaceInstances503Schema
        }
    }, "get_instance": {
        request: undefined,
        parameters: {
            path: getInstancePathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: getInstanceQueryResponseSchema,
            400: getInstance400Schema,
            401: getInstance401Schema,
            404: getInstance404Schema,
            422: getInstance422Schema,
            429: getInstance429Schema,
            500: getInstance500Schema,
            503: getInstance503Schema,
            default: getInstanceQueryResponseSchema
        },
        errors: {
            400: getInstance400Schema,
            401: getInstance401Schema,
            404: getInstance404Schema,
            422: getInstance422Schema,
            429: getInstance429Schema,
            500: getInstance500Schema,
            503: getInstance503Schema
        }
    }, "delete_instance": {
        request: undefined,
        parameters: {
            path: deleteInstancePathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: deleteInstanceMutationResponseSchema,
            400: deleteInstance400Schema,
            401: deleteInstance401Schema,
            404: deleteInstance404Schema,
            422: deleteInstance422Schema,
            429: deleteInstance429Schema,
            500: deleteInstance500Schema,
            503: deleteInstance503Schema,
            default: deleteInstanceMutationResponseSchema
        },
        errors: {
            400: deleteInstance400Schema,
            401: deleteInstance401Schema,
            404: deleteInstance404Schema,
            422: deleteInstance422Schema,
            429: deleteInstance429Schema,
            500: deleteInstance500Schema,
            503: deleteInstance503Schema
        }
    }, "create_instance": {
        request: createInstanceMutationRequestSchema,
        parameters: {
            path: createInstancePathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            201: createInstanceMutationResponseSchema,
            400: createInstance400Schema,
            401: createInstance401Schema,
            404: createInstance404Schema,
            422: createInstance422Schema,
            429: createInstance429Schema,
            500: createInstance500Schema,
            503: createInstance503Schema,
            default: createInstanceMutationResponseSchema
        },
        errors: {
            400: createInstance400Schema,
            401: createInstance401Schema,
            404: createInstance404Schema,
            422: createInstance422Schema,
            429: createInstance429Schema,
            500: createInstance500Schema,
            503: createInstance503Schema
        }
    }, "start_instance": {
        request: undefined,
        parameters: {
            path: startInstancePathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: startInstanceMutationResponseSchema,
            400: startInstance400Schema,
            401: startInstance401Schema,
            404: startInstance404Schema,
            422: startInstance422Schema,
            429: startInstance429Schema,
            500: startInstance500Schema,
            503: startInstance503Schema,
            default: startInstanceMutationResponseSchema
        },
        errors: {
            400: startInstance400Schema,
            401: startInstance401Schema,
            404: startInstance404Schema,
            422: startInstance422Schema,
            429: startInstance429Schema,
            500: startInstance500Schema,
            503: startInstance503Schema
        }
    }, "stop_instance": {
        request: undefined,
        parameters: {
            path: stopInstancePathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: stopInstanceMutationResponseSchema,
            400: stopInstance400Schema,
            401: stopInstance401Schema,
            404: stopInstance404Schema,
            422: stopInstance422Schema,
            429: stopInstance429Schema,
            500: stopInstance500Schema,
            503: stopInstance503Schema,
            default: stopInstanceMutationResponseSchema
        },
        errors: {
            400: stopInstance400Schema,
            401: stopInstance401Schema,
            404: stopInstance404Schema,
            422: stopInstance422Schema,
            429: stopInstance429Schema,
            500: stopInstance500Schema,
            503: stopInstance503Schema
        }
    }, "create_instance_port_forward": {
        request: createInstancePortForwardMutationRequestSchema,
        parameters: {
            path: createInstancePortForwardPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            201: createInstancePortForwardMutationResponseSchema,
            400: createInstancePortForward400Schema,
            401: createInstancePortForward401Schema,
            404: createInstancePortForward404Schema,
            422: createInstancePortForward422Schema,
            429: createInstancePortForward429Schema,
            500: createInstancePortForward500Schema,
            503: createInstancePortForward503Schema,
            default: createInstancePortForwardMutationResponseSchema
        },
        errors: {
            400: createInstancePortForward400Schema,
            401: createInstancePortForward401Schema,
            404: createInstancePortForward404Schema,
            422: createInstancePortForward422Schema,
            429: createInstancePortForward429Schema,
            500: createInstancePortForward500Schema,
            503: createInstancePortForward503Schema
        }
    }, "delete_instance_port_forward": {
        request: undefined,
        parameters: {
            path: deleteInstancePortForwardPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            204: deleteInstancePortForwardMutationResponseSchema,
            400: deleteInstancePortForward400Schema,
            401: deleteInstancePortForward401Schema,
            404: deleteInstancePortForward404Schema,
            422: deleteInstancePortForward422Schema,
            429: deleteInstancePortForward429Schema,
            500: deleteInstancePortForward500Schema,
            503: deleteInstancePortForward503Schema,
            default: deleteInstancePortForwardMutationResponseSchema
        },
        errors: {
            400: deleteInstancePortForward400Schema,
            401: deleteInstancePortForward401Schema,
            404: deleteInstancePortForward404Schema,
            422: deleteInstancePortForward422Schema,
            429: deleteInstancePortForward429Schema,
            500: deleteInstancePortForward500Schema,
            503: deleteInstancePortForward503Schema
        }
    }, "list_instance_port_forwards": {
        request: undefined,
        parameters: {
            path: listInstancePortForwardsPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: listInstancePortForwardsQueryResponseSchema,
            400: listInstancePortForwards400Schema,
            401: listInstancePortForwards401Schema,
            404: listInstancePortForwards404Schema,
            422: listInstancePortForwards422Schema,
            429: listInstancePortForwards429Schema,
            500: listInstancePortForwards500Schema,
            503: listInstancePortForwards503Schema,
            default: listInstancePortForwardsQueryResponseSchema
        },
        errors: {
            400: listInstancePortForwards400Schema,
            401: listInstancePortForwards401Schema,
            404: listInstancePortForwards404Schema,
            422: listInstancePortForwards422Schema,
            429: listInstancePortForwards429Schema,
            500: listInstancePortForwards500Schema,
            503: listInstancePortForwards503Schema
        }
    }, "list_workspace_operations": {
        request: undefined,
        parameters: {
            path: listWorkspaceOperationsPathParamsSchema,
            query: listWorkspaceOperationsQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listWorkspaceOperationsQueryResponseSchema,
            400: listWorkspaceOperations400Schema,
            401: listWorkspaceOperations401Schema,
            404: listWorkspaceOperations404Schema,
            422: listWorkspaceOperations422Schema,
            429: listWorkspaceOperations429Schema,
            500: listWorkspaceOperations500Schema,
            503: listWorkspaceOperations503Schema,
            default: listWorkspaceOperationsQueryResponseSchema
        },
        errors: {
            400: listWorkspaceOperations400Schema,
            401: listWorkspaceOperations401Schema,
            404: listWorkspaceOperations404Schema,
            422: listWorkspaceOperations422Schema,
            429: listWorkspaceOperations429Schema,
            500: listWorkspaceOperations500Schema,
            503: listWorkspaceOperations503Schema
        }
    }, "get_workspace_operation": {
        request: undefined,
        parameters: {
            path: getWorkspaceOperationPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: getWorkspaceOperationQueryResponseSchema,
            400: getWorkspaceOperation400Schema,
            401: getWorkspaceOperation401Schema,
            404: getWorkspaceOperation404Schema,
            422: getWorkspaceOperation422Schema,
            429: getWorkspaceOperation429Schema,
            500: getWorkspaceOperation500Schema,
            503: getWorkspaceOperation503Schema,
            default: getWorkspaceOperationQueryResponseSchema
        },
        errors: {
            400: getWorkspaceOperation400Schema,
            401: getWorkspaceOperation401Schema,
            404: getWorkspaceOperation404Schema,
            422: getWorkspaceOperation422Schema,
            429: getWorkspaceOperation429Schema,
            500: getWorkspaceOperation500Schema,
            503: getWorkspaceOperation503Schema
        }
    }, "watch_workspace_operations": {
        request: undefined,
        parameters: {
            path: watchWorkspaceOperationsPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: watchWorkspaceOperationsQueryResponseSchema,
            400: watchWorkspaceOperations400Schema,
            401: watchWorkspaceOperations401Schema,
            404: watchWorkspaceOperations404Schema,
            422: watchWorkspaceOperations422Schema,
            429: watchWorkspaceOperations429Schema,
            500: watchWorkspaceOperations500Schema,
            503: watchWorkspaceOperations503Schema,
            default: watchWorkspaceOperationsQueryResponseSchema
        },
        errors: {
            400: watchWorkspaceOperations400Schema,
            401: watchWorkspaceOperations401Schema,
            404: watchWorkspaceOperations404Schema,
            422: watchWorkspaceOperations422Schema,
            429: watchWorkspaceOperations429Schema,
            500: watchWorkspaceOperations500Schema,
            503: watchWorkspaceOperations503Schema
        }
    }, "watch_workspace_operation": {
        request: undefined,
        parameters: {
            path: watchWorkspaceOperationPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: watchWorkspaceOperationQueryResponseSchema,
            400: watchWorkspaceOperation400Schema,
            401: watchWorkspaceOperation401Schema,
            404: watchWorkspaceOperation404Schema,
            422: watchWorkspaceOperation422Schema,
            429: watchWorkspaceOperation429Schema,
            500: watchWorkspaceOperation500Schema,
            503: watchWorkspaceOperation503Schema,
            default: watchWorkspaceOperationQueryResponseSchema
        },
        errors: {
            400: watchWorkspaceOperation400Schema,
            401: watchWorkspaceOperation401Schema,
            404: watchWorkspaceOperation404Schema,
            422: watchWorkspaceOperation422Schema,
            429: watchWorkspaceOperation429Schema,
            500: watchWorkspaceOperation500Schema,
            503: watchWorkspaceOperation503Schema
        }
    }, "create_file_storage": {
        request: createFileStorageMutationRequestSchema,
        parameters: {
            path: createFileStoragePathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            201: createFileStorageMutationResponseSchema,
            400: createFileStorage400Schema,
            401: createFileStorage401Schema,
            404: createFileStorage404Schema,
            422: createFileStorage422Schema,
            429: createFileStorage429Schema,
            500: createFileStorage500Schema,
            503: createFileStorage503Schema,
            default: createFileStorageMutationResponseSchema
        },
        errors: {
            400: createFileStorage400Schema,
            401: createFileStorage401Schema,
            404: createFileStorage404Schema,
            422: createFileStorage422Schema,
            429: createFileStorage429Schema,
            500: createFileStorage500Schema,
            503: createFileStorage503Schema
        }
    }, "list_workspace_file_storages": {
        request: undefined,
        parameters: {
            path: listWorkspaceFileStoragesPathParamsSchema,
            query: listWorkspaceFileStoragesQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listWorkspaceFileStoragesQueryResponseSchema,
            400: listWorkspaceFileStorages400Schema,
            401: listWorkspaceFileStorages401Schema,
            404: listWorkspaceFileStorages404Schema,
            422: listWorkspaceFileStorages422Schema,
            429: listWorkspaceFileStorages429Schema,
            500: listWorkspaceFileStorages500Schema,
            503: listWorkspaceFileStorages503Schema,
            default: listWorkspaceFileStoragesQueryResponseSchema
        },
        errors: {
            400: listWorkspaceFileStorages400Schema,
            401: listWorkspaceFileStorages401Schema,
            404: listWorkspaceFileStorages404Schema,
            422: listWorkspaceFileStorages422Schema,
            429: listWorkspaceFileStorages429Schema,
            500: listWorkspaceFileStorages500Schema,
            503: listWorkspaceFileStorages503Schema
        }
    }, "get_file_storage": {
        request: undefined,
        parameters: {
            path: getFileStoragePathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: getFileStorageQueryResponseSchema,
            400: getFileStorage400Schema,
            401: getFileStorage401Schema,
            404: getFileStorage404Schema,
            422: getFileStorage422Schema,
            429: getFileStorage429Schema,
            500: getFileStorage500Schema,
            503: getFileStorage503Schema,
            default: getFileStorageQueryResponseSchema
        },
        errors: {
            400: getFileStorage400Schema,
            401: getFileStorage401Schema,
            404: getFileStorage404Schema,
            422: getFileStorage422Schema,
            429: getFileStorage429Schema,
            500: getFileStorage500Schema,
            503: getFileStorage503Schema
        }
    }, "delete_file_storage": {
        request: undefined,
        parameters: {
            path: deleteFileStoragePathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: deleteFileStorageMutationResponseSchema,
            400: deleteFileStorage400Schema,
            401: deleteFileStorage401Schema,
            404: deleteFileStorage404Schema,
            422: deleteFileStorage422Schema,
            429: deleteFileStorage429Schema,
            500: deleteFileStorage500Schema,
            503: deleteFileStorage503Schema,
            default: deleteFileStorageMutationResponseSchema
        },
        errors: {
            400: deleteFileStorage400Schema,
            401: deleteFileStorage401Schema,
            404: deleteFileStorage404Schema,
            422: deleteFileStorage422Schema,
            429: deleteFileStorage429Schema,
            500: deleteFileStorage500Schema,
            503: deleteFileStorage503Schema
        }
    }, "list_files_in_file_storage": {
        request: undefined,
        parameters: {
            path: listFilesInFileStoragePathParamsSchema,
            query: listFilesInFileStorageQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listFilesInFileStorageQueryResponseSchema,
            400: listFilesInFileStorage400Schema,
            401: listFilesInFileStorage401Schema,
            404: listFilesInFileStorage404Schema,
            422: listFilesInFileStorage422Schema,
            429: listFilesInFileStorage429Schema,
            500: listFilesInFileStorage500Schema,
            503: listFilesInFileStorage503Schema,
            default: listFilesInFileStorageQueryResponseSchema
        },
        errors: {
            400: listFilesInFileStorage400Schema,
            401: listFilesInFileStorage401Schema,
            404: listFilesInFileStorage404Schema,
            422: listFilesInFileStorage422Schema,
            429: listFilesInFileStorage429Schema,
            500: listFilesInFileStorage500Schema,
            503: listFilesInFileStorage503Schema
        }
    }, "create_image": {
        request: createImageMutationRequestSchema,
        parameters: {
            path: createImagePathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            201: createImageMutationResponseSchema,
            400: createImage400Schema,
            401: createImage401Schema,
            404: createImage404Schema,
            422: createImage422Schema,
            429: createImage429Schema,
            500: createImage500Schema,
            503: createImage503Schema,
            default: createImageMutationResponseSchema
        },
        errors: {
            400: createImage400Schema,
            401: createImage401Schema,
            404: createImage404Schema,
            422: createImage422Schema,
            429: createImage429Schema,
            500: createImage500Schema,
            503: createImage503Schema
        }
    }, "update_image": {
        request: undefined,
        parameters: {
            path: updateImagePathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: updateImageMutationResponseSchema,
            400: updateImage400Schema,
            401: updateImage401Schema,
            404: updateImage404Schema,
            422: updateImage422Schema,
            429: updateImage429Schema,
            500: updateImage500Schema,
            503: updateImage503Schema,
            default: updateImageMutationResponseSchema
        },
        errors: {
            400: updateImage400Schema,
            401: updateImage401Schema,
            404: updateImage404Schema,
            422: updateImage422Schema,
            429: updateImage429Schema,
            500: updateImage500Schema,
            503: updateImage503Schema
        }
    }, "list_workspace_images": {
        request: undefined,
        parameters: {
            path: listWorkspaceImagesPathParamsSchema,
            query: listWorkspaceImagesQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listWorkspaceImagesQueryResponseSchema,
            400: listWorkspaceImages400Schema,
            401: listWorkspaceImages401Schema,
            404: listWorkspaceImages404Schema,
            422: listWorkspaceImages422Schema,
            429: listWorkspaceImages429Schema,
            500: listWorkspaceImages500Schema,
            503: listWorkspaceImages503Schema,
            default: listWorkspaceImagesQueryResponseSchema
        },
        errors: {
            400: listWorkspaceImages400Schema,
            401: listWorkspaceImages401Schema,
            404: listWorkspaceImages404Schema,
            422: listWorkspaceImages422Schema,
            429: listWorkspaceImages429Schema,
            500: listWorkspaceImages500Schema,
            503: listWorkspaceImages503Schema
        }
    }, "auth": {
        request: authMutationRequestSchema,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: authMutationResponseSchema,
            400: auth400Schema,
            401: auth401Schema,
            404: auth404Schema,
            422: auth422Schema,
            429: auth429Schema,
            500: auth500Schema,
            503: auth503Schema,
            default: authMutationResponseSchema
        },
        errors: {
            400: auth400Schema,
            401: auth401Schema,
            404: auth404Schema,
            422: auth422Schema,
            429: auth429Schema,
            500: auth500Schema,
            503: auth503Schema
        }
    }, "token": {
        request: tokenMutationRequestSchema,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: tokenMutationResponseSchema,
            400: token400Schema,
            401: token401Schema,
            404: token404Schema,
            422: token422Schema,
            429: token429Schema,
            500: token500Schema,
            503: token503Schema,
            default: tokenMutationResponseSchema
        },
        errors: {
            400: token400Schema,
            401: token401Schema,
            404: token404Schema,
            422: token422Schema,
            429: token429Schema,
            500: token500Schema,
            503: token503Schema
        }
    } } as const;
export const paths = { "/apis/user/v1/users/me": {
        get: operations["get_current_user"]
    }, "/apis/user/v1/users/": {
        get: operations["list_users"],
        post: operations["register_user"]
    }, "/apis/user/v1/users/{username}": {
        get: operations["get_user"],
        delete: operations["delete_user"]
    }, "/apis/user/v1/one_time_password": {
        post: operations["send_one_time_password"]
    }, "/apis/user/v1/users/{username}/quota": {
        get: operations["get_user_quota"],
        patch: operations["update_user_quota"],
        put: operations["replace_user_quota"]
    }, "/apis/workspace/v1/users/{username}/workspaces": {
        post: operations["create_workspace"],
        get: operations["list_user_workspaces"]
    }, "/apis/workspace/v1/workspaces": {
        get: operations["list_workspaces"]
    }, "/apis/workspace/v1/workspaces/{workspace}": {
        get: operations["get_workspace"],
        delete: operations["delete_workspace"]
    }, "/apis/workspace/v1/workspaces/{workspace}/quota": {
        get: operations["get_workspace_quota"],
        patch: operations["update_workspace_quota"],
        put: operations["replace_workspace_quota"]
    }, "/apis/workspace/v1/workspaces/{workspace}/account": {
        get: operations["get_workspace_account"]
    }, "/apis/workspace/v1/workspaces/{workspace}/account/recharge": {
        post: operations["recharge_workspace_account"]
    }, "/apis/workspace/v1/workspaces/{workspace}/account/recharges": {
        get: operations["list_workspace_account_recharges"]
    }, "/apis/workspace/v1/workspaces/{workspace}/account/recharges/{recharge_id}": {
        get: operations["get_workspace_account_recharge"]
    }, "/apis/workspace/v1/recharges/{recharge_id}/check": {
        post: operations["check_workspace_account_recharge"]
    }, "/apis/workspace/v1/workspaces/{workspace}/resource_usage_record": {
        get: operations["list_workspace_resource_usage_records"]
    }, "/apis/workspace/v1/workspaces/{workspace}/ssh_keys": {
        get: operations["get_workspace_ssh_keys"],
        post: operations["create_workspace_ssh_keys"]
    }, "/apis/workspace/v1/workspaces/{workspace}/ssh_keys/{name}": {
        delete: operations["delete_workspace_ssh_keys"]
    }, "/apis/workspace/v1/workspaces/{workspace}/members": {
        get: operations["get_workspace_members"]
    }, "/apis/workspace/v1/workspaces/{workspace}/invitations": {
        get: operations["get_workspace_invitations"]
    }, "/apis/compute/v1/zones/": {
        post: operations["create_zone"]
    }, "/apis/compute/v1/zones": {
        get: operations["list_zones"]
    }, "/apis/compute/v1/zones/{zone}/gpu_types": {
        get: operations["list_gpu_types"]
    }, "/apis/compute/v1/workspaces/{workspace}/zones": {
        get: operations["list_workspace_zones"]
    }, "/apis/compute/v1/watch/workspaces/{workspace}/zones": {
        get: operations["watch_workspace_zones"]
    }, "/apis/compute/v1/workspaces/{workspace}/zones/{zone}/gpu_types": {
        get: operations["list_workspace_zone_gpu_types"]
    }, "/apis/compute/v1/workspaces/{workspace}/zones/{zone}/quota": {
        get: operations["get_workspace_zone_quota"]
    }, "/apis/compute/v1/instances": {
        get: operations["list_instances"]
    }, "/apis/compute/v1/workspaces/{workspace}/instances": {
        get: operations["list_workspace_instances"]
    }, "/apis/compute/v1/workspaces/{workspace}/zones/{zone}/instances/{name}": {
        get: operations["get_instance"],
        delete: operations["delete_instance"]
    }, "/apis/compute/v1/workspaces/{workspace}/zones/{zone}/instances": {
        post: operations["create_instance"]
    }, "/apis/compute/v1/workspaces/{workspace}/zones/{zone}/instances/{name}/start": {
        post: operations["start_instance"]
    }, "/apis/compute/v1/workspaces/{workspace}/zones/{zone}/instances/{name}/stop": {
        post: operations["stop_instance"]
    }, "/apis/compute/v1/workspaces/{workspace}/zones/{zone}/instances/{name}/port_forward": {
        post: operations["create_instance_port_forward"]
    }, "/apis/compute/v1/workspaces/{workspace}/zones/{zone}/instances/{name}/port_forwards/{port_forward_name}": {
        delete: operations["delete_instance_port_forward"]
    }, "/apis/compute/v1/workspaces/{workspace}/zones/{zone}/instances/{name}/port_forwards": {
        get: operations["list_instance_port_forwards"]
    }, "/apis/compute/v1/workspaces/{workspace}/zones/{zone}/operations": {
        get: operations["list_workspace_operations"]
    }, "/apis/compute/v1/workspaces/{workspace}/zones/{zone}/operations/{uid}": {
        get: operations["get_workspace_operation"]
    }, "/apis/compute/v1/watch/workspaces/{workspace}/zones/{zone}/operations": {
        get: operations["watch_workspace_operations"]
    }, "/apis/compute/v1/watch/workspaces/{workspace}/zones/{zone}/operations/{uid}": {
        get: operations["watch_workspace_operation"]
    }, "/apis/compute/v1/workspaces/{workspace}/zones/{zone}/file_storages/": {
        post: operations["create_file_storage"]
    }, "/apis/compute/v1/workspaces/{workspace}/zones/{zone}/file_storages": {
        get: operations["list_workspace_file_storages"]
    }, "/apis/compute/v1/workspaces/{workspace}/zones/{zone}/file_storages/{name}": {
        get: operations["get_file_storage"],
        delete: operations["delete_file_storage"]
    }, "/apis/compute/v1/workspaces/{workspace}/zones/{zone}/file_storages/{name}/files": {
        get: operations["list_files_in_file_storage"]
    }, "/apis/compute/v1/zones/{zone}/images/": {
        post: operations["create_image"]
    }, "/apis/compute/v1/zones/{zone}/images/{name}": {
        patch: operations["update_image"]
    }, "/apis/compute/v1/workspaces/{workspace}/zones/{zone}/images": {
        get: operations["list_workspace_images"]
    }, "/apis/oidc/v1/auth": {
        post: operations["auth"]
    }, "/apis/oidc/v1/token": {
        post: operations["token"]
    } } as const;