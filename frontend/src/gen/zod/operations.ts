import { getCurrentUserQueryResponseSchema, getCurrentUser422Schema } from "./getCurrentUserSchema.gen";
import { listUsersQueryResponseSchema, listUsers422Schema, listUsersQueryParamsSchema } from "./listUsersSchema.gen";
import { registerUserMutationRequestSchema, registerUserMutationResponseSchema, registerUser422Schema } from "./registerUserSchema.gen";
import { getUserQueryResponseSchema, getUser422Schema, getUserPathParamsSchema } from "./getUserSchema.gen";
import { deleteUserMutationResponseSchema, deleteUser422Schema, deleteUserPathParamsSchema } from "./deleteUserSchema.gen";
import { sendOneTimePasswordMutationRequestSchema, sendOneTimePasswordMutationResponseSchema, sendOneTimePassword422Schema } from "./sendOneTimePasswordSchema.gen";
import { getUserQuotaQueryResponseSchema, getUserQuota422Schema, getUserQuotaPathParamsSchema } from "./getUserQuotaSchema.gen";
import { updateUserQuotaMutationResponseSchema, updateUserQuota422Schema, updateUserQuotaPathParamsSchema } from "./updateUserQuotaSchema.gen";
import { replaceUserQuotaMutationResponseSchema, replaceUserQuota422Schema, replaceUserQuotaPathParamsSchema } from "./replaceUserQuotaSchema.gen";
import { createWorkspaceMutationRequestSchema, createWorkspaceMutationResponseSchema, createWorkspace422Schema, createWorkspacePathParamsSchema } from "./createWorkspaceSchema.gen";
import { listUserWorkspacesQueryResponseSchema, listUserWorkspaces422Schema, listUserWorkspacesPathParamsSchema, listUserWorkspacesQueryParamsSchema } from "./listUserWorkspacesSchema.gen";
import { listWorkspacesQueryResponseSchema, listWorkspaces422Schema, listWorkspacesQueryParamsSchema } from "./listWorkspacesSchema.gen";
import { getWorkspaceQueryResponseSchema, getWorkspace422Schema, getWorkspacePathParamsSchema } from "./getWorkspaceSchema.gen";
import { deleteWorkspaceMutationResponseSchema, deleteWorkspace422Schema, deleteWorkspacePathParamsSchema } from "./deleteWorkspaceSchema.gen";
import { getWorkspaceQuotaQueryResponseSchema, getWorkspaceQuota422Schema, getWorkspaceQuotaPathParamsSchema } from "./getWorkspaceQuotaSchema.gen";
import { updateWorkspaceQuotaMutationRequestSchema, updateWorkspaceQuotaMutationResponseSchema, updateWorkspaceQuota422Schema, updateWorkspaceQuotaPathParamsSchema } from "./updateWorkspaceQuotaSchema.gen";
import { replaceWorkspaceQuotaMutationRequestSchema, replaceWorkspaceQuotaMutationResponseSchema, replaceWorkspaceQuota422Schema, replaceWorkspaceQuotaPathParamsSchema } from "./replaceWorkspaceQuotaSchema.gen";
import { getWorkspaceAccountQueryResponseSchema, getWorkspaceAccount422Schema, getWorkspaceAccountPathParamsSchema } from "./getWorkspaceAccountSchema.gen";
import { rechargeWorkspaceAccountMutationRequestSchema, rechargeWorkspaceAccountMutationResponseSchema, rechargeWorkspaceAccount422Schema, rechargeWorkspaceAccountPathParamsSchema } from "./rechargeWorkspaceAccountSchema.gen";
import { rechargeWorkspaceAccountByAdminMutationRequestSchema, rechargeWorkspaceAccountByAdminMutationResponseSchema, rechargeWorkspaceAccountByAdmin422Schema, rechargeWorkspaceAccountByAdminPathParamsSchema } from "./rechargeWorkspaceAccountByAdminSchema.gen";
import { listWorkspaceAccountRechargesQueryResponseSchema, listWorkspaceAccountRecharges422Schema, listWorkspaceAccountRechargesPathParamsSchema, listWorkspaceAccountRechargesQueryParamsSchema } from "./listWorkspaceAccountRechargesSchema.gen";
import { getWorkspaceAccountRechargeQueryResponseSchema, getWorkspaceAccountRecharge422Schema, getWorkspaceAccountRechargePathParamsSchema } from "./getWorkspaceAccountRechargeSchema.gen";
import { checkWorkspaceAccountRechargeMutationResponseSchema, checkWorkspaceAccountRecharge422Schema, checkWorkspaceAccountRechargePathParamsSchema } from "./checkWorkspaceAccountRechargeSchema.gen";
import { listWorkspaceBillingRecordsQueryResponseSchema, listWorkspaceBillingRecords422Schema, listWorkspaceBillingRecordsPathParamsSchema, listWorkspaceBillingRecordsQueryParamsSchema } from "./listWorkspaceBillingRecordsSchema.gen";
import { listWorkspaceExpensesQueryResponseSchema, listWorkspaceExpenses422Schema, listWorkspaceExpensesPathParamsSchema, listWorkspaceExpensesQueryParamsSchema } from "./listWorkspaceExpensesSchema.gen";
import { listWorkspaceSshKeysQueryResponseSchema, listWorkspaceSshKeys422Schema, listWorkspaceSshKeysPathParamsSchema } from "./listWorkspaceSshKeysSchema.gen";
import { createWorkspaceSshKeysMutationRequestSchema, createWorkspaceSshKeysMutationResponseSchema, createWorkspaceSshKeys422Schema, createWorkspaceSshKeysPathParamsSchema } from "./createWorkspaceSshKeysSchema.gen";
import { getSshKeyQueryResponseSchema, getSshKey422Schema, getSshKeyPathParamsSchema } from "./getSshKeySchema.gen";
import { deleteWorkspaceSshKeysMutationResponseSchema, deleteWorkspaceSshKeys422Schema, deleteWorkspaceSshKeysPathParamsSchema } from "./deleteWorkspaceSshKeysSchema.gen";
import { getWorkspaceMembersQueryResponseSchema, getWorkspaceMembers422Schema, getWorkspaceMembersPathParamsSchema } from "./getWorkspaceMembersSchema.gen";
import { getWorkspaceInvitationsQueryResponseSchema, getWorkspaceInvitations422Schema, getWorkspaceInvitationsPathParamsSchema } from "./getWorkspaceInvitationsSchema.gen";
import { getWorkspaceAuditLogsQueryResponseSchema, getWorkspaceAuditLogs422Schema, getWorkspaceAuditLogsPathParamsSchema, getWorkspaceAuditLogsQueryParamsSchema } from "./getWorkspaceAuditLogsSchema.gen";
import { listWorkspaceCouponsQueryResponseSchema, listWorkspaceCoupons422Schema, listWorkspaceCouponsPathParamsSchema, listWorkspaceCouponsQueryParamsSchema } from "./listWorkspaceCouponsSchema.gen";
import { getInstanceQueryResponseSchema, getInstance422Schema, getInstancePathParamsSchema } from "./getInstanceSchema.gen";
import { deleteInstanceMutationResponseSchema, deleteInstance422Schema, deleteInstancePathParamsSchema, deleteInstanceQueryParamsSchema } from "./deleteInstanceSchema.gen";
import { createZoneMutationRequestSchema, createZoneMutationResponseSchema, createZone422Schema } from "./createZoneSchema.gen";
import { listZonesQueryResponseSchema, listZones422Schema, listZonesQueryParamsSchema } from "./listZonesSchema.gen";
import { listGpuTypesQueryResponseSchema, listGpuTypes422Schema, listGpuTypesQueryParamsSchema } from "./listGpuTypesSchema.gen";
import { listWorkspaceZonesQueryResponseSchema, listWorkspaceZones422Schema, listWorkspaceZonesPathParamsSchema, listWorkspaceZonesQueryParamsSchema } from "./listWorkspaceZonesSchema.gen";
import { listWorkspaceGpuTypesQueryResponseSchema, listWorkspaceGpuTypes422Schema, listWorkspaceGpuTypesPathParamsSchema, listWorkspaceGpuTypesQueryParamsSchema } from "./listWorkspaceGpuTypesSchema.gen";
import { getWorkspaceZoneQuotaQueryResponseSchema, getWorkspaceZoneQuota422Schema, getWorkspaceZoneQuotaPathParamsSchema } from "./getWorkspaceZoneQuotaSchema.gen";
import { listInstancesQueryResponseSchema, listInstances422Schema, listInstancesQueryParamsSchema } from "./listInstancesSchema.gen";
import { listWorkspaceInstancesQueryResponseSchema, listWorkspaceInstances422Schema, listWorkspaceInstancesPathParamsSchema, listWorkspaceInstancesQueryParamsSchema } from "./listWorkspaceInstancesSchema.gen";
import { createInstanceMutationRequestSchema, createInstanceMutationResponseSchema, createInstance422Schema, createInstancePathParamsSchema } from "./createInstanceSchema.gen";
import { startInstanceMutationResponseSchema, startInstance422Schema, startInstancePathParamsSchema } from "./startInstanceSchema.gen";
import { stopInstanceMutationResponseSchema, stopInstance422Schema, stopInstancePathParamsSchema } from "./stopInstanceSchema.gen";
import { createInstancePortForwardMutationRequestSchema, createInstancePortForwardMutationResponseSchema, createInstancePortForward422Schema, createInstancePortForwardPathParamsSchema } from "./createInstancePortForwardSchema.gen";
import { deleteInstancePortForwardMutationResponseSchema, deleteInstancePortForward422Schema, deleteInstancePortForwardPathParamsSchema } from "./deleteInstancePortForwardSchema.gen";
import { listInstancePortForwardsQueryResponseSchema, listInstancePortForwards422Schema, listInstancePortForwardsPathParamsSchema } from "./listInstancePortForwardsSchema.gen";
import { listWorkspaceOperationsQueryResponseSchema, listWorkspaceOperations422Schema, listWorkspaceOperationsPathParamsSchema, listWorkspaceOperationsQueryParamsSchema } from "./listWorkspaceOperationsSchema.gen";
import { getWorkspaceOperationQueryResponseSchema, getWorkspaceOperation422Schema, getWorkspaceOperationPathParamsSchema } from "./getWorkspaceOperationSchema.gen";
import { createFileStorageMutationRequestSchema, createFileStorageMutationResponseSchema, createFileStorage422Schema, createFileStoragePathParamsSchema } from "./createFileStorageSchema.gen";
import { listWorkspaceFileStoragesQueryResponseSchema, listWorkspaceFileStorages422Schema, listWorkspaceFileStoragesPathParamsSchema, listWorkspaceFileStoragesQueryParamsSchema } from "./listWorkspaceFileStoragesSchema.gen";
import { getFileStorageQueryResponseSchema, getFileStorage422Schema, getFileStoragePathParamsSchema } from "./getFileStorageSchema.gen";
import { deleteFileStorageMutationResponseSchema, deleteFileStorage422Schema, deleteFileStoragePathParamsSchema } from "./deleteFileStorageSchema.gen";
import { listFilesInFileStorageQueryResponseSchema, listFilesInFileStorage422Schema, listFilesInFileStoragePathParamsSchema, listFilesInFileStorageQueryParamsSchema } from "./listFilesInFileStorageSchema.gen";
import { createImageMutationRequestSchema, createImageMutationResponseSchema, createImage422Schema, createImagePathParamsSchema } from "./createImageSchema.gen";
import { updateImageMutationResponseSchema, updateImage422Schema, updateImagePathParamsSchema } from "./updateImageSchema.gen";
import { listWorkspaceImagesQueryResponseSchema, listWorkspaceImages422Schema, listWorkspaceImagesPathParamsSchema, listWorkspaceImagesQueryParamsSchema } from "./listWorkspaceImagesSchema.gen";
import { calculateInstanceCostMutationRequestSchema, calculateInstanceCostMutationResponseSchema, calculateInstanceCost422Schema, calculateInstanceCostPathParamsSchema } from "./calculateInstanceCostSchema.gen";
import { listAcceleratorTypesQueryResponseSchema, listAcceleratorTypes422Schema, listAcceleratorTypesQueryParamsSchema } from "./listAcceleratorTypesSchema.gen";
import { authMutationRequestSchema, authMutationResponseSchema, auth422Schema } from "./authSchema.gen";
import { tokenMutationRequestSchema, tokenMutationResponseSchema, token422Schema } from "./tokenSchema.gen";

 export const operations = { "get_current_user": {
        request: undefined,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: getCurrentUserQueryResponseSchema,
            422: getCurrentUser422Schema,
            default: getCurrentUserQueryResponseSchema
        },
        errors: {
            422: getCurrentUser422Schema
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
            422: listUsers422Schema,
            default: listUsersQueryResponseSchema
        },
        errors: {
            422: listUsers422Schema
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
            422: registerUser422Schema,
            default: registerUserMutationResponseSchema
        },
        errors: {
            422: registerUser422Schema
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
            422: getUser422Schema,
            default: getUserQueryResponseSchema
        },
        errors: {
            422: getUser422Schema
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
            422: deleteUser422Schema,
            default: deleteUserMutationResponseSchema
        },
        errors: {
            422: deleteUser422Schema
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
            422: sendOneTimePassword422Schema,
            default: sendOneTimePasswordMutationResponseSchema
        },
        errors: {
            422: sendOneTimePassword422Schema
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
            422: getUserQuota422Schema,
            default: getUserQuotaQueryResponseSchema
        },
        errors: {
            422: getUserQuota422Schema
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
            422: updateUserQuota422Schema,
            default: updateUserQuotaMutationResponseSchema
        },
        errors: {
            422: updateUserQuota422Schema
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
            422: replaceUserQuota422Schema,
            default: replaceUserQuotaMutationResponseSchema
        },
        errors: {
            422: replaceUserQuota422Schema
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
            422: createWorkspace422Schema,
            default: createWorkspaceMutationResponseSchema
        },
        errors: {
            422: createWorkspace422Schema
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
            422: listUserWorkspaces422Schema,
            default: listUserWorkspacesQueryResponseSchema
        },
        errors: {
            422: listUserWorkspaces422Schema
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
            422: listWorkspaces422Schema,
            default: listWorkspacesQueryResponseSchema
        },
        errors: {
            422: listWorkspaces422Schema
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
            422: getWorkspace422Schema,
            default: getWorkspaceQueryResponseSchema
        },
        errors: {
            422: getWorkspace422Schema
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
            422: deleteWorkspace422Schema,
            default: deleteWorkspaceMutationResponseSchema
        },
        errors: {
            422: deleteWorkspace422Schema
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
            422: getWorkspaceQuota422Schema,
            default: getWorkspaceQuotaQueryResponseSchema
        },
        errors: {
            422: getWorkspaceQuota422Schema
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
            422: updateWorkspaceQuota422Schema,
            default: updateWorkspaceQuotaMutationResponseSchema
        },
        errors: {
            422: updateWorkspaceQuota422Schema
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
            422: replaceWorkspaceQuota422Schema,
            default: replaceWorkspaceQuotaMutationResponseSchema
        },
        errors: {
            422: replaceWorkspaceQuota422Schema
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
            422: getWorkspaceAccount422Schema,
            default: getWorkspaceAccountQueryResponseSchema
        },
        errors: {
            422: getWorkspaceAccount422Schema
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
            422: rechargeWorkspaceAccount422Schema,
            default: rechargeWorkspaceAccountMutationResponseSchema
        },
        errors: {
            422: rechargeWorkspaceAccount422Schema
        }
    }, "recharge_workspace_account_by_admin": {
        request: rechargeWorkspaceAccountByAdminMutationRequestSchema,
        parameters: {
            path: rechargeWorkspaceAccountByAdminPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            201: rechargeWorkspaceAccountByAdminMutationResponseSchema,
            422: rechargeWorkspaceAccountByAdmin422Schema,
            default: rechargeWorkspaceAccountByAdminMutationResponseSchema
        },
        errors: {
            422: rechargeWorkspaceAccountByAdmin422Schema
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
            422: listWorkspaceAccountRecharges422Schema,
            default: listWorkspaceAccountRechargesQueryResponseSchema
        },
        errors: {
            422: listWorkspaceAccountRecharges422Schema
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
            422: getWorkspaceAccountRecharge422Schema,
            default: getWorkspaceAccountRechargeQueryResponseSchema
        },
        errors: {
            422: getWorkspaceAccountRecharge422Schema
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
            422: checkWorkspaceAccountRecharge422Schema,
            default: checkWorkspaceAccountRechargeMutationResponseSchema
        },
        errors: {
            422: checkWorkspaceAccountRecharge422Schema
        }
    }, "list_workspace_billing_records": {
        request: undefined,
        parameters: {
            path: listWorkspaceBillingRecordsPathParamsSchema,
            query: listWorkspaceBillingRecordsQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listWorkspaceBillingRecordsQueryResponseSchema,
            422: listWorkspaceBillingRecords422Schema,
            default: listWorkspaceBillingRecordsQueryResponseSchema
        },
        errors: {
            422: listWorkspaceBillingRecords422Schema
        }
    }, "list_workspace_expenses": {
        request: undefined,
        parameters: {
            path: listWorkspaceExpensesPathParamsSchema,
            query: listWorkspaceExpensesQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listWorkspaceExpensesQueryResponseSchema,
            422: listWorkspaceExpenses422Schema,
            default: listWorkspaceExpensesQueryResponseSchema
        },
        errors: {
            422: listWorkspaceExpenses422Schema
        }
    }, "list_workspace_ssh_keys": {
        request: undefined,
        parameters: {
            path: listWorkspaceSshKeysPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: listWorkspaceSshKeysQueryResponseSchema,
            422: listWorkspaceSshKeys422Schema,
            default: listWorkspaceSshKeysQueryResponseSchema
        },
        errors: {
            422: listWorkspaceSshKeys422Schema
        }
    }, "create_workspace_ssh_keys": {
        request: createWorkspaceSshKeysMutationRequestSchema,
        parameters: {
            path: createWorkspaceSshKeysPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            201: createWorkspaceSshKeysMutationResponseSchema,
            422: createWorkspaceSshKeys422Schema,
            default: createWorkspaceSshKeysMutationResponseSchema
        },
        errors: {
            422: createWorkspaceSshKeys422Schema
        }
    }, "get_ssh_key": {
        request: undefined,
        parameters: {
            path: getSshKeyPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: getSshKeyQueryResponseSchema,
            422: getSshKey422Schema,
            default: getSshKeyQueryResponseSchema
        },
        errors: {
            422: getSshKey422Schema
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
            422: deleteWorkspaceSshKeys422Schema,
            default: deleteWorkspaceSshKeysMutationResponseSchema
        },
        errors: {
            422: deleteWorkspaceSshKeys422Schema
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
            422: getWorkspaceMembers422Schema,
            default: getWorkspaceMembersQueryResponseSchema
        },
        errors: {
            422: getWorkspaceMembers422Schema
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
            422: getWorkspaceInvitations422Schema,
            default: getWorkspaceInvitationsQueryResponseSchema
        },
        errors: {
            422: getWorkspaceInvitations422Schema
        }
    }, "get_workspace_audit_logs": {
        request: undefined,
        parameters: {
            path: getWorkspaceAuditLogsPathParamsSchema,
            query: getWorkspaceAuditLogsQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: getWorkspaceAuditLogsQueryResponseSchema,
            422: getWorkspaceAuditLogs422Schema,
            default: getWorkspaceAuditLogsQueryResponseSchema
        },
        errors: {
            422: getWorkspaceAuditLogs422Schema
        }
    }, "list_workspace_coupons": {
        request: undefined,
        parameters: {
            path: listWorkspaceCouponsPathParamsSchema,
            query: listWorkspaceCouponsQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listWorkspaceCouponsQueryResponseSchema,
            422: listWorkspaceCoupons422Schema,
            default: listWorkspaceCouponsQueryResponseSchema
        },
        errors: {
            422: listWorkspaceCoupons422Schema
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
            422: getInstance422Schema,
            default: getInstanceQueryResponseSchema
        },
        errors: {
            422: getInstance422Schema
        }
    }, "delete_instance": {
        request: undefined,
        parameters: {
            path: deleteInstancePathParamsSchema,
            query: deleteInstanceQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: deleteInstanceMutationResponseSchema,
            422: deleteInstance422Schema,
            default: deleteInstanceMutationResponseSchema
        },
        errors: {
            422: deleteInstance422Schema
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
            422: createZone422Schema,
            default: createZoneMutationResponseSchema
        },
        errors: {
            422: createZone422Schema
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
            422: listZones422Schema,
            default: listZonesQueryResponseSchema
        },
        errors: {
            422: listZones422Schema
        }
    }, "list_gpu_types": {
        request: undefined,
        parameters: {
            path: undefined,
            query: listGpuTypesQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listGpuTypesQueryResponseSchema,
            422: listGpuTypes422Schema,
            default: listGpuTypesQueryResponseSchema
        },
        errors: {
            422: listGpuTypes422Schema
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
            422: listWorkspaceZones422Schema,
            default: listWorkspaceZonesQueryResponseSchema
        },
        errors: {
            422: listWorkspaceZones422Schema
        }
    }, "list_workspace_gpu_types": {
        request: undefined,
        parameters: {
            path: listWorkspaceGpuTypesPathParamsSchema,
            query: listWorkspaceGpuTypesQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listWorkspaceGpuTypesQueryResponseSchema,
            422: listWorkspaceGpuTypes422Schema,
            default: listWorkspaceGpuTypesQueryResponseSchema
        },
        errors: {
            422: listWorkspaceGpuTypes422Schema
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
            422: getWorkspaceZoneQuota422Schema,
            default: getWorkspaceZoneQuotaQueryResponseSchema
        },
        errors: {
            422: getWorkspaceZoneQuota422Schema
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
            422: listInstances422Schema,
            default: listInstancesQueryResponseSchema
        },
        errors: {
            422: listInstances422Schema
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
            422: listWorkspaceInstances422Schema,
            default: listWorkspaceInstancesQueryResponseSchema
        },
        errors: {
            422: listWorkspaceInstances422Schema
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
            422: createInstance422Schema,
            default: createInstanceMutationResponseSchema
        },
        errors: {
            422: createInstance422Schema
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
            422: startInstance422Schema,
            default: startInstanceMutationResponseSchema
        },
        errors: {
            422: startInstance422Schema
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
            422: stopInstance422Schema,
            default: stopInstanceMutationResponseSchema
        },
        errors: {
            422: stopInstance422Schema
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
            422: createInstancePortForward422Schema,
            default: createInstancePortForwardMutationResponseSchema
        },
        errors: {
            422: createInstancePortForward422Schema
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
            422: deleteInstancePortForward422Schema,
            default: deleteInstancePortForwardMutationResponseSchema
        },
        errors: {
            422: deleteInstancePortForward422Schema
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
            422: listInstancePortForwards422Schema,
            default: listInstancePortForwardsQueryResponseSchema
        },
        errors: {
            422: listInstancePortForwards422Schema
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
            422: listWorkspaceOperations422Schema,
            default: listWorkspaceOperationsQueryResponseSchema
        },
        errors: {
            422: listWorkspaceOperations422Schema
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
            422: getWorkspaceOperation422Schema,
            default: getWorkspaceOperationQueryResponseSchema
        },
        errors: {
            422: getWorkspaceOperation422Schema
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
            422: createFileStorage422Schema,
            default: createFileStorageMutationResponseSchema
        },
        errors: {
            422: createFileStorage422Schema
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
            422: listWorkspaceFileStorages422Schema,
            default: listWorkspaceFileStoragesQueryResponseSchema
        },
        errors: {
            422: listWorkspaceFileStorages422Schema
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
            422: getFileStorage422Schema,
            default: getFileStorageQueryResponseSchema
        },
        errors: {
            422: getFileStorage422Schema
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
            422: deleteFileStorage422Schema,
            default: deleteFileStorageMutationResponseSchema
        },
        errors: {
            422: deleteFileStorage422Schema
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
            422: listFilesInFileStorage422Schema,
            default: listFilesInFileStorageQueryResponseSchema
        },
        errors: {
            422: listFilesInFileStorage422Schema
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
            422: createImage422Schema,
            default: createImageMutationResponseSchema
        },
        errors: {
            422: createImage422Schema
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
            422: updateImage422Schema,
            default: updateImageMutationResponseSchema
        },
        errors: {
            422: updateImage422Schema
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
            422: listWorkspaceImages422Schema,
            default: listWorkspaceImagesQueryResponseSchema
        },
        errors: {
            422: listWorkspaceImages422Schema
        }
    }, "calculate_instance_cost": {
        request: calculateInstanceCostMutationRequestSchema,
        parameters: {
            path: calculateInstanceCostPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: calculateInstanceCostMutationResponseSchema,
            422: calculateInstanceCost422Schema,
            default: calculateInstanceCostMutationResponseSchema
        },
        errors: {
            422: calculateInstanceCost422Schema
        }
    }, "list_accelerator_types": {
        request: undefined,
        parameters: {
            path: undefined,
            query: listAcceleratorTypesQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: listAcceleratorTypesQueryResponseSchema,
            422: listAcceleratorTypes422Schema,
            default: listAcceleratorTypesQueryResponseSchema
        },
        errors: {
            422: listAcceleratorTypes422Schema
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
            422: auth422Schema,
            default: authMutationResponseSchema
        },
        errors: {
            422: auth422Schema
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
            422: token422Schema,
            default: tokenMutationResponseSchema
        },
        errors: {
            422: token422Schema
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
    }, "/apis/workspace/v1/workspaces/{workspace}/account/recharge_by_admin": {
        post: operations["recharge_workspace_account_by_admin"]
    }, "/apis/workspace/v1/workspaces/{workspace}/account/recharges": {
        get: operations["list_workspace_account_recharges"]
    }, "/apis/workspace/v1/workspaces/{workspace}/account/recharges/{recharge_id}": {
        get: operations["get_workspace_account_recharge"]
    }, "/apis/workspace/v1/recharges/{recharge_id}/check": {
        post: operations["check_workspace_account_recharge"]
    }, "/apis/workspace/v1/workspaces/{workspace}/billing_records": {
        get: operations["list_workspace_billing_records"]
    }, "/apis/workspace/v1/workspaces/{workspace}/expenses": {
        get: operations["list_workspace_expenses"]
    }, "/apis/workspace/v1/workspaces/{workspace}/ssh_keys": {
        get: operations["list_workspace_ssh_keys"],
        post: operations["create_workspace_ssh_keys"]
    }, "/apis/workspace/v1/workspaces/{workspace}/ssh_keys/{name}": {
        get: operations["get_ssh_key"],
        delete: operations["delete_workspace_ssh_keys"]
    }, "/apis/workspace/v1/workspaces/{workspace}/members": {
        get: operations["get_workspace_members"]
    }, "/apis/workspace/v1/workspaces/{workspace}/invitations": {
        get: operations["get_workspace_invitations"]
    }, "/apis/workspace/v1/workspaces/{workspace}/audit_logs": {
        get: operations["get_workspace_audit_logs"]
    }, "/apis/workspace/v1/workspaces/{workspace}/coupons": {
        get: operations["list_workspace_coupons"]
    }, "/apis/compute/v1/workspaces/{workspace}/instances/{name}": {
        get: operations["get_instance"],
        delete: operations["delete_instance"]
    }, "/apis/compute/v1/zones/": {
        post: operations["create_zone"]
    }, "/apis/compute/v1/zones": {
        get: operations["list_zones"]
    }, "/apis/compute/v1/gpu_types": {
        get: operations["list_gpu_types"]
    }, "/apis/compute/v1/workspaces/{workspace}/zones": {
        get: operations["list_workspace_zones"]
    }, "/apis/compute/v1/workspaces/{workspace}/gpu_types": {
        get: operations["list_workspace_gpu_types"]
    }, "/apis/compute/v1/workspaces/{workspace}/zones/{zone}/quota": {
        get: operations["get_workspace_zone_quota"]
    }, "/apis/compute/v1/instances": {
        get: operations["list_instances"]
    }, "/apis/compute/v1/workspaces/{workspace}/instances": {
        get: operations["list_workspace_instances"],
        post: operations["create_instance"]
    }, "/apis/compute/v1/workspaces/{workspace}/instances/{name}/start": {
        post: operations["start_instance"]
    }, "/apis/compute/v1/workspaces/{workspace}/instances/{name}/stop": {
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
    }, "/apis/compute/v1/workspaces/{workspace}/instances/calculate-cost": {
        post: operations["calculate_instance_cost"]
    }, "/apis/compute/v1/accelerator_types": {
        get: operations["list_accelerator_types"]
    }, "/apis/oidc/v1/auth": {
        post: operations["auth"]
    }, "/apis/oidc/v1/token": {
        post: operations["token"]
    } } as const;