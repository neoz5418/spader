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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useListWorkspaceZonesHook } from "@/gen";
import { useCreateInstanceHook } from "@/gen/hooks/useCreateInstanceHook";
import { useListWorkspaceGpuTypesHook } from "@/gen/hooks/useListWorkspaceGpuTypesHook";
import {
	type CreateInstanceRequestSchema,
	createInstanceRequestSchema,
} from "@/gen/zod/createInstanceRequestSchema.gen";
import { useAuth } from "@/hooks/use-auth";
import { useCurrentWorkspace } from "@/hooks/use-setting.ts";
import { toast } from "@/hooks/use-toast.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export default function DeployForm() {
	const { currentWorkspace } = useCurrentWorkspace();
	const { workspace } = useParams();
	const navigate = useNavigate();
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
		mode: "onChange",
	});

	const { user: currentUser } = useAuth();

	const {
		mutate: createInstance,
		error,
		data,
	} = useCreateInstanceHook(currentUser?.name || "");

	function onSubmit(data) {
		createInstance(data);
	}

	function onSubmitError(error: any) {
		toast({
			variant: "destructive",
			title: "创建失败",
			description: error.message,
		});
	}

	useEffect(() => {
		if (data) {
			toast({
				title: "创建成功",
				description: JSON.stringify(data),
			});
			navigate(`/workspaces/${workspace}/instances`);
		}
	}, [data, navigate, workspace]);

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
								name="gpu_type"
								render={({ field }) => (
									<FormItem>
										<FormLabel>GPU类型</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="选择一个GPU类型" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{gpuTypes.map((gpuType) => (
													<SelectItem value={gpuType.name} key={gpuType.name}>
														{gpuType.display_name}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormDescription>选择一个GPU类型</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
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
												<SelectItem value="2">2</SelectItem>
												<SelectItem value="4">4</SelectItem>
												<SelectItem value="8">8</SelectItem>
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
												<SelectItem value="pytorch:2.0.1-py3.10-rocm5.7-ubuntu18.04">
													pytorch:2.0.1-py3.10-rocm5.7-ubuntu18.04
												</SelectItem>
												<SelectItem value="pytorch:2.0.1-py3.10-rocm5.7-ubuntu20.04">
													pytorch:2.0.1-py3.10-rocm5.7-ubuntu20.04
												</SelectItem>
												<SelectItem value="pytorch:2.0.1-py3.10-rocm5.7-ubuntu22.04">
													pytorch:2.0.1-py3.10-rocm5.7-ubuntu22.04
												</SelectItem>
											</SelectContent>
										</Select>
										<FormDescription>选择一个镜像</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							{error && <p className="text-red-500">{error.message}</p>}
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
