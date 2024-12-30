import Loader from "@/components/loader.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card.tsx";
import { Input } from "@/components/ui/input.tsx";
import {
	useCheckWorkspaceAccountRechargeHook,
	useRechargeWorkspaceAccountHook,
} from "@/gen";
import {
	useCurrentWorkspace,
	useWorkspaceAccount,
} from "@/hooks/use-setting.ts";
import { CreditCard } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function RechargeCallback(out_trade_no: string) {
	const [retryCount, setRetryCount] = useState(0);
	const [queryFailed, setQueryFailed] = useState(false);
	const { data, mutate } = useCheckWorkspaceAccountRechargeHook(out_trade_no, {
		mutation: {
			onSuccess: async (data) => {
				if (data.status) {
					// 如果 data.status 有值，处理成功的数据
					console.log("Data loaded successfully:", data);
				} else {
					// 如果 data.status 为空，重试
					if (retryCount < 20) {
						await sleep(2000); // 等待 2 秒钟
						setRetryCount(retryCount + 1);
						mutate(); // 重试
					} else {
						setQueryFailed(true); // 重试 20 次后提示查询失败
					}
				}
			},
		},
	});

	useEffect(() => {
		if (data?.status === "succeeded") {
			window.location.href = window.location.origin + window.location.pathname;
			return;
		}
		mutate();
	}, [mutate, data]);

	if (data?.status === "failed") {
		return <h5>充值失败</h5>;
	}
	if (queryFailed) {
		return <h5>查询充值状态失败</h5>;
	}
	return <h5>正在查询充值状态</h5>;
}

function formatCurrency(amount: number, currency: string) {
	return (amount / 100).toLocaleString("zh-CN", {
		style: "currency",
		currency: currency,
		minimumFractionDigits: 2,
	});
}

export default function RechargeCard() {
	const [searchParams] = useSearchParams();
	const { currentWorkspace, isLoading } = useCurrentWorkspace();
	const { workspacesAccount, isLoading: workspaceAccountIsLoading } =
		useWorkspaceAccount();
	const currency = workspacesAccount?.currency || "CNY";
	const rechargeAmountValues = [25, 50, 100];
	const [rechargeAmount, setRechargeAmount] = useState(rechargeAmountValues[0]);
	const mutation = useRechargeWorkspaceAccountHook(
		currentWorkspace?.name || "",
	);
	const out_trade_no = searchParams.get("out_trade_no");
	if (out_trade_no) {
		return RechargeCallback(out_trade_no);
	}

	const recharge = (e) => {
		e.preventDefault();
		mutation.mutate({
			amount: rechargeAmount * 100,
			currency: "CNY",
			type: "alipay",
			callback_url: window.location.origin + window.location.pathname,
		});
	};
	if (mutation.data?.pay_url) {
		window.location.href = mutation.data.pay_url;
	}
	if (isLoading || workspaceAccountIsLoading) {
		return null;
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>充值</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div className="flex gap-2">
						{rechargeAmountValues.map((value) => (
							<Button
								key={value}
								variant={rechargeAmount === value ? "secondary" : "outline"}
								onClick={() => setRechargeAmount(value)}
							>
								{formatCurrency(value * 100, currency)}
							</Button>
						))}
					</div>
					<div className="flex gap-2">
						<div className="w-1/2 flex-1">
							<Input
								type="number"
								placeholder={`${currency} 自定义金额`}
								value={rechargeAmount || ""}
								onChange={(e) => setRechargeAmount(Number(e.target.value))}
							/>
						</div>
						{mutation.error && (
							<h5
								onClick={() => mutation.reset()}
								className="cursor-pointer text-red-600"
							>
								{mutation.error.toString()}
							</h5>
						)}
						<Button
							className="w-1/2 bg-purple-600 hover:bg-purple-700"
							onClick={recharge}
						>
							<CreditCard className="mr-2 h-4 w-4" />
							{"充值"}
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
