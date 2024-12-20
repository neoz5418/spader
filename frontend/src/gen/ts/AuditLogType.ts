import type { AuditLogResourceTypeType } from "./AuditLogResourceTypeType";
import type { AuditLogActionTypeType } from "./AuditLogActionTypeType";

 export type AuditLogType = {
    /**
     * @type string | undefined, uuid
    */
    uid?: string;
    /**
     * @type string, uuid
    */
    user_id: string;
    user_email?: (string | null);
    /**
     * @type string, uuid
    */
    resource_id: string;
    /**
     * @type string
    */
    resource_type: AuditLogResourceTypeType;
    /**
     * @type string
    */
    action: AuditLogActionTypeType;
    /**
     * @type string, date-time
    */
    create_time: string;
    description?: (string | null);
    workspace?: (string | null);
    zone?: (string | null);
};