import RechargeCard from "@/components/custom/recharge-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useWorkspaceAccount } from "@/hooks/use-setting";
import { ExpensesTable } from "./expenses-table";
import { TransactionsTable } from "./transactions-table";

function formatCurrency(amount: number, currency: string) {
	return ((amount || 0) / 100).toLocaleString("zh-CN", {
		style: "currency",
		currency: currency,
		minimumFractionDigits: 2,
	});
}

export default function BillingDashboard() {
	const { workspacesAccount, isLoading: workspaceAccountIsLoading } = useWorkspaceAccount();
	const balance = workspacesAccount?.balance || 0;
	const currency = workspacesAccount?.currency || "CNY";
	const rate_per_hour = workspacesAccount?.rate_per_hour || 0;

	const today = new Date();
	const tomorrow = new Date(today);
	tomorrow.setDate(today.getDate() + 1);
	const endDate = tomorrow;
	const startDate = new Date(tomorrow);
	startDate.setMonth(startDate.getMonth() - 2);

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
					<Tabs defaultValue="expenses">
						<TabsList>
							<TabsTrigger value="expenses">消费清单</TabsTrigger>
							<TabsTrigger value="transactions">收支明细</TabsTrigger>
						</TabsList>

						<TabsContent value="expenses">
							<ExpensesTable
								startDate={startDate}
								endDate={endDate}
								currency={currency}
							/>
						</TabsContent>

						<TabsContent value="transactions">
							<TransactionsTable
								startDate={startDate}
								endDate={endDate}
								currency={currency}
							/>
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</div>
	);
}
