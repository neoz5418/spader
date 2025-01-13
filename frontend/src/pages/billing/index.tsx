import RechargeCard from "@/components/custom/recharge-card.tsx";
import Loader from "@/components/loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	type ListWorkspaceExpensesQueryResponseType,
	listWorkspaceExpenses,
	listWorkspaceExpensesQueryOptions,
	useListWorkspaceBillingRecordsHook,
	useListWorkspaceExpensesHook,
} from "@/gen";
import { useListWorkspaceResourceUsageRecordsHook } from "@/gen/hooks/useListWorkspaceResourceUsageRecordsHook";
import { useCurrentWorkspace, useWorkspaceAccount } from "@/hooks/use-setting";
import type { PaginationState, Updater } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function formatCurrency(amount: number, currency: string) {
	return ((amount || 0) / 100).toLocaleString("zh-CN", {
		style: "currency",
		currency: currency,
		minimumFractionDigits: 2,
	});
}

export default function BillingDashboard() {
	const { currentWorkspace } = useCurrentWorkspace();
	const { workspacesAccount, isLoading: workspaceAccountIsLoading } =
		useWorkspaceAccount();
	const balance = workspacesAccount?.balance || 0;
	const currency = workspacesAccount?.currency || "CNY";
	const rate_per_hour = workspacesAccount?.rate_per_hour || 0;
	const [searchParams, setSearchParams] = useSearchParams();
	const [expenses, setExpenses] =
		useState<ListWorkspaceExpensesQueryResponseType | null>(null);

	const today = new Date();
	const tomorrow = new Date(today);
	tomorrow.setDate(today.getDate() + 1);
	const endDate = tomorrow; // set next day
	const startDate = new Date(tomorrow);
	startDate.setMonth(startDate.getMonth() - 2); // show last 2 months
	useEffect(() => {
		if (!currentWorkspace?.name) {
			return;
		}
		listWorkspaceExpenses(currentWorkspace?.name || "", {
			start_date: startDate.toISOString(),
			end_date: endDate.toISOString(),
			timezone: "UTC",
		})
			.then((res) => {
				console.log("expenses", res);
				setExpenses(res);
			})
			.catch((error) => {
				console.error("error", error);
			});
	}, [currentWorkspace?.name]);

	if (expenses === null) {
		return <Loader />;
	}
	return (
		<div className="max-w-[1200px] mx-auto p-6 space-y-8">
			<div className="grid gap-4 md:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle>
							余额:{" "}
							{workspaceAccountIsLoading
								? "..."
								: formatCurrency(balance, currency)}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-sm text-muted-foreground">
							<p>消费限额: 无限额</p>
							<p>当前消费: {formatCurrency(rate_per_hour, currency)} / 小时</p>
						</div>
					</CardContent>
				</Card>
				<RechargeCard />
			</div>

			<Card>
				<CardHeader>
					<div className="flex items-center justify-between">
						<CardTitle>账单</CardTitle>
					</div>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>日期</TableHead>
								<TableHead>总消费</TableHead>
								<TableHead>实例</TableHead>
								<TableHead>存储卷</TableHead>
								<TableHead>快照</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{expenses.expenses.map((expense) => (
								<TableRow key={expense.date}>
									<TableCell>
										{new Date(expense.date).toLocaleDateString("zh-CN")}
									</TableCell>
									<TableCell>
										{formatCurrency(expense.total, currency)}
									</TableCell>
									<TableCell>
										{formatCurrency(expense.expense_detail.instance, currency)}
									</TableCell>
									<TableCell>
										{formatCurrency(expense.expense_detail.volume, currency)}
									</TableCell>
									<TableCell>
										{formatCurrency(expense.expense_detail.snapshot, currency)}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
}
