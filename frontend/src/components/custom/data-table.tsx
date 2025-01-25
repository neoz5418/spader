"use client";

import {
	type ColumnDef,
	type PaginationState,
	type Updater,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/custom/button";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { Link, useNavigate } from "react-router-dom";
import { Skeleton } from "../ui/skeleton";
import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar } from "./data-table-toolbar";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	rowCount: number;
	createLink: string;
	pagination: PaginationState;
	setPagination: (updater: Updater<PaginationState>) => void;
}

export function DataTable<TData, TValue>({
	columns,
	data,
	rowCount,
	createLink,
	pagination,
	setPagination,
}: DataTableProps<TData, TValue>) {
	const table = useReactTable({
		data,
		columns,
		pageCount: Math.ceil(rowCount / pagination.pageSize),
		getCoreRowModel: getCoreRowModel(),
		// getPaginationRowModel: getPaginationRowModel(), //not needed for server-side pagination
		manualPagination: true, //turn off client-side pagination
		rowCount: rowCount,
		onPaginationChange: setPagination,
		state: {
			//...
			pagination,
		},
	});

	return (
		<div className="space-y-4">
			{createLink ? (
				<div className="flex items-center justify-between">
					<Button variant="outline" asChild>
						<Link to={createLink}>新建</Link>
					</Button>
				</div>
			) : null}
			{createLink ? <DataTableToolbar table={table} /> : null}
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext(),
													)}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody className={"border-b"}>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									暂无数据。
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
				<DataTablePagination table={table} />
			</div>
		</div>
	);
}

export function DataLoading() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-background">
			<div className="flex items-center space-x-4">
				<Skeleton className="h-12 w-12 rounded-full" />
				<div className="space-y-2">
					<Skeleton className="h-4 w-[250px]" />
					<Skeleton className="h-4 w-[200px]" />
				</div>
			</div>
		</div>
	);
}

export function DataError(error: Error) {
	const navigate = useNavigate();
	return (
		<div className="h-svh">
			<div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
				<span className="font-medium">数据获取失败!</span>
				<p className="text-center text-muted-foreground">{error.message}</p>
				<div className="mt-6 flex gap-4">
					<Button variant="outline" onClick={() => navigate(-1)}>
						Go Back
					</Button>
					<Button onClick={() => navigate("/")}>Back to Home</Button>
				</div>
			</div>
		</div>
	);
}

export default DataTable;
