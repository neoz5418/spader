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
import { useListWorkspaceBillingRecordsHook } from "@/gen";
import { useListWorkspaceResourceUsageRecordsHook } from "@/gen/hooks/useListWorkspaceResourceUsageRecordsHook";
import { useCurrentWorkspace, useWorkspaceAccount } from "@/hooks/use-setting";
import type { PaginationState, Updater } from "@tanstack/react-table";
import { useSearchParams } from "react-router-dom";

function formatCurrency(amount: number, currency: string) {
	return (amount / 100).toLocaleString("zh-CN", {
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
		isLoading,
		data: {
			items: records = [],
			pagination: { total = 0 } = {},
		} = {},
	} = useListWorkspaceBillingRecordsHook(
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
	console.log(records);
	if (isLoading) {
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
					<Tabs defaultValue="summary">
						<TabsList className="grid w-full grid-cols-7 mb-4">
							<TabsTrigger value="summary">总消费</TabsTrigger>
							<TabsTrigger value="gpu">GPU 实例</TabsTrigger>
						</TabsList>
						<TabsContent value="summary">
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>日期</TableHead>
										<TableHead>总消费</TableHead>
										<TableHead>GPU 实例</TableHead>
										<TableHead>CPU 实例</TableHead>
										<TableHead>带宽</TableHead>
										<TableHead>存储</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell>2024年11月29日</TableCell>
										<TableCell>$0.001</TableCell>
										<TableCell>$0</TableCell>
										<TableCell>$0.001</TableCell>
										<TableCell>$0</TableCell>
										<TableCell>$0</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>2024年11月28日</TableCell>
										<TableCell>$1.915</TableCell>
										<TableCell>$1.91</TableCell>
										<TableCell>$0</TableCell>
										<TableCell>$0</TableCell>
										<TableCell>$0.005</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TabsContent>
						<TabsContent value="gpu">
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>日期</TableHead>
										<TableHead>GPU 实例</TableHead>
										<TableHead>RTX 3060</TableHead>
										<TableHead>A100</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell>2024年11月29日</TableCell>
										<TableCell>$0.001</TableCell>
										<TableCell>$0</TableCell>
										<TableCell>$0</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>2024年11月28日</TableCell>
										<TableCell>$1.915</TableCell>
										<TableCell>$1.91</TableCell>
										<TableCell>$0</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</div>
	);
}
