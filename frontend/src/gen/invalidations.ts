import type { GetCurrentUserQueryResponseType, ListUsersQueryResponseType, RegisterUserMutationResponseType, RegisterUserMutationRequestType, GetUserQueryResponseType, DeleteUserMutationResponseType, SendOneTimePasswordMutationResponseType, SendOneTimePasswordMutationRequestType, GetUserQuotaQueryResponseType, UpdateUserQuotaMutationResponseType, ReplaceUserQuotaMutationResponseType, CreateWorkspaceMutationResponseType, CreateWorkspaceMutationRequestType, ListUserWorkspacesQueryResponseType, ListWorkspacesQueryResponseType, GetWorkspaceQueryResponseType, DeleteWorkspaceMutationResponseType, GetWorkspaceQuotaQueryResponseType, UpdateWorkspaceQuotaMutationResponseType, UpdateWorkspaceQuotaMutationRequestType, ReplaceWorkspaceQuotaMutationResponseType, ReplaceWorkspaceQuotaMutationRequestType, GetWorkspaceAccountQueryResponseType, GetWorkspaceSshKeysQueryResponseType, CreateWorkspaceSshKeysMutationResponseType, DeleteWorkspaceSshKeysMutationResponseType, GetWorkspaceMembersQueryResponseType, GetWorkspaceInvitationsQueryResponseType, CreateZoneMutationResponseType, CreateZoneMutationRequestType, ListZonesQueryResponseType, ListGpuTypesQueryResponseType, ListWorkspaceZonesQueryResponseType, WatchWorkspaceZonesQueryResponseType, ListWorkspaceZoneGpuTypesQueryResponseType, GetWorkspaceZoneQuotaQueryResponseType, ListInstancesQueryResponseType, ListWorkspaceInstancesQueryResponseType, GetInstanceQueryResponseType, DeleteInstanceMutationResponseType, CreateInstanceMutationResponseType, CreateInstanceMutationRequestType, StartInstanceMutationResponseType, StopInstanceMutationResponseType, CreateInstancePortForwardMutationResponseType, CreateInstancePortForwardMutationRequestType, DeleteInstancePortForwardMutationResponseType, ListInstancePortForwardsQueryResponseType, ListWorkspaceOperationsQueryResponseType, GetWorkspaceOperationQueryResponseType, WatchWorkspaceOperationsQueryResponseType, WatchWorkspaceOperationQueryResponseType, CreateFileStorageMutationResponseType, CreateFileStorageMutationRequestType, ListWorkspaceFileStoragesQueryResponseType, GetFileStorageQueryResponseType, DeleteFileStorageMutationResponseType, ListFilesInFileStorageQueryResponseType, CreateImageMutationResponseType, CreateImageMutationRequestType, UpdateImageMutationResponseType, ListWorkspaceImagesQueryResponseType, TokenMutationResponseType, TokenMutationRequestType } from "./index";
import type { UseMutationOptions } from "@tanstack/react-query";

 export type Invalidations = {
    "useGetCurrentUserHook": UseMutationOptions<GetCurrentUserQueryResponseType, unknown, void>["onSuccess"];
    "useListUsersHook": UseMutationOptions<ListUsersQueryResponseType, unknown, void>["onSuccess"];
    "useRegisterUserHook": UseMutationOptions<RegisterUserMutationResponseType, unknown, RegisterUserMutationRequestType>["onSuccess"];
    "useGetUserHook": UseMutationOptions<GetUserQueryResponseType, unknown, void>["onSuccess"];
    "useDeleteUserHook": UseMutationOptions<DeleteUserMutationResponseType, unknown, void>["onSuccess"];
    "useSendOneTimePasswordHook": UseMutationOptions<SendOneTimePasswordMutationResponseType, unknown, SendOneTimePasswordMutationRequestType>["onSuccess"];
    "useGetUserQuotaHook": UseMutationOptions<GetUserQuotaQueryResponseType, unknown, void>["onSuccess"];
    "useUpdateUserQuotaHook": UseMutationOptions<UpdateUserQuotaMutationResponseType, unknown, void>["onSuccess"];
    "useReplaceUserQuotaHook": UseMutationOptions<ReplaceUserQuotaMutationResponseType, unknown, void>["onSuccess"];
    "useCreateWorkspaceHook": UseMutationOptions<CreateWorkspaceMutationResponseType, unknown, CreateWorkspaceMutationRequestType>["onSuccess"];
    "useListUserWorkspacesHook": UseMutationOptions<ListUserWorkspacesQueryResponseType, unknown, void>["onSuccess"];
    "useListWorkspacesHook": UseMutationOptions<ListWorkspacesQueryResponseType, unknown, void>["onSuccess"];
    "useGetWorkspaceHook": UseMutationOptions<GetWorkspaceQueryResponseType, unknown, void>["onSuccess"];
    "useDeleteWorkspaceHook": UseMutationOptions<DeleteWorkspaceMutationResponseType, unknown, void>["onSuccess"];
    "useGetWorkspaceQuotaHook": UseMutationOptions<GetWorkspaceQuotaQueryResponseType, unknown, void>["onSuccess"];
    "useUpdateWorkspaceQuotaHook": UseMutationOptions<UpdateWorkspaceQuotaMutationResponseType, unknown, UpdateWorkspaceQuotaMutationRequestType>["onSuccess"];
    "useReplaceWorkspaceQuotaHook": UseMutationOptions<ReplaceWorkspaceQuotaMutationResponseType, unknown, ReplaceWorkspaceQuotaMutationRequestType>["onSuccess"];
    "useGetWorkspaceAccountHook": UseMutationOptions<GetWorkspaceAccountQueryResponseType, unknown, void>["onSuccess"];
    "useGetWorkspaceSshKeysHook": UseMutationOptions<GetWorkspaceSshKeysQueryResponseType, unknown, void>["onSuccess"];
    "useCreateWorkspaceSshKeysHook": UseMutationOptions<CreateWorkspaceSshKeysMutationResponseType, unknown, void>["onSuccess"];
    "useDeleteWorkspaceSshKeysHook": UseMutationOptions<DeleteWorkspaceSshKeysMutationResponseType, unknown, void>["onSuccess"];
    "useGetWorkspaceMembersHook": UseMutationOptions<GetWorkspaceMembersQueryResponseType, unknown, void>["onSuccess"];
    "useGetWorkspaceInvitationsHook": UseMutationOptions<GetWorkspaceInvitationsQueryResponseType, unknown, void>["onSuccess"];
    "useCreateZoneHook": UseMutationOptions<CreateZoneMutationResponseType, unknown, CreateZoneMutationRequestType>["onSuccess"];
    "useListZonesHook": UseMutationOptions<ListZonesQueryResponseType, unknown, void>["onSuccess"];
    "useListGpuTypesHook": UseMutationOptions<ListGpuTypesQueryResponseType, unknown, void>["onSuccess"];
    "useListWorkspaceZonesHook": UseMutationOptions<ListWorkspaceZonesQueryResponseType, unknown, void>["onSuccess"];
    "useWatchWorkspaceZonesHook": UseMutationOptions<WatchWorkspaceZonesQueryResponseType, unknown, void>["onSuccess"];
    "useListWorkspaceZoneGpuTypesHook": UseMutationOptions<ListWorkspaceZoneGpuTypesQueryResponseType, unknown, void>["onSuccess"];
    "useGetWorkspaceZoneQuotaHook": UseMutationOptions<GetWorkspaceZoneQuotaQueryResponseType, unknown, void>["onSuccess"];
    "useListInstancesHook": UseMutationOptions<ListInstancesQueryResponseType, unknown, void>["onSuccess"];
    "useListWorkspaceInstancesHook": UseMutationOptions<ListWorkspaceInstancesQueryResponseType, unknown, void>["onSuccess"];
    "useGetInstanceHook": UseMutationOptions<GetInstanceQueryResponseType, unknown, void>["onSuccess"];
    "useDeleteInstanceHook": UseMutationOptions<DeleteInstanceMutationResponseType, unknown, void>["onSuccess"];
    "useCreateInstanceHook": UseMutationOptions<CreateInstanceMutationResponseType, unknown, CreateInstanceMutationRequestType>["onSuccess"];
    "useStartInstanceHook": UseMutationOptions<StartInstanceMutationResponseType, unknown, void>["onSuccess"];
    "useStopInstanceHook": UseMutationOptions<StopInstanceMutationResponseType, unknown, void>["onSuccess"];
    "useCreateInstancePortForwardHook": UseMutationOptions<CreateInstancePortForwardMutationResponseType, unknown, CreateInstancePortForwardMutationRequestType>["onSuccess"];
    "useDeleteInstancePortForwardHook": UseMutationOptions<DeleteInstancePortForwardMutationResponseType, unknown, void>["onSuccess"];
    "useListInstancePortForwardsHook": UseMutationOptions<ListInstancePortForwardsQueryResponseType, unknown, void>["onSuccess"];
    "useListWorkspaceOperationsHook": UseMutationOptions<ListWorkspaceOperationsQueryResponseType, unknown, void>["onSuccess"];
    "useGetWorkspaceOperationHook": UseMutationOptions<GetWorkspaceOperationQueryResponseType, unknown, void>["onSuccess"];
    "useWatchWorkspaceOperationsHook": UseMutationOptions<WatchWorkspaceOperationsQueryResponseType, unknown, void>["onSuccess"];
    "useWatchWorkspaceOperationHook": UseMutationOptions<WatchWorkspaceOperationQueryResponseType, unknown, void>["onSuccess"];
    "useCreateFileStorageHook": UseMutationOptions<CreateFileStorageMutationResponseType, unknown, CreateFileStorageMutationRequestType>["onSuccess"];
    "useListWorkspaceFileStoragesHook": UseMutationOptions<ListWorkspaceFileStoragesQueryResponseType, unknown, void>["onSuccess"];
    "useGetFileStorageHook": UseMutationOptions<GetFileStorageQueryResponseType, unknown, void>["onSuccess"];
    "useDeleteFileStorageHook": UseMutationOptions<DeleteFileStorageMutationResponseType, unknown, void>["onSuccess"];
    "useListFilesInFileStorageHook": UseMutationOptions<ListFilesInFileStorageQueryResponseType, unknown, void>["onSuccess"];
    "useCreateImageHook": UseMutationOptions<CreateImageMutationResponseType, unknown, CreateImageMutationRequestType>["onSuccess"];
    "useUpdateImageHook": UseMutationOptions<UpdateImageMutationResponseType, unknown, void>["onSuccess"];
    "useListWorkspaceImagesHook": UseMutationOptions<ListWorkspaceImagesQueryResponseType, unknown, void>["onSuccess"];
    "useTokenHook": UseMutationOptions<TokenMutationResponseType, unknown, TokenMutationRequestType>["onSuccess"];
};