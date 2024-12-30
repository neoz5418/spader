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
import { createInstance, useListWorkspaceZonesHook } from "@/gen";
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
import { useEffect, useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export default function DeployForm() {
	const { currentWorkspace } = useCurrentWorkspace();
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

	const form = useForm<CreateInstanceRequestSchema>({
		resolver: zodResolver(createInstanceRequestSchema),
	});

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

	function onSubmitError(error: any) {
		toast({
			variant: "destructive",
			title: "创建失败",
			description: error.message,
		});
	}

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
										<FormLabel>GPU类型</FormLabel>
										<FormControl>
											<RadioGroup
												onValueChange={field.onChange}
												defaultValue={field.value}
												className="flex flex-col space-y-1"
											>
												{gpuTypes.map((gpuType) => (
													<FormItem
														className="flex items-center space-x-3 space-y-0"
														key={gpuType.name}
													>
														<FormControl>
															<RadioGroupItem value={gpuType.name} />
														</FormControl>
														<FormLabel className="w-full flex justify-between ">
															<div>{gpuType.display_name}</div>
															<div>
																<span className="font-extrabold">
																	¥
																	{gpuType.prices.filter(
																		(price) => price.period === "one_hour",
																	)[0].price / 100}
																</span>
																/时
															</div>
														</FormLabel>
													</FormItem>
												))}
											</RadioGroup>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
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
												{zones.map((zone) => (
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
							<FormField
								control={form.control}
								name="gpu_count"
								render={({ field }) => (
									<FormItem>
										<FormLabel>数量</FormLabel>
										<Select
											onValueChange={(value) =>
												field.onChange(Number.parseInt(value))
											}
											defaultValue={field.value?.toString()}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="选择 GPU 数量" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="1">1</SelectItem>
												{/*<SelectItem value="2">2</SelectItem>*/}
												{/*<SelectItem value="4">4</SelectItem>*/}
												{/*<SelectItem value="8">8</SelectItem>*/}
											</SelectContent>
										</Select>
										<FormDescription>选择一个 GPU 数量</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
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
							{form.formState.errors.root && (
								<div className="text-[0.8rem] font-medium text-destructive">
									{form.formState.errors.root.message}
								</div>
							)}
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
