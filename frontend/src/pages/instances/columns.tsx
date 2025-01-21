import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
	InstancePublicType,
	deleteInstance,
	startInstance,
	stopInstance,
	useStartInstanceHook,
	useStopInstanceHook,
} from "@/gen";
import { toast } from "@/hooks/use-toast.ts";
import { Text } from "@chakra-ui/react";
import { ColumnDef } from "@tanstack/react-table";
import {
	ArrowUpRight,
	ChevronRight,
	Copy,
	Play,
	Square,
	Trash2,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const getInstancesColumns = (refetch: () => void) => {
	const showToast = (message: string) => {
		toast({
			description: message,
		});
		refetch();
	};
	return [
		{
			accessorFn: (row) => {
				if (row.display_name) {
					return `${row.name} (${row.display_name})`;
				}
				return row.name;
			},
			header: "名称",
		},
		{
			header: "状态",
			cell: ({ row }) => {
				switch (row.original.status) {
					case "provisioning":
						return <Badge variant="secondary">启动中</Badge>;
					case "running":
						return <Badge variant="default">运行中</Badge>;
					case "stopping":
						return <Badge variant="destructive">运行中</Badge>;
					case "staging":
						return <Badge variant="secondary">启动中</Badge>;
					case "terminated":
						return <Badge variant="outline">已释放</Badge>;
					default:
						return null;
				}
			},
		},
		{
			accessorKey: "zone_display_name",
			header: "区域",
		},
		{
			accessorKey: "gpu_display_name",
			header: "GPU 类型",
		},
		{
			accessorKey: "image",
			header: "镜像",
		},
		{
			accessorKey: "ssh",
			header: "SSH 登录",
		},
		{
			accessorKey: "services",
			header: "快捷工具",
			cell: ({ row }) => {
				const services = [];
				if (row.original.services) {
					let jupyterLabUrl = "";
					const jupyterLabHost = row.original.services["jupyter-lab"];
					const jupyterLabToken = row.original.services["jupyter-password"];
					if (jupyterLabHost) {
						jupyterLabUrl = `http://${jupyterLabHost}`;
					}
					if (jupyterLabToken) {
						jupyterLabUrl += `?password=${jupyterLabToken}`;
					}

					services.push(
						<div>
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<Link
											to={jupyterLabUrl}
											target="_blank"
											className="text-sky-400 hover:text-sky-500 underline decoration-sky-500"
										>
											JupyterLab
										</Link>
									</TooltipTrigger>
									<TooltipContent>
										<p>JupyterLab 地址: {jupyterLabHost}</p>
										<p>JupyterLab 密码: {jupyterLabToken}</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
							<Button
								className="text-blue-600 hover:bg-blue-100 hover:text-blue-700"
								variant="ghost"
								size="icon"
								onClick={() => {
									navigator.clipboard.writeText(jupyterLabUrl);
									toast({
										description: "已复制到剪贴板",
									});
								}}
							>
								<Copy />
							</Button>
						</div>,
					);
					return <div>{services}</div>;
				}
			},
		},
		{
			accessorFn: (row) => {
				const date = new Date(row.create_time || new Date());
				date.setHours(date.getHours() + 8);
				return date.toLocaleString();
			},
			header: "创建时间",
		},
		{
			id: "actions",
			header: "操作",
			cell: ({ row }) => {
				const instance = row.original;
				const [showStopDialog, setShowStopDialog] = useState(false);
				const [showDeleteDialog, setShowDeleteDialog] = useState(false);
				const [confirmName, setConfirmName] = useState("");

				const handleStop = () => {
					if (confirmName !== instance.name) {
						showToast("实例名称不匹配");
						return;
					}
					console.log("stop instance", instance.workspace, instance.name);
					stopInstance(instance.workspace, instance.name)
						.then(() => {
							setShowStopDialog(false);
							setConfirmName("");
							showToast(`实例 ${instance.name} 停止成功`);
						})
						.catch((error) => {
							console.log("stop instance error", error);
						});
				};

				const handleDelete = () => {
					if (confirmName !== instance.name) {
						showToast("实例名称不匹配");
						return;
					}
					deleteInstance(instance.workspace, instance.name)
						.then(() => {
							setShowDeleteDialog(false);
							setConfirmName("");
							showToast(`实例 ${instance.name} 删除成功`);
						})
						.catch((error) => {
							console.log("delete instance error", error);
						});
				};

				return (
					<>
						<div className="flex items-center gap-2">
							<Button
								disabled={
									instance.status !== "running" &&
									instance.status !== "terminated"
								}
								variant="ghost"
								size="icon"
								onClick={() => {
									if (instance.status === "running") {
										setShowStopDialog(true);
									}
									if (instance.status === "terminated") {
										startInstance(instance.workspace, instance.name)
											.then(() => showToast(`实例 ${instance.name} 启动成功`))
											.catch((error) =>
												console.log("start instance error", error),
											);
									}
								}}
							>
								{instance.status === "running" ? (
									<Square className="h-4 w-4" />
								) : (
									<Play className="h-4 w-4" />
								)}
							</Button>

							<Button
								variant="ghost"
								size="icon"
								className="text-red-600 hover:bg-red-100 hover:text-red-700"
								onClick={() => setShowDeleteDialog(true)}
							>
								<Trash2 className="h-4 w-4" />
							</Button>
						</div>

						<Dialog open={showStopDialog} onOpenChange={setShowStopDialog}>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>确认停止实例</DialogTitle>
									<DialogDescription>
										请输入实例名称 "{instance.name}" 以确认停止操作。
									</DialogDescription>
								</DialogHeader>
								<Input
									value={confirmName}
									onChange={(e) => setConfirmName(e.target.value)}
									placeholder="输入实例名称"
								/>
								<DialogFooter>
									<Button
										variant="outline"
										onClick={() => {
											setShowStopDialog(false);
											setConfirmName("");
										}}
									>
										取消
									</Button>
									<Button variant="destructive" onClick={handleStop}>
										停止
									</Button>
								</DialogFooter>
							</DialogContent>
						</Dialog>

						<Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>确认删除实例</DialogTitle>
									<DialogDescription>
										请输入实例名称 "{instance.name}"
										以确认删除操作。此操作不可恢复。
									</DialogDescription>
								</DialogHeader>
								<Input
									value={confirmName}
									onChange={(e) => setConfirmName(e.target.value)}
									placeholder="输入实例名称"
								/>
								<DialogFooter>
									<Button
										variant="outline"
										onClick={() => {
											setShowDeleteDialog(false);
											setConfirmName("");
										}}
									>
										取消
									</Button>
									<Button variant="destructive" onClick={handleDelete}>
										删除
									</Button>
								</DialogFooter>
							</DialogContent>
						</Dialog>
					</>
				);
			},
		},
	];
};
