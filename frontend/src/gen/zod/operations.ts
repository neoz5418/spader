import { getCurrentUserQueryResponseSchema, getCurrentUser400Schema, getCurrentUser401Schema, getCurrentUser404Schema, getCurrentUser409Schema, getCurrentUser412Schema, getCurrentUser422Schema, getCurrentUser500Schema } from "./getCurrentUserSchema.gen";
import { listUsersQueryResponseSchema, listUsers400Schema, listUsers401Schema, listUsers404Schema, listUsers409Schema, listUsers412Schema, listUsers422Schema, listUsers500Schema, listUsersQueryParamsSchema } from "./listUsersSchema.gen";
import { registerUserMutationRequestSchema, registerUserMutationResponseSchema, registerUser400Schema, registerUser401Schema, registerUser404Schema, registerUser409Schema, registerUser412Schema, registerUser422Schema, registerUser500Schema } from "./registerUserSchema.gen";
import { getUserQueryResponseSchema, getUser400Schema, getUser401Schema, getUser404Schema, getUser409Schema, getUser412Schema, getUser422Schema, getUser500Schema, getUserPathParamsSchema } from "./getUserSchema.gen";
import { deleteUserMutationResponseSchema, deleteUser400Schema, deleteUser401Schema, deleteUser404Schema, deleteUser409Schema, deleteUser412Schema, deleteUser422Schema, deleteUser500Schema, deleteUserPathParamsSchema } from "./deleteUserSchema.gen";
import { sendOneTimePasswordMutationRequestSchema, sendOneTimePasswordMutationResponseSchema, sendOneTimePassword400Schema, sendOneTimePassword401Schema, sendOneTimePassword404Schema, sendOneTimePassword409Schema, sendOneTimePassword412Schema, sendOneTimePassword422Schema, sendOneTimePassword500Schema } from "./sendOneTimePasswordSchema.gen";
import { getUserQuotaQueryResponseSchema, getUserQuota400Schema, getUserQuota401Schema, getUserQuota404Schema, getUserQuota409Schema, getUserQuota412Schema, getUserQuota422Schema, getUserQuota500Schema, getUserQuotaPathParamsSchema } from "./getUserQuotaSchema.gen";
import { updateUserQuotaMutationResponseSchema, updateUserQuota400Schema, updateUserQuota401Schema, updateUserQuota404Schema, updateUserQuota409Schema, updateUserQuota412Schema, updateUserQuota422Schema, updateUserQuota500Schema, updateUserQuotaPathParamsSchema } from "./updateUserQuotaSchema.gen";
import { replaceUserQuotaMutationResponseSchema, replaceUserQuota400Schema, replaceUserQuota401Schema, replaceUserQuota404Schema, replaceUserQuota409Schema, replaceUserQuota412Schema, replaceUserQuota422Schema, replaceUserQuota500Schema, replaceUserQuotaPathParamsSchema } from "./replaceUserQuotaSchema.gen";
import { createWorkspaceMutationRequestSchema, createWorkspaceMutationResponseSchema, createWorkspace400Schema, createWorkspace401Schema, createWorkspace404Schema, createWorkspace409Schema, createWorkspace412Schema, createWorkspace422Schema, createWorkspace500Schema, createWorkspacePathParamsSchema } from "./createWorkspaceSchema.gen";
import { listUserWorkspacesQueryResponseSchema, listUserWorkspaces400Schema, listUserWorkspaces401Schema, listUserWorkspaces404Schema, listUserWorkspaces409Schema, listUserWorkspaces412Schema, listUserWorkspaces422Schema, listUserWorkspaces500Schema, listUserWorkspacesPathParamsSchema, listUserWorkspacesQueryParamsSchema } from "./listUserWorkspacesSchema.gen";
import { listWorkspacesQueryResponseSchema, listWorkspaces400Schema, listWorkspaces401Schema, listWorkspaces404Schema, listWorkspaces409Schema, listWorkspaces412Schema, listWorkspaces422Schema, listWorkspaces500Schema, listWorkspacesQueryParamsSchema } from "./listWorkspacesSchema.gen";
import { getWorkspaceQueryResponseSchema, getWorkspace400Schema, getWorkspace401Schema, getWorkspace404Schema, getWorkspace409Schema, getWorkspace412Schema, getWorkspace422Schema, getWorkspace500Schema, getWorkspacePathParamsSchema } from "./getWorkspaceSchema.gen";
import { deleteWorkspaceMutationResponseSchema, deleteWorkspace400Schema, deleteWorkspace401Schema, deleteWorkspace404Schema, deleteWorkspace409Schema, deleteWorkspace412Schema, deleteWorkspace422Schema, deleteWorkspace500Schema, deleteWorkspacePathParamsSchema } from "./deleteWorkspaceSchema.gen";
import { getWorkspaceQuotaQueryResponseSchema, getWorkspaceQuota400Schema, getWorkspaceQuota401Schema, getWorkspaceQuota404Schema, getWorkspaceQuota409Schema, getWorkspaceQuota412Schema, getWorkspaceQuota422Schema, getWorkspaceQuota500Schema, getWorkspaceQuotaPathParamsSchema } from "./getWorkspaceQuotaSchema.gen";
import { updateWorkspaceQuotaMutationRequestSchema, updateWorkspaceQuotaMutationResponseSchema, updateWorkspaceQuota400Schema, updateWorkspaceQuota401Schema, updateWorkspaceQuota404Schema, updateWorkspaceQuota409Schema, updateWorkspaceQuota412Schema, updateWorkspaceQuota422Schema, updateWorkspaceQuota500Schema, updateWorkspaceQuotaPathParamsSchema } from "./updateWorkspaceQuotaSchema.gen";
import { replaceWorkspaceQuotaMutationRequestSchema, replaceWorkspaceQuotaMutationResponseSchema, replaceWorkspaceQuota400Schema, replaceWorkspaceQuota401Schema, replaceWorkspaceQuota404Schema, replaceWorkspaceQuota409Schema, replaceWorkspaceQuota412Schema, replaceWorkspaceQuota422Schema, replaceWorkspaceQuota500Schema, replaceWorkspaceQuotaPathParamsSchema } from "./replaceWorkspaceQuotaSchema.gen";
import { getWorkspaceAccountQueryResponseSchema, getWorkspaceAccount400Schema, getWorkspaceAccount401Schema, getWorkspaceAccount404Schema, getWorkspaceAccount409Schema, getWorkspaceAccount412Schema, getWorkspaceAccount422Schema, getWorkspaceAccount500Schema, getWorkspaceAccountPathParamsSchema } from "./getWorkspaceAccountSchema.gen";
import { rechargeWorkspaceAccountMutationRequestSchema, rechargeWorkspaceAccountMutationResponseSchema, rechargeWorkspaceAccount400Schema, rechargeWorkspaceAccount401Schema, rechargeWorkspaceAccount404Schema, rechargeWorkspaceAccount409Schema, rechargeWorkspaceAccount412Schema, rechargeWorkspaceAccount422Schema, rechargeWorkspaceAccount500Schema, rechargeWorkspaceAccountPathParamsSchema } from "./rechargeWorkspaceAccountSchema.gen";
import { listWorkspaceAccountRechargesQueryResponseSchema, listWorkspaceAccountRecharges400Schema, listWorkspaceAccountRecharges401Schema, listWorkspaceAccountRecharges404Schema, listWorkspaceAccountRecharges409Schema, listWorkspaceAccountRecharges412Schema, listWorkspaceAccountRecharges422Schema, listWorkspaceAccountRecharges500Schema, listWorkspaceAccountRechargesPathParamsSchema, listWorkspaceAccountRechargesQueryParamsSchema } from "./listWorkspaceAccountRechargesSchema.gen";
import { getWorkspaceAccountRechargeQueryResponseSchema, getWorkspaceAccountRecharge400Schema, getWorkspaceAccountRecharge401Schema, getWorkspaceAccountRecharge404Schema, getWorkspaceAccountRecharge409Schema, getWorkspaceAccountRecharge412Schema, getWorkspaceAccountRecharge422Schema, getWorkspaceAccountRecharge500Schema, getWorkspaceAccountRechargePathParamsSchema } from "./getWorkspaceAccountRechargeSchema.gen";
import { checkWorkspaceAccountRechargeMutationResponseSchema, checkWorkspaceAccountRecharge400Schema, checkWorkspaceAccountRecharge401Schema, checkWorkspaceAccountRecharge404Schema, checkWorkspaceAccountRecharge409Schema, checkWorkspaceAccountRecharge412Schema, checkWorkspaceAccountRecharge422Schema, checkWorkspaceAccountRecharge500Schema, checkWorkspaceAccountRechargePathParamsSchema } from "./checkWorkspaceAccountRechargeSchema.gen";
import { listWorkspaceResourceUsageRecordsQueryResponseSchema, listWorkspaceResourceUsageRecords400Schema, listWorkspaceResourceUsageRecords401Schema, listWorkspaceResourceUsageRecords404Schema, listWorkspaceResourceUsageRecords409Schema, listWorkspaceResourceUsageRecords412Schema, listWorkspaceResourceUsageRecords422Schema, listWorkspaceResourceUsageRecords500Schema, listWorkspaceResourceUsageRecordsPathParamsSchema, listWorkspaceResourceUsageRecordsQueryParamsSchema } from "./listWorkspaceResourceUsageRecordsSchema.gen";
import { getWorkspaceSshKeysQueryResponseSchema, getWorkspaceSshKeys400Schema, getWorkspaceSshKeys401Schema, getWorkspaceSshKeys404Schema, getWorkspaceSshKeys409Schema, getWorkspaceSshKeys412Schema, getWorkspaceSshKeys422Schema, getWorkspaceSshKeys500Schema, getWorkspaceSshKeysPathParamsSchema } from "./getWorkspaceSshKeysSchema.gen";
import { createWorkspaceSshKeysMutationResponseSchema, createWorkspaceSshKeys400Schema, createWorkspaceSshKeys401Schema, createWorkspaceSshKeys404Schema, createWorkspaceSshKeys409Schema, createWorkspaceSshKeys412Schema, createWorkspaceSshKeys422Schema, createWorkspaceSshKeys500Schema, createWorkspaceSshKeysPathParamsSchema } from "./createWorkspaceSshKeysSchema.gen";
import { deleteWorkspaceSshKeysMutationResponseSchema, deleteWorkspaceSshKeys400Schema, deleteWorkspaceSshKeys401Schema, deleteWorkspaceSshKeys404Schema, deleteWorkspaceSshKeys409Schema, deleteWorkspaceSshKeys412Schema, deleteWorkspaceSshKeys422Schema, deleteWorkspaceSshKeys500Schema, deleteWorkspaceSshKeysPathParamsSchema } from "./deleteWorkspaceSshKeysSchema.gen";
import { getWorkspaceMembersQueryResponseSchema, getWorkspaceMembers400Schema, getWorkspaceMembers401Schema, getWorkspaceMembers404Schema, getWorkspaceMembers409Schema, getWorkspaceMembers412Schema, getWorkspaceMembers422Schema, getWorkspaceMembers500Schema, getWorkspaceMembersPathParamsSchema } from "./getWorkspaceMembersSchema.gen";
import { getWorkspaceInvitationsQueryResponseSchema, getWorkspaceInvitations400Schema, getWorkspaceInvitations401Schema, getWorkspaceInvitations404Schema, getWorkspaceInvitations409Schema, getWorkspaceInvitations412Schema, getWorkspaceInvitations422Schema, getWorkspaceInvitations500Schema, getWorkspaceInvitationsPathParamsSchema } from "./getWorkspaceInvitationsSchema.gen";
import { createZoneMutationRequestSchema, createZoneMutationResponseSchema, createZone400Schema, createZone401Schema, createZone404Schema, createZone409Schema, createZone412Schema, createZone422Schema, createZone500Schema } from "./createZoneSchema.gen";
import { listZonesQueryResponseSchema, listZones400Schema, listZones401Schema, listZones404Schema, listZones409Schema, listZones412Schema, listZones422Schema, listZones500Schema, listZonesQueryParamsSchema } from "./listZonesSchema.gen";
import { listGpuTypesQueryResponseSchema, listGpuTypes400Schema, listGpuTypes401Schema, listGpuTypes404Schema, listGpuTypes409Schema, listGpuTypes412Schema, listGpuTypes422Schema, listGpuTypes500Schema, listGpuTypesPathParamsSchema, listGpuTypesQueryParamsSchema } from "./listGpuTypesSchema.gen";
import { listWorkspaceZonesQueryResponseSchema, listWorkspaceZones400Schema, listWorkspaceZones401Schema, listWorkspaceZones404Schema, listWorkspaceZones409Schema, listWorkspaceZones412Schema, listWorkspaceZones422Schema, listWorkspaceZones500Schema, listWorkspaceZonesPathParamsSchema, listWorkspaceZonesQueryParamsSchema } from "./listWorkspaceZonesSchema.gen";
import { listWorkspaceZoneGpuTypesQueryResponseSchema, listWorkspaceZoneGpuTypes400Schema, listWorkspaceZoneGpuTypes401Schema, listWorkspaceZoneGpuTypes404Schema, listWorkspaceZoneGpuTypes409Schema, listWorkspaceZoneGpuTypes412Schema, listWorkspaceZoneGpuTypes422Schema, listWorkspaceZoneGpuTypes500Schema, listWorkspaceZoneGpuTypesPathParamsSchema, listWorkspaceZoneGpuTypesQueryParamsSchema } from "./listWorkspaceZoneGpuTypesSchema.gen";
import { getWorkspaceZoneQuotaQueryResponseSchema, getWorkspaceZoneQuota400Schema, getWorkspaceZoneQuota401Schema, getWorkspaceZoneQuota404Schema, getWorkspaceZoneQuota409Schema, getWorkspaceZoneQuota412Schema, getWorkspaceZoneQuota422Schema, getWorkspaceZoneQuota500Schema, getWorkspaceZoneQuotaPathParamsSchema } from "./getWorkspaceZoneQuotaSchema.gen";
import { listInstancesQueryResponseSchema, listInstances400Schema, listInstances401Schema, listInstances404Schema, listInstances409Schema, listInstances412Schema, listInstances422Schema, listInstances500Schema, listInstancesQueryParamsSchema } from "./listInstancesSchema.gen";
import { listWorkspaceInstancesQueryResponseSchema, listWorkspaceInstances400Schema, listWorkspaceInstances401Schema, listWorkspaceInstances404Schema, listWorkspaceInstances409Schema, listWorkspaceInstances412Schema, listWorkspaceInstances422Schema, listWorkspaceInstances500Schema, listWorkspaceInstancesPathParamsSchema, listWorkspaceInstancesQueryParamsSchema } from "./listWorkspaceInstancesSchema.gen";
import { getInstanceQueryResponseSchema, getInstance400Schema, getInstance401Schema, getInstance404Schema, getInstance409Schema, getInstance412Schema, getInstance422Schema, getInstance500Schema, getInstancePathParamsSchema } from "./getInstanceSchema.gen";
import { deleteInstanceMutationResponseSchema, deleteInstance400Schema, deleteInstance401Schema, deleteInstance404Schema, deleteInstance409Schema, deleteInstance412Schema, deleteInstance422Schema, deleteInstance500Schema, deleteInstancePathParamsSchema } from "./deleteInstanceSchema.gen";
import { createInstanceMutationRequestSchema, createInstanceMutationResponseSchema, createInstance400Schema, createInstance401Schema, createInstance404Schema, createInstance409Schema, createInstance412Schema, createInstance422Schema, createInstance500Schema, createInstancePathParamsSchema } from "./createInstanceSchema.gen";
import { startInstanceMutationResponseSchema, startInstance400Schema, startInstance401Schema, startInstance404Schema, startInstance409Schema, startInstance412Schema, startInstance422Schema, startInstance500Schema, startInstancePathParamsSchema } from "./startInstanceSchema.gen";
import { stopInstanceMutationResponseSchema, stopInstance400Schema, stopInstance401Schema, stopInstance404Schema, stopInstance409Schema, stopInstance412Schema, stopInstance422Schema, stopInstance500Schema, stopInstancePathParamsSchema } from "./stopInstanceSchema.gen";
import { createInstancePortForwardMutationRequestSchema, createInstancePortForwardMutationResponseSchema, createInstancePortForward400Schema, createInstancePortForward401Schema, createInstancePortForward404Schema, createInstancePortForward409Schema, createInstancePortForward412Schema, createInstancePortForward422Schema, createInstancePortForward500Schema, createInstancePortForwardPathParamsSchema } from "./createInstancePortForwardSchema.gen";
import { deleteInstancePortForwardMutationResponseSchema, deleteInstancePortForward400Schema, deleteInstancePortForward401Schema, deleteInstancePortForward404Schema, deleteInstancePortForward409Schema, deleteInstancePortForward412Schema, deleteInstancePortForward422Schema, deleteInstancePortForward500Schema, deleteInstancePortForwardPathParamsSchema } from "./deleteInstancePortForwardSchema.gen";
import { listInstancePortForwardsQueryResponseSchema, listInstancePortForwards400Schema, listInstancePortForwards401Schema, listInstancePortForwards404Schema, listInstancePortForwards409Schema, listInstancePortForwards412Schema, listInstancePortForwards422Schema, listInstancePortForwards500Schema, listInstancePortForwardsPathParamsSchema } from "./listInstancePortForwardsSchema.gen";
import { listWorkspaceOperationsQueryResponseSchema, listWorkspaceOperations400Schema, listWorkspaceOperations401Schema, listWorkspaceOperations404Schema, listWorkspaceOperations409Schema, listWorkspaceOperations412Schema, listWorkspaceOperations422Schema, listWorkspaceOperations500Schema, listWorkspaceOperationsPathParamsSchema, listWorkspaceOperationsQueryParamsSchema } from "./listWorkspaceOperationsSchema.gen";
import { getWorkspaceOperationQueryResponseSchema, getWorkspaceOperation400Schema, getWorkspaceOperation401Schema, getWorkspaceOperation404Schema, getWorkspaceOperation409Schema, getWorkspaceOperation412Schema, getWorkspaceOperation422Schema, getWorkspaceOperation500Schema, getWorkspaceOperationPathParamsSchema } from "./getWorkspaceOperationSchema.gen";
import { createFileStorageMutationRequestSchema, createFileStorageMutationResponseSchema, createFileStorage400Schema, createFileStorage401Schema, createFileStorage404Schema, createFileStorage409Schema, createFileStorage412Schema, createFileStorage422Schema, createFileStorage500Schema, createFileStoragePathParamsSchema } from "./createFileStorageSchema.gen";
import { listWorkspaceFileStoragesQueryResponseSchema, listWorkspaceFileStorages400Schema, listWorkspaceFileStorages401Schema, listWorkspaceFileStorages404Schema, listWorkspaceFileStorages409Schema, listWorkspaceFileStorages412Schema, listWorkspaceFileStorages422Schema, listWorkspaceFileStorages500Schema, listWorkspaceFileStoragesPathParamsSchema, listWorkspaceFileStoragesQueryParamsSchema } from "./listWorkspaceFileStoragesSchema.gen";
import { getFileStorageQueryResponseSchema, getFileStorage400Schema, getFileStorage401Schema, getFileStorage404Schema, getFileStorage409Schema, getFileStorage412Schema, getFileStorage422Schema, getFileStorage500Schema, getFileStoragePathParamsSchema } from "./getFileStorageSchema.gen";
import { deleteFileStorageMutationResponseSchema, deleteFileStorage400Schema, deleteFileStorage401Schema, deleteFileStorage404Schema, deleteFileStorage409Schema, deleteFileStorage412Schema, deleteFileStorage422Schema, deleteFileStorage500Schema, deleteFileStoragePathParamsSchema } from "./deleteFileStorageSchema.gen";
import { listFilesInFileStorageQueryResponseSchema, listFilesInFileStorage400Schema, listFilesInFileStorage401Schema, listFilesInFileStorage404Schema, listFilesInFileStorage409Schema, listFilesInFileStorage412Schema, listFilesInFileStorage422Schema, listFilesInFileStorage500Schema, listFilesInFileStoragePathParamsSchema, listFilesInFileStorageQueryParamsSchema } from "./listFilesInFileStorageSchema.gen";
import { createImageMutationRequestSchema, createImageMutationResponseSchema, createImage400Schema, createImage401Schema, createImage404Schema, createImage409Schema, createImage412Schema, createImage422Schema, createImage500Schema, createImagePathParamsSchema } from "./createImageSchema.gen";
import { updateImageMutationResponseSchema, updateImage400Schema, updateImage401Schema, updateImage404Schema, updateImage409Schema, updateImage412Schema, updateImage422Schema, updateImage500Schema, updateImagePathParamsSchema } from "./updateImageSchema.gen";
import { listWorkspaceImagesQueryResponseSchema, listWorkspaceImages400Schema, listWorkspaceImages401Schema, listWorkspaceImages404Schema, listWorkspaceImages409Schema, listWorkspaceImages412Schema, listWorkspaceImages422Schema, listWorkspaceImages500Schema, listWorkspaceImagesPathParamsSchema, listWorkspaceImagesQueryParamsSchema } from "./listWorkspaceImagesSchema.gen";
import { authMutationRequestSchema, authMutationResponseSchema, auth400Schema, auth401Schema, auth404Schema, auth409Schema, auth412Schema, auth422Schema, auth500Schema } from "./authSchema.gen";
import { tokenMutationRequestSchema, tokenMutationResponseSchema, token400Schema, token401Schema, token404Schema, token409Schema, token412Schema, token422Schema, token500Schema } from "./tokenSchema.gen";

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
            409: getCurrentUser409Schema,
            412: getCurrentUser412Schema,
            422: getCurrentUser422Schema,
            500: getCurrentUser500Schema,
            default: getCurrentUserQueryResponseSchema
        },
        errors: {
            400: getCurrentUser400Schema,
            401: getCurrentUser401Schema,
            404: getCurrentUser404Schema,
            409: getCurrentUser409Schema,
            412: getCurrentUser412Schema,
            422: getCurrentUser422Schema,
            500: getCurrentUser500Schema
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
            409: listUsers409Schema,
            412: listUsers412Schema,
            422: listUsers422Schema,
            500: listUsers500Schema,
            default: listUsersQueryResponseSchema
        },
        errors: {
            400: listUsers400Schema,
            401: listUsers401Schema,
            404: listUsers404Schema,
            409: listUsers409Schema,
            412: listUsers412Schema,
            422: listUsers422Schema,
            500: listUsers500Schema
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
            409: registerUser409Schema,
            412: registerUser412Schema,
            422: registerUser422Schema,
            500: registerUser500Schema,
            default: registerUserMutationResponseSchema
        },
        errors: {
            400: registerUser400Schema,
            401: registerUser401Schema,
            404: registerUser404Schema,
            409: registerUser409Schema,
            412: registerUser412Schema,
            422: registerUser422Schema,
            500: registerUser500Schema
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
            409: getUser409Schema,
            412: getUser412Schema,
            422: getUser422Schema,
            500: getUser500Schema,
            default: getUserQueryResponseSchema
        },
        errors: {
            400: getUser400Schema,
            401: getUser401Schema,
            404: getUser404Schema,
            409: getUser409Schema,
            412: getUser412Schema,
            422: getUser422Schema,
            500: getUser500Schema
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
            409: deleteUser409Schema,
            412: deleteUser412Schema,
            422: deleteUser422Schema,
            500: deleteUser500Schema,
            default: deleteUserMutationResponseSchema
        },
        errors: {
            400: deleteUser400Schema,
            401: deleteUser401Schema,
            404: deleteUser404Schema,
            409: deleteUser409Schema,
            412: deleteUser412Schema,
            422: deleteUser422Schema,
            500: deleteUser500Schema
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
            409: sendOneTimePassword409Schema,
            412: sendOneTimePassword412Schema,
            422: sendOneTimePassword422Schema,
            500: sendOneTimePassword500Schema,
            default: sendOneTimePasswordMutationResponseSchema
        },
        errors: {
            400: sendOneTimePassword400Schema,
            401: sendOneTimePassword401Schema,
            404: sendOneTimePassword404Schema,
            409: sendOneTimePassword409Schema,
            412: sendOneTimePassword412Schema,
            422: sendOneTimePassword422Schema,
            500: sendOneTimePassword500Schema
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
            409: getUserQuota409Schema,
            412: getUserQuota412Schema,
            422: getUserQuota422Schema,
            500: getUserQuota500Schema,
            default: getUserQuotaQueryResponseSchema
        },
        errors: {
            400: getUserQuota400Schema,
            401: getUserQuota401Schema,
            404: getUserQuota404Schema,
            409: getUserQuota409Schema,
            412: getUserQuota412Schema,
            422: getUserQuota422Schema,
            500: getUserQuota500Schema
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
            409: updateUserQuota409Schema,
            412: updateUserQuota412Schema,
            422: updateUserQuota422Schema,
            500: updateUserQuota500Schema,
            default: updateUserQuotaMutationResponseSchema
        },
        errors: {
            400: updateUserQuota400Schema,
            401: updateUserQuota401Schema,
            404: updateUserQuota404Schema,
            409: updateUserQuota409Schema,
            412: updateUserQuota412Schema,
            422: updateUserQuota422Schema,
            500: updateUserQuota500Schema
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
            409: replaceUserQuota409Schema,
            412: replaceUserQuota412Schema,
            422: replaceUserQuota422Schema,
            500: replaceUserQuota500Schema,
            default: replaceUserQuotaMutationResponseSchema
        },
        errors: {
            400: replaceUserQuota400Schema,
            401: replaceUserQuota401Schema,
            404: replaceUserQuota404Schema,
            409: replaceUserQuota409Schema,
            412: replaceUserQuota412Schema,
            422: replaceUserQuota422Schema,
            500: replaceUserQuota500Schema
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
            409: createWorkspace409Schema,
            412: createWorkspace412Schema,
            422: createWorkspace422Schema,
            500: createWorkspace500Schema,
            default: createWorkspaceMutationResponseSchema
        },
        errors: {
            400: createWorkspace400Schema,
            401: createWorkspace401Schema,
            404: createWorkspace404Schema,
            409: createWorkspace409Schema,
            412: createWorkspace412Schema,
            422: createWorkspace422Schema,
            500: createWorkspace500Schema
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
            409: listUserWorkspaces409Schema,
            412: listUserWorkspaces412Schema,
            422: listUserWorkspaces422Schema,
            500: listUserWorkspaces500Schema,
            default: listUserWorkspacesQueryResponseSchema
        },
        errors: {
            400: listUserWorkspaces400Schema,
            401: listUserWorkspaces401Schema,
            404: listUserWorkspaces404Schema,
            409: listUserWorkspaces409Schema,
            412: listUserWorkspaces412Schema,
            422: listUserWorkspaces422Schema,
            500: listUserWorkspaces500Schema
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
            409: listWorkspaces409Schema,
            412: listWorkspaces412Schema,
            422: listWorkspaces422Schema,
            500: listWorkspaces500Schema,
            default: listWorkspacesQueryResponseSchema
        },
        errors: {
            400: listWorkspaces400Schema,
            401: listWorkspaces401Schema,
            404: listWorkspaces404Schema,
            409: listWorkspaces409Schema,
            412: listWorkspaces412Schema,
            422: listWorkspaces422Schema,
            500: listWorkspaces500Schema
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
            409: getWorkspace409Schema,
            412: getWorkspace412Schema,
            422: getWorkspace422Schema,
            500: getWorkspace500Schema,
            default: getWorkspaceQueryResponseSchema
        },
        errors: {
            400: getWorkspace400Schema,
            401: getWorkspace401Schema,
            404: getWorkspace404Schema,
            409: getWorkspace409Schema,
            412: getWorkspace412Schema,
            422: getWorkspace422Schema,
            500: getWorkspace500Schema
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
            409: deleteWorkspace409Schema,
            412: deleteWorkspace412Schema,
            422: deleteWorkspace422Schema,
            500: deleteWorkspace500Schema,
            default: deleteWorkspaceMutationResponseSchema
        },
        errors: {
            400: deleteWorkspace400Schema,
            401: deleteWorkspace401Schema,
            404: deleteWorkspace404Schema,
            409: deleteWorkspace409Schema,
            412: deleteWorkspace412Schema,
            422: deleteWorkspace422Schema,
            500: deleteWorkspace500Schema
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
            409: getWorkspaceQuota409Schema,
            412: getWorkspaceQuota412Schema,
            422: getWorkspaceQuota422Schema,
            500: getWorkspaceQuota500Schema,
            default: getWorkspaceQuotaQueryResponseSchema
        },
        errors: {
            400: getWorkspaceQuota400Schema,
            401: getWorkspaceQuota401Schema,
            404: getWorkspaceQuota404Schema,
            409: getWorkspaceQuota409Schema,
            412: getWorkspaceQuota412Schema,
            422: getWorkspaceQuota422Schema,
            500: getWorkspaceQuota500Schema
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
            409: updateWorkspaceQuota409Schema,
            412: updateWorkspaceQuota412Schema,
            422: updateWorkspaceQuota422Schema,
            500: updateWorkspaceQuota500Schema,
            default: updateWorkspaceQuotaMutationResponseSchema
        },
        errors: {
            400: updateWorkspaceQuota400Schema,
            401: updateWorkspaceQuota401Schema,
            404: updateWorkspaceQuota404Schema,
            409: updateWorkspaceQuota409Schema,
            412: updateWorkspaceQuota412Schema,
            422: updateWorkspaceQuota422Schema,
            500: updateWorkspaceQuota500Schema
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
            409: replaceWorkspaceQuota409Schema,
            412: replaceWorkspaceQuota412Schema,
            422: replaceWorkspaceQuota422Schema,
            500: replaceWorkspaceQuota500Schema,
            default: replaceWorkspaceQuotaMutationResponseSchema
        },
        errors: {
            400: replaceWorkspaceQuota400Schema,
            401: replaceWorkspaceQuota401Schema,
            404: replaceWorkspaceQuota404Schema,
            409: replaceWorkspaceQuota409Schema,
            412: replaceWorkspaceQuota412Schema,
            422: replaceWorkspaceQuota422Schema,
            500: replaceWorkspaceQuota500Schema
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
            409: getWorkspaceAccount409Schema,
            412: getWorkspaceAccount412Schema,
            422: getWorkspaceAccount422Schema,
            500: getWorkspaceAccount500Schema,
            default: getWorkspaceAccountQueryResponseSchema
        },
        errors: {
            400: getWorkspaceAccount400Schema,
            401: getWorkspaceAccount401Schema,
            404: getWorkspaceAccount404Schema,
            409: getWorkspaceAccount409Schema,
            412: getWorkspaceAccount412Schema,
            422: getWorkspaceAccount422Schema,
            500: getWorkspaceAccount500Schema
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
            409: rechargeWorkspaceAccount409Schema,
            412: rechargeWorkspaceAccount412Schema,
            422: rechargeWorkspaceAccount422Schema,
            500: rechargeWorkspaceAccount500Schema,
            default: rechargeWorkspaceAccountMutationResponseSchema
        },
        errors: {
            400: rechargeWorkspaceAccount400Schema,
            401: rechargeWorkspaceAccount401Schema,
            404: rechargeWorkspaceAccount404Schema,
            409: rechargeWorkspaceAccount409Schema,
            412: rechargeWorkspaceAccount412Schema,
            422: rechargeWorkspaceAccount422Schema,
            500: rechargeWorkspaceAccount500Schema
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
            409: listWorkspaceAccountRecharges409Schema,
            412: listWorkspaceAccountRecharges412Schema,
            422: listWorkspaceAccountRecharges422Schema,
            500: listWorkspaceAccountRecharges500Schema,
            default: listWorkspaceAccountRechargesQueryResponseSchema
        },
        errors: {
            400: listWorkspaceAccountRecharges400Schema,
            401: listWorkspaceAccountRecharges401Schema,
            404: listWorkspaceAccountRecharges404Schema,
            409: listWorkspaceAccountRecharges409Schema,
            412: listWorkspaceAccountRecharges412Schema,
            422: listWorkspaceAccountRecharges422Schema,
            500: listWorkspaceAccountRecharges500Schema
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
            409: getWorkspaceAccountRecharge409Schema,
            412: getWorkspaceAccountRecharge412Schema,
            422: getWorkspaceAccountRecharge422Schema,
            500: getWorkspaceAccountRecharge500Schema,
            default: getWorkspaceAccountRechargeQueryResponseSchema
        },
        errors: {
            400: getWorkspaceAccountRecharge400Schema,
            401: getWorkspaceAccountRecharge401Schema,
            404: getWorkspaceAccountRecharge404Schema,
            409: getWorkspaceAccountRecharge409Schema,
            412: getWorkspaceAccountRecharge412Schema,
            422: getWorkspaceAccountRecharge422Schema,
            500: getWorkspaceAccountRecharge500Schema
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
            409: checkWorkspaceAccountRecharge409Schema,
            412: checkWorkspaceAccountRecharge412Schema,
            422: checkWorkspaceAccountRecharge422Schema,
            500: checkWorkspaceAccountRecharge500Schema,
            default: checkWorkspaceAccountRechargeMutationResponseSchema
        },
        errors: {
            400: checkWorkspaceAccountRecharge400Schema,
            401: checkWorkspaceAccountRecharge401Schema,
            404: checkWorkspaceAccountRecharge404Schema,
            409: checkWorkspaceAccountRecharge409Schema,
            412: checkWorkspaceAccountRecharge412Schema,
            422: checkWorkspaceAccountRecharge422Schema,
            500: checkWorkspaceAccountRecharge500Schema
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
            409: listWorkspaceResourceUsageRecords409Schema,
            412: listWorkspaceResourceUsageRecords412Schema,
            422: listWorkspaceResourceUsageRecords422Schema,
            500: listWorkspaceResourceUsageRecords500Schema,
            default: listWorkspaceResourceUsageRecordsQueryResponseSchema
        },
        errors: {
            400: listWorkspaceResourceUsageRecords400Schema,
            401: listWorkspaceResourceUsageRecords401Schema,
            404: listWorkspaceResourceUsageRecords404Schema,
            409: listWorkspaceResourceUsageRecords409Schema,
            412: listWorkspaceResourceUsageRecords412Schema,
            422: listWorkspaceResourceUsageRecords422Schema,
            500: listWorkspaceResourceUsageRecords500Schema
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
            409: getWorkspaceSshKeys409Schema,
            412: getWorkspaceSshKeys412Schema,
            422: getWorkspaceSshKeys422Schema,
            500: getWorkspaceSshKeys500Schema,
            default: getWorkspaceSshKeysQueryResponseSchema
        },
        errors: {
            400: getWorkspaceSshKeys400Schema,
            401: getWorkspaceSshKeys401Schema,
            404: getWorkspaceSshKeys404Schema,
            409: getWorkspaceSshKeys409Schema,
            412: getWorkspaceSshKeys412Schema,
            422: getWorkspaceSshKeys422Schema,
            500: getWorkspaceSshKeys500Schema
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
            409: createWorkspaceSshKeys409Schema,
            412: createWorkspaceSshKeys412Schema,
            422: createWorkspaceSshKeys422Schema,
            500: createWorkspaceSshKeys500Schema,
            default: createWorkspaceSshKeysMutationResponseSchema
        },
        errors: {
            400: createWorkspaceSshKeys400Schema,
            401: createWorkspaceSshKeys401Schema,
            404: createWorkspaceSshKeys404Schema,
            409: createWorkspaceSshKeys409Schema,
            412: createWorkspaceSshKeys412Schema,
            422: createWorkspaceSshKeys422Schema,
            500: createWorkspaceSshKeys500Schema
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
            409: deleteWorkspaceSshKeys409Schema,
            412: deleteWorkspaceSshKeys412Schema,
            422: deleteWorkspaceSshKeys422Schema,
            500: deleteWorkspaceSshKeys500Schema,
            default: deleteWorkspaceSshKeysMutationResponseSchema
        },
        errors: {
            400: deleteWorkspaceSshKeys400Schema,
            401: deleteWorkspaceSshKeys401Schema,
            404: deleteWorkspaceSshKeys404Schema,
            409: deleteWorkspaceSshKeys409Schema,
            412: deleteWorkspaceSshKeys412Schema,
            422: deleteWorkspaceSshKeys422Schema,
            500: deleteWorkspaceSshKeys500Schema
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
            409: getWorkspaceMembers409Schema,
            412: getWorkspaceMembers412Schema,
            422: getWorkspaceMembers422Schema,
            500: getWorkspaceMembers500Schema,
            default: getWorkspaceMembersQueryResponseSchema
        },
        errors: {
            400: getWorkspaceMembers400Schema,
            401: getWorkspaceMembers401Schema,
            404: getWorkspaceMembers404Schema,
            409: getWorkspaceMembers409Schema,
            412: getWorkspaceMembers412Schema,
            422: getWorkspaceMembers422Schema,
            500: getWorkspaceMembers500Schema
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
            409: getWorkspaceInvitations409Schema,
            412: getWorkspaceInvitations412Schema,
            422: getWorkspaceInvitations422Schema,
            500: getWorkspaceInvitations500Schema,
            default: getWorkspaceInvitationsQueryResponseSchema
        },
        errors: {
            400: getWorkspaceInvitations400Schema,
            401: getWorkspaceInvitations401Schema,
            404: getWorkspaceInvitations404Schema,
            409: getWorkspaceInvitations409Schema,
            412: getWorkspaceInvitations412Schema,
            422: getWorkspaceInvitations422Schema,
            500: getWorkspaceInvitations500Schema
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
            409: createZone409Schema,
            412: createZone412Schema,
            422: createZone422Schema,
            500: createZone500Schema,
            default: createZoneMutationResponseSchema
        },
        errors: {
            400: createZone400Schema,
            401: createZone401Schema,
            404: createZone404Schema,
            409: createZone409Schema,
            412: createZone412Schema,
            422: createZone422Schema,
            500: createZone500Schema
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
            409: listZones409Schema,
            412: listZones412Schema,
            422: listZones422Schema,
            500: listZones500Schema,
            default: listZonesQueryResponseSchema
        },
        errors: {
            400: listZones400Schema,
            401: listZones401Schema,
            404: listZones404Schema,
            409: listZones409Schema,
            412: listZones412Schema,
            422: listZones422Schema,
            500: listZones500Schema
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
            409: listGpuTypes409Schema,
            412: listGpuTypes412Schema,
            422: listGpuTypes422Schema,
            500: listGpuTypes500Schema,
            default: listGpuTypesQueryResponseSchema
        },
        errors: {
            400: listGpuTypes400Schema,
            401: listGpuTypes401Schema,
            404: listGpuTypes404Schema,
            409: listGpuTypes409Schema,
            412: listGpuTypes412Schema,
            422: listGpuTypes422Schema,
            500: listGpuTypes500Schema
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
            409: listWorkspaceZones409Schema,
            412: listWorkspaceZones412Schema,
            422: listWorkspaceZones422Schema,
            500: listWorkspaceZones500Schema,
            default: listWorkspaceZonesQueryResponseSchema
        },
        errors: {
            400: listWorkspaceZones400Schema,
            401: listWorkspaceZones401Schema,
            404: listWorkspaceZones404Schema,
            409: listWorkspaceZones409Schema,
            412: listWorkspaceZones412Schema,
            422: listWorkspaceZones422Schema,
            500: listWorkspaceZones500Schema
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
            409: listWorkspaceZoneGpuTypes409Schema,
            412: listWorkspaceZoneGpuTypes412Schema,
            422: listWorkspaceZoneGpuTypes422Schema,
            500: listWorkspaceZoneGpuTypes500Schema,
            default: listWorkspaceZoneGpuTypesQueryResponseSchema
        },
        errors: {
            400: listWorkspaceZoneGpuTypes400Schema,
            401: listWorkspaceZoneGpuTypes401Schema,
            404: listWorkspaceZoneGpuTypes404Schema,
            409: listWorkspaceZoneGpuTypes409Schema,
            412: listWorkspaceZoneGpuTypes412Schema,
            422: listWorkspaceZoneGpuTypes422Schema,
            500: listWorkspaceZoneGpuTypes500Schema
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
            409: getWorkspaceZoneQuota409Schema,
            412: getWorkspaceZoneQuota412Schema,
            422: getWorkspaceZoneQuota422Schema,
            500: getWorkspaceZoneQuota500Schema,
            default: getWorkspaceZoneQuotaQueryResponseSchema
        },
        errors: {
            400: getWorkspaceZoneQuota400Schema,
            401: getWorkspaceZoneQuota401Schema,
            404: getWorkspaceZoneQuota404Schema,
            409: getWorkspaceZoneQuota409Schema,
            412: getWorkspaceZoneQuota412Schema,
            422: getWorkspaceZoneQuota422Schema,
            500: getWorkspaceZoneQuota500Schema
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
            409: listInstances409Schema,
            412: listInstances412Schema,
            422: listInstances422Schema,
            500: listInstances500Schema,
            default: listInstancesQueryResponseSchema
        },
        errors: {
            400: listInstances400Schema,
            401: listInstances401Schema,
            404: listInstances404Schema,
            409: listInstances409Schema,
            412: listInstances412Schema,
            422: listInstances422Schema,
            500: listInstances500Schema
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
            409: listWorkspaceInstances409Schema,
            412: listWorkspaceInstances412Schema,
            422: listWorkspaceInstances422Schema,
            500: listWorkspaceInstances500Schema,
            default: listWorkspaceInstancesQueryResponseSchema
        },
        errors: {
            400: listWorkspaceInstances400Schema,
            401: listWorkspaceInstances401Schema,
            404: listWorkspaceInstances404Schema,
            409: listWorkspaceInstances409Schema,
            412: listWorkspaceInstances412Schema,
            422: listWorkspaceInstances422Schema,
            500: listWorkspaceInstances500Schema
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
            409: getInstance409Schema,
            412: getInstance412Schema,
            422: getInstance422Schema,
            500: getInstance500Schema,
            default: getInstanceQueryResponseSchema
        },
        errors: {
            400: getInstance400Schema,
            401: getInstance401Schema,
            404: getInstance404Schema,
            409: getInstance409Schema,
            412: getInstance412Schema,
            422: getInstance422Schema,
            500: getInstance500Schema
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
            409: deleteInstance409Schema,
            412: deleteInstance412Schema,
            422: deleteInstance422Schema,
            500: deleteInstance500Schema,
            default: deleteInstanceMutationResponseSchema
        },
        errors: {
            400: deleteInstance400Schema,
            401: deleteInstance401Schema,
            404: deleteInstance404Schema,
            409: deleteInstance409Schema,
            412: deleteInstance412Schema,
            422: deleteInstance422Schema,
            500: deleteInstance500Schema
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
            409: createInstance409Schema,
            412: createInstance412Schema,
            422: createInstance422Schema,
            500: createInstance500Schema,
            default: createInstanceMutationResponseSchema
        },
        errors: {
            400: createInstance400Schema,
            401: createInstance401Schema,
            404: createInstance404Schema,
            409: createInstance409Schema,
            412: createInstance412Schema,
            422: createInstance422Schema,
            500: createInstance500Schema
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
            409: startInstance409Schema,
            412: startInstance412Schema,
            422: startInstance422Schema,
            500: startInstance500Schema,
            default: startInstanceMutationResponseSchema
        },
        errors: {
            400: startInstance400Schema,
            401: startInstance401Schema,
            404: startInstance404Schema,
            409: startInstance409Schema,
            412: startInstance412Schema,
            422: startInstance422Schema,
            500: startInstance500Schema
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
            409: stopInstance409Schema,
            412: stopInstance412Schema,
            422: stopInstance422Schema,
            500: stopInstance500Schema,
            default: stopInstanceMutationResponseSchema
        },
        errors: {
            400: stopInstance400Schema,
            401: stopInstance401Schema,
            404: stopInstance404Schema,
            409: stopInstance409Schema,
            412: stopInstance412Schema,
            422: stopInstance422Schema,
            500: stopInstance500Schema
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
            409: createInstancePortForward409Schema,
            412: createInstancePortForward412Schema,
            422: createInstancePortForward422Schema,
            500: createInstancePortForward500Schema,
            default: createInstancePortForwardMutationResponseSchema
        },
        errors: {
            400: createInstancePortForward400Schema,
            401: createInstancePortForward401Schema,
            404: createInstancePortForward404Schema,
            409: createInstancePortForward409Schema,
            412: createInstancePortForward412Schema,
            422: createInstancePortForward422Schema,
            500: createInstancePortForward500Schema
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
            409: deleteInstancePortForward409Schema,
            412: deleteInstancePortForward412Schema,
            422: deleteInstancePortForward422Schema,
            500: deleteInstancePortForward500Schema,
            default: deleteInstancePortForwardMutationResponseSchema
        },
        errors: {
            400: deleteInstancePortForward400Schema,
            401: deleteInstancePortForward401Schema,
            404: deleteInstancePortForward404Schema,
            409: deleteInstancePortForward409Schema,
            412: deleteInstancePortForward412Schema,
            422: deleteInstancePortForward422Schema,
            500: deleteInstancePortForward500Schema
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
            409: listInstancePortForwards409Schema,
            412: listInstancePortForwards412Schema,
            422: listInstancePortForwards422Schema,
            500: listInstancePortForwards500Schema,
            default: listInstancePortForwardsQueryResponseSchema
        },
        errors: {
            400: listInstancePortForwards400Schema,
            401: listInstancePortForwards401Schema,
            404: listInstancePortForwards404Schema,
            409: listInstancePortForwards409Schema,
            412: listInstancePortForwards412Schema,
            422: listInstancePortForwards422Schema,
            500: listInstancePortForwards500Schema
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
            409: listWorkspaceOperations409Schema,
            412: listWorkspaceOperations412Schema,
            422: listWorkspaceOperations422Schema,
            500: listWorkspaceOperations500Schema,
            default: listWorkspaceOperationsQueryResponseSchema
        },
        errors: {
            400: listWorkspaceOperations400Schema,
            401: listWorkspaceOperations401Schema,
            404: listWorkspaceOperations404Schema,
            409: listWorkspaceOperations409Schema,
            412: listWorkspaceOperations412Schema,
            422: listWorkspaceOperations422Schema,
            500: listWorkspaceOperations500Schema
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
            409: getWorkspaceOperation409Schema,
            412: getWorkspaceOperation412Schema,
            422: getWorkspaceOperation422Schema,
            500: getWorkspaceOperation500Schema,
            default: getWorkspaceOperationQueryResponseSchema
        },
        errors: {
            400: getWorkspaceOperation400Schema,
            401: getWorkspaceOperation401Schema,
            404: getWorkspaceOperation404Schema,
            409: getWorkspaceOperation409Schema,
            412: getWorkspaceOperation412Schema,
            422: getWorkspaceOperation422Schema,
            500: getWorkspaceOperation500Schema
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
            409: createFileStorage409Schema,
            412: createFileStorage412Schema,
            422: createFileStorage422Schema,
            500: createFileStorage500Schema,
            default: createFileStorageMutationResponseSchema
        },
        errors: {
            400: createFileStorage400Schema,
            401: createFileStorage401Schema,
            404: createFileStorage404Schema,
            409: createFileStorage409Schema,
            412: createFileStorage412Schema,
            422: createFileStorage422Schema,
            500: createFileStorage500Schema
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
            409: listWorkspaceFileStorages409Schema,
            412: listWorkspaceFileStorages412Schema,
            422: listWorkspaceFileStorages422Schema,
            500: listWorkspaceFileStorages500Schema,
            default: listWorkspaceFileStoragesQueryResponseSchema
        },
        errors: {
            400: listWorkspaceFileStorages400Schema,
            401: listWorkspaceFileStorages401Schema,
            404: listWorkspaceFileStorages404Schema,
            409: listWorkspaceFileStorages409Schema,
            412: listWorkspaceFileStorages412Schema,
            422: listWorkspaceFileStorages422Schema,
            500: listWorkspaceFileStorages500Schema
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
            409: getFileStorage409Schema,
            412: getFileStorage412Schema,
            422: getFileStorage422Schema,
            500: getFileStorage500Schema,
            default: getFileStorageQueryResponseSchema
        },
        errors: {
            400: getFileStorage400Schema,
            401: getFileStorage401Schema,
            404: getFileStorage404Schema,
            409: getFileStorage409Schema,
            412: getFileStorage412Schema,
            422: getFileStorage422Schema,
            500: getFileStorage500Schema
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
            409: deleteFileStorage409Schema,
            412: deleteFileStorage412Schema,
            422: deleteFileStorage422Schema,
            500: deleteFileStorage500Schema,
            default: deleteFileStorageMutationResponseSchema
        },
        errors: {
            400: deleteFileStorage400Schema,
            401: deleteFileStorage401Schema,
            404: deleteFileStorage404Schema,
            409: deleteFileStorage409Schema,
            412: deleteFileStorage412Schema,
            422: deleteFileStorage422Schema,
            500: deleteFileStorage500Schema
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
            409: listFilesInFileStorage409Schema,
            412: listFilesInFileStorage412Schema,
            422: listFilesInFileStorage422Schema,
            500: listFilesInFileStorage500Schema,
            default: listFilesInFileStorageQueryResponseSchema
        },
        errors: {
            400: listFilesInFileStorage400Schema,
            401: listFilesInFileStorage401Schema,
            404: listFilesInFileStorage404Schema,
            409: listFilesInFileStorage409Schema,
            412: listFilesInFileStorage412Schema,
            422: listFilesInFileStorage422Schema,
            500: listFilesInFileStorage500Schema
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
            409: createImage409Schema,
            412: createImage412Schema,
            422: createImage422Schema,
            500: createImage500Schema,
            default: createImageMutationResponseSchema
        },
        errors: {
            400: createImage400Schema,
            401: createImage401Schema,
            404: createImage404Schema,
            409: createImage409Schema,
            412: createImage412Schema,
            422: createImage422Schema,
            500: createImage500Schema
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
            409: updateImage409Schema,
            412: updateImage412Schema,
            422: updateImage422Schema,
            500: updateImage500Schema,
            default: updateImageMutationResponseSchema
        },
        errors: {
            400: updateImage400Schema,
            401: updateImage401Schema,
            404: updateImage404Schema,
            409: updateImage409Schema,
            412: updateImage412Schema,
            422: updateImage422Schema,
            500: updateImage500Schema
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
            409: listWorkspaceImages409Schema,
            412: listWorkspaceImages412Schema,
            422: listWorkspaceImages422Schema,
            500: listWorkspaceImages500Schema,
            default: listWorkspaceImagesQueryResponseSchema
        },
        errors: {
            400: listWorkspaceImages400Schema,
            401: listWorkspaceImages401Schema,
            404: listWorkspaceImages404Schema,
            409: listWorkspaceImages409Schema,
            412: listWorkspaceImages412Schema,
            422: listWorkspaceImages422Schema,
            500: listWorkspaceImages500Schema
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
            409: auth409Schema,
            412: auth412Schema,
            422: auth422Schema,
            500: auth500Schema,
            default: authMutationResponseSchema
        },
        errors: {
            400: auth400Schema,
            401: auth401Schema,
            404: auth404Schema,
            409: auth409Schema,
            412: auth412Schema,
            422: auth422Schema,
            500: auth500Schema
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
            409: token409Schema,
            412: token412Schema,
            422: token422Schema,
            500: token500Schema,
            default: tokenMutationResponseSchema
        },
        errors: {
            400: token400Schema,
            401: token401Schema,
            404: token404Schema,
            409: token409Schema,
            412: token412Schema,
            422: token422Schema,
            500: token500Schema
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
