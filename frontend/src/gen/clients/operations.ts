export const operations = {
    "get_current_user": {
        "path": "/apis/user/v1/users/me",
        "method": "get"
    },
    "list_users": {
        "path": "/apis/user/v1/users/",
        "method": "get"
    },
    "register_user": {
        "path": "/apis/user/v1/users/",
        "method": "post"
    },
    "get_user": {
        "path": "/apis/user/v1/users/:username",
        "method": "get"
    },
    "delete_user": {
        "path": "/apis/user/v1/users/:username",
        "method": "delete"
    },
    "send_one_time_password": {
        "path": "/apis/user/v1/one_time_password",
        "method": "post"
    },
    "get_user_quota": {
        "path": "/apis/user/v1/users/:username/quota",
        "method": "get"
    },
    "update_user_quota": {
        "path": "/apis/user/v1/users/:username/quota",
        "method": "patch"
    },
    "replace_user_quota": {
        "path": "/apis/user/v1/users/:username/quota",
        "method": "put"
    },
    "create_workspace": {
        "path": "/apis/workspace/v1/users/:username/workspaces",
        "method": "post"
    },
    "list_user_workspaces": {
        "path": "/apis/workspace/v1/users/:username/workspaces",
        "method": "get"
    },
    "list_workspaces": {
        "path": "/apis/workspace/v1/workspaces",
        "method": "get"
    },
    "get_workspace": {
        "path": "/apis/workspace/v1/workspaces/:workspace",
        "method": "get"
    },
    "delete_workspace": {
        "path": "/apis/workspace/v1/workspaces/:workspace",
        "method": "delete"
    },
    "get_workspace_quota": {
        "path": "/apis/workspace/v1/workspaces/:workspace/quota",
        "method": "get"
    },
    "update_workspace_quota": {
        "path": "/apis/workspace/v1/workspaces/:workspace/quota",
        "method": "patch"
    },
    "replace_workspace_quota": {
        "path": "/apis/workspace/v1/workspaces/:workspace/quota",
        "method": "put"
    },
    "get_workspace_account": {
        "path": "/apis/workspace/v1/workspaces/:workspace/account",
        "method": "get"
    },
    "recharge_workspace_account": {
        "path": "/apis/workspace/v1/workspaces/:workspace/account/recharge",
        "method": "post"
    },
    "list_workspace_account_recharges": {
        "path": "/apis/workspace/v1/workspaces/:workspace/account/recharges",
        "method": "get"
    },
    "get_workspace_account_recharge": {
        "path": "/apis/workspace/v1/workspaces/:workspace/account/recharges/:recharge_id",
        "method": "get"
    },
    "check_workspace_account_recharge": {
        "path": "/apis/workspace/v1/recharges/:recharge_id/check",
        "method": "post"
    },
    "list_workspace_resource_usage_records": {
        "path": "/apis/workspace/v1/workspaces/:workspace/resource_usage_record",
        "method": "get"
    },
    "list_workspace_ssh_keys": {
        "path": "/apis/workspace/v1/workspaces/:workspace/ssh_keys",
        "method": "get"
    },
    "create_workspace_ssh_keys": {
        "path": "/apis/workspace/v1/workspaces/:workspace/ssh_keys",
        "method": "post"
    },
    "delete_workspace_ssh_keys": {
        "path": "/apis/workspace/v1/workspaces/:workspace/ssh_keys/:name",
        "method": "delete"
    },
    "get_workspace_members": {
        "path": "/apis/workspace/v1/workspaces/:workspace/members",
        "method": "get"
    },
    "get_workspace_invitations": {
        "path": "/apis/workspace/v1/workspaces/:workspace/invitations",
        "method": "get"
    },
    "get_workspace_operations": {
        "path": "/apis/workspace/v1/workspaces/:workspace/operations",
        "method": "get"
    },
    "create_zone": {
        "path": "/apis/compute/v1/zones/",
        "method": "post"
    },
    "list_zones": {
        "path": "/apis/compute/v1/zones",
        "method": "get"
    },
    "list_gpu_types": {
        "path": "/apis/compute/v1/gpu_types",
        "method": "get"
    },
    "list_workspace_zones": {
        "path": "/apis/compute/v1/workspaces/:workspace/zones",
        "method": "get"
    },
    "list_workspace_gpu_types": {
        "path": "/apis/compute/v1/workspaces/:workspace/gpu_types",
        "method": "get"
    },
    "get_workspace_zone_quota": {
        "path": "/apis/compute/v1/workspaces/:workspace/zones/:zone/quota",
        "method": "get"
    },
    "list_instances": {
        "path": "/apis/compute/v1/instances",
        "method": "get"
    },
    "list_workspace_instances": {
        "path": "/apis/compute/v1/workspaces/:workspace/instances",
        "method": "get"
    },
    "create_instance": {
        "path": "/apis/compute/v1/workspaces/:workspace/instances",
        "method": "post"
    },
    "get_instance": {
        "path": "/apis/compute/v1/workspaces/:workspace/instances/:name",
        "method": "get"
    },
    "delete_instance": {
        "path": "/apis/compute/v1/workspaces/:workspace/instances/:name",
        "method": "delete"
    },
    "start_instance": {
        "path": "/apis/compute/v1/workspaces/:workspace/instances/:name/start",
        "method": "post"
    },
    "stop_instance": {
        "path": "/apis/compute/v1/workspaces/:workspace/instances/:name/stop",
        "method": "post"
    },
    "create_instance_port_forward": {
        "path": "/apis/compute/v1/workspaces/:workspace/zones/:zone/instances/:name/port_forward",
        "method": "post"
    },
    "delete_instance_port_forward": {
        "path": "/apis/compute/v1/workspaces/:workspace/zones/:zone/instances/:name/port_forwards/:port_forward_name",
        "method": "delete"
    },
    "list_instance_port_forwards": {
        "path": "/apis/compute/v1/workspaces/:workspace/zones/:zone/instances/:name/port_forwards",
        "method": "get"
    },
    "list_workspace_operations": {
        "path": "/apis/compute/v1/workspaces/:workspace/zones/:zone/operations",
        "method": "get"
    },
    "get_workspace_operation": {
        "path": "/apis/compute/v1/workspaces/:workspace/zones/:zone/operations/:uid",
        "method": "get"
    },
    "create_file_storage": {
        "path": "/apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages/",
        "method": "post"
    },
    "list_workspace_file_storages": {
        "path": "/apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages",
        "method": "get"
    },
    "get_file_storage": {
        "path": "/apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages/:name",
        "method": "get"
    },
    "delete_file_storage": {
        "path": "/apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages/:name",
        "method": "delete"
    },
    "list_files_in_file_storage": {
        "path": "/apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages/:name/files",
        "method": "get"
    },
    "create_image": {
        "path": "/apis/compute/v1/zones/:zone/images/",
        "method": "post"
    },
    "update_image": {
        "path": "/apis/compute/v1/zones/:zone/images/:name",
        "method": "patch"
    },
    "list_workspace_images": {
        "path": "/apis/compute/v1/workspaces/:workspace/zones/:zone/images",
        "method": "get"
    },
    "auth": {
        "path": "/apis/oidc/v1/auth",
        "method": "post"
    },
    "token": {
        "path": "/apis/oidc/v1/token",
        "method": "post"
    }
} as const;