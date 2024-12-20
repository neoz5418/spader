import type { AuditLogType } from "./AuditLogType";
import type { PaginationType } from "./PaginationType";

 export type PaginatedListAuditLogType = {
    /**
     * @type array
    */
    items: AuditLogType[];
    /**
     * @type object
    */
    pagination: PaginationType;
};