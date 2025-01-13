"use client";

import { DataTable } from "@/components/custom/data-table";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import type { AuditLogType } from "@/gen";
import { useGetWorkspaceAuditLogsHook } from "@/gen/hooks";
import { useCurrentWorkspace } from "@/hooks/use-setting";
import { useEvents } from "@/hooks/use-watch";
import type { Updater } from "@tanstack/react-query";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { format } from "date-fns";
import { Loader, Search } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function AuditLogs() {
	const [startDate, setStartDate] = useState<Date>();
	const [endDate, setEndDate] = useState<Date>();
	const [filter, setFilter] = useState("");

	const { currentWorkspace, isLoading: isWorkspaceLoading } =
		useCurrentWorkspace();
	const [searchParams, setSearchParams] = useSearchParams();
	const events = useEvents();
	const pagination = {
		pageIndex: Number.parseInt(searchParams.get("pageIndex") || "0"),
		pageSize: Number.parseInt(searchParams.get("pageSize") || "10"),
	};

	function setPagination(updater: Updater<PaginationState>) {
		let state: PaginationState;
		if (typeof updater === "function") {
			state = updater(pagination);
		} else {
			state = updater;
		}

		searchParams.set("pageIndex", state.pageIndex.toString());
		searchParams.set("pageSize", state.pageSize.toString());
		setSearchParams(searchParams);
	}

	const {
		isLoading: isInstancesLoading,
		data: {
			items: auditLogs = [],
			pagination: { total = 1 } = {},
		} = {},
	} = useGetWorkspaceAuditLogsHook(
		currentWorkspace?.name || "",
		{
			offset: pagination.pageIndex * pagination.pageSize,
			limit: pagination.pageSize,
		},
		{
			query: {
				enabled: !!currentWorkspace,
			},
		},
	);
	if (isWorkspaceLoading || isInstancesLoading) {
		return <Loader />;
	}

	console.log("[+] auditLogs", auditLogs);

	return (
		<div className="w-full max-w-screen-2xl mx-auto p-4">
			<div className="flex items-center justify-between mb-6">
				<h1 className="text-2xl font-semibold">审计日志</h1>
			</div>

			{/* <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="pl-9"
          />
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[180px]">
              {startDate ? format(startDate, 'MMM dd, yyyy') : 'Start Date'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[180px]">
              {endDate ? format(endDate, 'MMM dd, yyyy') : 'End Date'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={setEndDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Button className="text-primary" variant="outline">
          Apply
        </Button>
      </div> */}

			<div className="border rounded-md">
				<DataTable
					columns={AuditLogsColumns}
					data={auditLogs}
					rowCount={total}
					pagination={pagination}
					setPagination={setPagination}
				/>
			</div>
		</div>
	);
}

const getActionColor = (action: string) => {
	switch (action) {
		case "update":
			return "text-blue-600";
		case "create":
			return "text-green-600";
		case "delete":
			return "text-red-600";
		default:
			return "";
	}
};

export const AuditLogsColumns: ColumnDef<AuditLogType>[] = [
	{
		accessorFn: (row) => {
			const date = new Date(row.create_time || new Date());
			date.setHours(date.getHours() + 8);
			return date.toLocaleString();
		},
		header: "时间",
	},
	{
		accessorKey: "user_email",
		header: "用户",
	},
	{
		accessorKey: "resource_type",
		header: "资源",
	},
	{
		accessorKey: "resource_id",
		header: "资源ID",
	},
	{
		accessorKey: "action",
		header: "操作",
		cell: (cell) => {
			return (
				<span className={getActionColor(cell.getValue())}>
					{cell.getValue()}
				</span>
			);
		},
	},
];
