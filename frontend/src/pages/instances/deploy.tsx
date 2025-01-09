import { Button } from "@/components/custom/button";
import ContentSection from "@/components/custom/content-section";
import { Layout } from "@/components/custom/layout";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
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
	type BillingPeriodType,
	ZoneType,
	createInstance,
	useCalculateInstanceCostHook,
	useListWorkspaceCouponsHook,
	useListWorkspaceZonesHook,
} from "@/gen";
import { useCreateInstanceHook } from "@/gen/hooks/useCreateInstanceHook";
import { useListWorkspaceGpuTypesHook } from "@/gen/hooks/useListWorkspaceGpuTypesHook";
import {
	type CreateInstanceRequestSchema,
	createInstanceRequestSchema,
} from "@/gen/zod/createInstanceRequestSchema.gen";
import { useAuth } from "@/hooks/use-auth";
import { useCurrentWorkspace } from "@/hooks/use-setting.ts";
import { toast } from "@/hooks/use-toast.ts";
import { ApiError } from "@/utils/api-error";
import { handleFormError } from "@/utils/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export default function DeployForm() {
	const { currentWorkspace } = useCurrentWorkspace();
	const [currentGpuType, setCurrentGpuType] = useState<string | null>(null);
	const { workspace } = useParams();
	const navigate = useNavigate();
	const { mutateAsync: createInstanceAsync } = useCreateInstanceHook(
		currentWorkspace?.name || "",
	);

	const {
		data: { items: gpuTypes = [] } = {},
	} = useListWorkspaceGpuTypesHook(
		currentWorkspace?.name || "",
		{},
		{
			query: {
				enabled: !!currentWorkspace,
			},
		},
	);
	const {
		data: { items: zones = [] } = {},
	} = useListWorkspaceZonesHook(
		currentWorkspace?.name || "",
		{},
		{
			query: {
				enabled: !!currentWorkspace,
			},
		},
	);

	const {
		data: { items: coupons = [] } = {},
	} = useListWorkspaceCouponsHook(
		currentWorkspace?.name || "",
		{},
		{
			query: {
				enabled: !!currentWorkspace,
			},
		},
	);

	const { mutate, data: costResult } = useCalculateInstanceCostHook(
		currentWorkspace?.name || "",
	);

	const form = useForm<CreateInstanceRequestSchema>({
		resolver: zodResolver(createInstanceRequestSchema),
		mode: "onChange",
		criteriaMode: "all",
	});

	const cost = costResult?.final_price && (
		<div>
			配置费用：
			{form.getValues("lease_period") === "real_time" ? "后付费" : "预付费"}{" "}
			{(costResult?.final_price || 0) / 100} 元
			{form.getValues("lease_period") === "real_time" ? " / 小时" : ""}
		</div>
	);

	function onSubmit(data: CreateInstanceRequestSchema) {
		if (!currentWorkspace) {
			return;
		}
		createInstanceAsync(data)
			.then(() => {
				toast({
					title: "创建成功",
					description: JSON.stringify(data),
				});
				navigate(`/workspaces/${workspace}/instances`);
			})
			.catch((e) => {
				console.log(e);
				handleFormError(e, form);
			});
	}

	const availableZones = useMemo(() => {
		const gpuType = gpuTypes.find((gpuType) => gpuType.name === currentGpuType);
		return zones.filter((zone) => gpuType?.zones.includes(zone.name));
	}, [currentGpuType, gpuTypes, zones]);

	function onSubmitError(error: any) {
		console.log(error);
		toast({
			variant: "destructive",
			title: "创建失败",
			description: error.message,
		});
	}
	useEffect(() => {
		const subscription = form.watch((values) => {
			if (form.formState.isValid) {
				mutate(values);
			}
		});
		return () => subscription.unsubscribe();
	}, [form.watch]);

	return (
		<Layout>
			<Layout.Body>
				<ContentSection title="创建容器实例" desc="选择一个容器实例规格">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit, onSubmitError)}
							className="space-y-8"
						>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>名称</FormLabel>
										<FormControl>
											<Input placeholder="主机名称" {...field} />
										</FormControl>
										<FormDescription />
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="gpu_type"
								render={({ field }) => (
									<FormItem>
										<FormLabel>实例类型</FormLabel>
										<FormControl>
											<RadioGroup
												onValueChange={(value) => {
													setCurrentGpuType(value);
													field.onChange(value);
												}}
												value={field.value || ""}
												className="flex flex-col space-y-1"
											>
												<Tabs
													defaultValue="gpu"
													className="w-full"
													onValueChange={() => {
														form.setValue("gpu_type", "");
														form.setValue("zone", "");
														setCurrentGpuType(null);
													}}
												>
													<TabsList className="grid w-full grid-cols-2">
														<TabsTrigger value="gpu">GPU 实例</TabsTrigger>
														<TabsTrigger value="cpu">CPU 实例</TabsTrigger>
													</TabsList>

													<TabsContent value="gpu">
														<Table>
															<TableHeader>
																<TableRow>
																	<TableHead className="w-12" />
																	<TableHead>GPU</TableHead>
																	<TableHead>CPU</TableHead>
																	<TableHead>内存</TableHead>
																	<TableHead>系统盘</TableHead>
																	<TableHead className="text-right">
																		价格
																	</TableHead>
																</TableRow>
															</TableHeader>
															<TableBody>
																{gpuTypes
																	.filter((type) => type.gpu_memory > 0)
																	.map((gpuType) => (
																		<TableRow key={gpuType.name}>
																			<TableCell>
																				<FormItem className="flex items-center space-x-3 space-y-0">
																					<FormControl>
																						<RadioGroupItem
																							value={gpuType.name}
																						/>
																					</FormControl>
																				</FormItem>
																			</TableCell>
																			<TableCell>
																				{gpuType.display_name}{" "}
																				{(
																					gpuType.gpu_memory /
																					1000 /
																					1000 /
																					1000
																				).toFixed(0)}{" "}
																				GB * 1 块
																			</TableCell>
																			<TableCell>{gpuType.cpu} 核</TableCell>
																			<TableCell>
																				{(
																					gpuType.memory /
																					1000 /
																					1000 /
																					1000
																				).toFixed(0)}{" "}
																				GB
																			</TableCell>
																			<TableCell>
																				{gpuType.disk_type}{" "}
																				{(
																					gpuType.disk_size /
																					1000 /
																					1000 /
																					1000
																				).toFixed(0)}{" "}
																				GB
																			</TableCell>
																			<TableCell className="text-right text-primary">
																				¥
																				{gpuType.prices.filter(
																					(price) =>
																						price.period === "one_hour",
																				)[0].price / 100}
																				{" / 小时"}
																			</TableCell>
																		</TableRow>
																	))}
															</TableBody>
														</Table>
													</TabsContent>

													<TabsContent value="cpu">
														<Table>
															<TableHeader>
																<TableRow>
																	<TableHead className="w-12" />
																	<TableHead>CPUs</TableHead>
																	<TableHead>Memory</TableHead>
																	<TableHead>Disk</TableHead>
																	<TableHead className="text-right">
																		Price
																	</TableHead>
																</TableRow>
															</TableHeader>
															<TableBody>
																{gpuTypes
																	.filter((type) => type.gpu_memory === 0)
																	.map((gpuType) => (
																		<TableRow key={gpuType.name}>
																			<TableCell>
																				<FormItem className="flex items-center space-x-3 space-y-0">
																					<FormControl>
																						<RadioGroupItem
																							value={gpuType.name}
																						/>
																					</FormControl>
																				</FormItem>
																			</TableCell>
																			<TableCell>{gpuType.cpu} 核</TableCell>
																			<TableCell>
																				{(
																					gpuType.memory /
																					1024 /
																					1024 /
																					1024
																				).toFixed(1)}{" "}
																				GB
																			</TableCell>
																			<TableCell>
																				{gpuType.disk_type}{" "}
																				{(
																					gpuType.disk_size /
																					1024 /
																					1024 /
																					1024
																				).toFixed(0)}{" "}
																				GB
																			</TableCell>
																			<TableCell className="text-right text-primary">
																				¥
																				{gpuType.prices.filter(
																					(price) =>
																						price.period === "one_hour",
																				)[0].price / 100}
																			</TableCell>
																		</TableRow>
																	))}
															</TableBody>
														</Table>
													</TabsContent>
												</Tabs>
											</RadioGroup>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{availableZones.length > 0 && (
								<FormField
									name="zone"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>区域</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="选择主机部署的区域" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{availableZones.map((zone) => (
														<SelectItem value={zone.name} key={zone.name}>
															{zone.display_name}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
											<FormDescription>选择主机部署的区域</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
							)}
							<FormField
								control={form.control}
								name="image"
								render={({ field }) => (
									<FormItem>
										<FormLabel>镜像</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="选择一个镜像" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="pytorch:2.4.0-py3.11-cuda12.4.1-devel-ubuntu22.04">
													pytorch:2.4.0-py3.11-cuda12.4.1-devel-ubuntu22.04
												</SelectItem>
											</SelectContent>
										</Select>
										<FormDescription>选择一个镜像</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								name="lease_period"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel>计费方式</FormLabel>
										<FormControl>
											<RadioGroup
												defaultValue="one_hour"
												onValueChange={field.onChange}
											>
												<div className="flex items-center space-x-2">
													<RadioGroupItem value="one_hour" id="one_hour" />
													<Label htmlFor="one_hour">租 1 小时</Label>
												</div>
												<div className="flex items-center space-x-2">
													<RadioGroupItem value="one_day" id="one_day" />
													<Label htmlFor="one_day">租 1 天</Label>
												</div>
												<div className="flex items-center space-x-2">
													<RadioGroupItem value="one_week" id="one_week" />
													<Label htmlFor="one_week">租 1 周</Label>
												</div>
												<div className="flex items-center space-x-2">
													<RadioGroupItem value="one_month" id="one_month" />
													<Label htmlFor="one_month">租 1 月</Label>
												</div>
												<div className="flex items-center space-x-2">
													<RadioGroupItem value="real_time" id="real_time" />
													<Label htmlFor="real_time">实时计费</Label>
												</div>
											</RadioGroup>
										</FormControl>
										<FormDescription />
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								name="auto_renew_period"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel>自动续租</FormLabel>
										<FormControl>
											<RadioGroup
												defaultValue="real_time"
												onValueChange={field.onChange}
											>
												<div className="flex items-center space-x-2">
													<RadioGroupItem value="none" id="none" />
													<Label htmlFor="none">关闭</Label>
												</div>
												<div className="flex items-center space-x-2">
													<RadioGroupItem value="one_hour" id="one_hour" />
													<Label htmlFor="one_hour">按小时续租</Label>
												</div>
												<div className="flex items-center space-x-2">
													<RadioGroupItem value="one_day" id="one_day" />
													<Label htmlFor="one_day">按天续租</Label>
												</div>
												<div className="flex items-center space-x-2">
													<RadioGroupItem value="one_week" id="one_week" />
													<Label htmlFor="one_week">按周续租</Label>
												</div>
												<div className="flex items-center space-x-2">
													<RadioGroupItem value="one_month" id="one_month" />
													<Label htmlFor="one_month">按月续租</Label>
												</div>
												<div className="flex items-center space-x-2">
													<RadioGroupItem value="real_time" id="real_time" />
													<Label htmlFor="real_time">实时计费</Label>
												</div>
											</RadioGroup>
										</FormControl>
										<FormDescription />
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								name="coupon"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel>优惠卷</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={""}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{coupons.map((coupon) => (
													<SelectItem
														value={coupon.uid || ""}
														key={coupon.uid}
														disabled={coupon.used}
													>
														{coupon.display_name}
														{coupon.used && "【已使用】"}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormDescription>选择想要使用的优惠劵</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							{form.formState.errors.root && (
								<div className="text-[0.8rem] font-medium text-destructive">
									{form.formState.errors.root.message}
								</div>
							)}
							{cost}
							<Button variant="outline" type="submit">
								创建
							</Button>
						</form>
					</Form>
				</ContentSection>
			</Layout.Body>
		</Layout>
	);
}
