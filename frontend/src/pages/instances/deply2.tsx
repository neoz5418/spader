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
	GpuTypePublicType,
	ImageType,
	ZoneType,
	createInstance,
	BillingCouponType,
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

//========
import { BillingSection } from "@/pages/instances/deploy/billing-section"
import { ResourceSection } from "@/pages/instances/deploy/resource-section"
import { ImageSection } from "@/pages/instances/deploy/image-section"
import { CouponSection } from "@/pages/instances/deploy/coupon-section"
import { FloatingFooter } from "@/pages/instances/deploy/floating-footer"



export default function DeployForm() {
    const { currentWorkspace } = useCurrentWorkspace();
	const [selectedInstanceType, setSelectedInstanceType] = useState<GpuTypePublicType|null>(null);
	const [selectedMethod, setSelectedMethod] = useState("real_time")
	const [selectedImage, setSelectedImage] = useState<ImageType|null>(null);
	const [selectedCoupon, setSelectedCoupon] = useState<BillingCouponType|null>(null);
	const [selectedZone, setSelectedZone] = useState<string>("auto");
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

	const { mutateAsync, data: costResult } = useCalculateInstanceCostHook(
		currentWorkspace?.name || "",
	);

	const emptyValue = "none";
	const form = useForm<CreateInstanceRequestSchema>({
		resolver: zodResolver(createInstanceRequestSchema),
		defaultValues: {
			lease_period: "real_time",
			auto_renew_period: "real_time",
			coupon: emptyValue,
			zone: "auto",
		},
		mode: "onChange",
		criteriaMode: "all",
	});

	function onSubmit(data: CreateInstanceRequestSchema) {
		if (!currentWorkspace) {
			return;
		}
		if (data.coupon === emptyValue) {
			data.coupon = null;
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
				if (values.coupon === emptyValue) {
					values.coupon = null;
				}
				mutateAsync(values).catch((e) => {
					handleFormError(e, form);
				});
			}
		});
		return () => subscription.unsubscribe();
	}, [form.watch]);

    console.log("selectedMethod", selectedMethod)

    return (
        <Layout>
			<Layout.Body>
				<ContentSection title="创建容器实例" desc="选择一个容器实例规格">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit, onSubmitError)}
							className="space-y-8 "
						>
							{/* <FormField
								name="auto_renew_period"
								type={'hidden'}
								control={form.control}
								render={({ field }) => (
									<input value={field.value || ""}/>
								)}
							/>
							<FormField
								name="gpu_type"
								type={'hidden'}
								control={form.control}
								render={({ field }) => (
									<input value={field.value || ""}/>
								)}
							/>
							<FormField
								name="zone"
								type={'hidden'}
								control={form.control}
								render={({ field }) => (
									<input value={field.value || ""}/>
								)}
							/>
							<FormField
								name="image"
								control={form.control}
								render={({ field }) => (
									<input value={field.value || ""}/>
								)}
							/>
							<FormField
								name="coupon"
								type={'hidden'}
								control={form.control}
								render={({ field }) => (
									<input value={field.value || ""}/>
								)}
							/> */}

							<div className="min-h-screen pb-20">
								<div className="mx-auto max-w-7xl p-6 space-y-8">
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
									<ResourceSection 
										form={form} 
										selectedMethod={selectedMethod}
										selectedInstanceType={selectedInstanceType}
										setSelectedInstanceType={setSelectedInstanceType}
										selectedZone={selectedZone}
										setSelectedZone={setSelectedZone}
									/>
									<ImageSection 
										form={form} 
										selectedImage={selectedImage} 
										setSelectedImage={setSelectedImage}
									/> 
									<BillingSection 
										form={form}
										selectedMethod={selectedMethod}
										setSelectedMethod={setSelectedMethod}
										/>
									<CouponSection 
										form={form}
										selectedCoupon={selectedCoupon}
										setSelectedCoupon={setSelectedCoupon}
									/>  
								</div>
								<FloatingFooter
									selectedMethod={selectedMethod}
									selectedCoupon={selectedCoupon}
									selectedInstanceType={selectedInstanceType}
								/>
							</div>
						</form>
					</Form>
				</ContentSection>
			</Layout.Body>
		</Layout>
    )
}

