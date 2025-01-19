'use client'

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ControllerRenderProps, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createInstanceRequestSchema } from "@/gen/zod/createInstanceRequestSchema.gen"
import { useListWorkspaceGpuTypesHook } from "@/gen/hooks/useListWorkspaceGpuTypesHook"
import { useCurrentWorkspace } from "@/hooks/use-setting"
import { useNavigate, useParams } from "react-router-dom"
import { useCreateInstanceHook } from "@/gen/hooks/useCreateInstanceHook"
import { useListWorkspaceZonesHook } from "@/gen/hooks/useListWorkspaceZonesHook"
import { useListWorkspaceCouponsHook } from "@/gen/hooks/useListWorkspaceCouponsHook"
import { CreateInstanceRequestSchema } from "@/gen/zod/createInstanceRequestSchema.gen"
import { useCalculateInstanceCostHook } from "@/gen/hooks/useCalculateInstanceCostHook"
import { FormControl, FormField, FormMessage } from "@/components/ui/form"
import { FormLabel } from "@/components/ui/form"
import { FormDescription, FormItem } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Memory } from "@/utils/zod"
import { GPU } from "@/utils/zod"

interface ResourceSectionProps {
  field: ControllerRenderProps<any, "resource">;
}

export function ResourceSection(form: any) {
  const { currentWorkspace } = useCurrentWorkspace();
	const [currentGpuType, setCurrentGpuType] = useState<string>("");
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


  const [gpuModel, setGpuModel] = useState("RTX 4090")
  const [gpuCount, setGpuCount] = useState("1")
  const [gpuAvailableCount, setGpuAvailableCount] = useState<string[]>([])
  const [selectedRegion, setSelectedRegion] = useState("内蒙B区")

  const availableZones = useMemo(() => {
		const gpuType = gpuTypes.find((gpuType) => gpuType.name === currentGpuType);
    if (!gpuType) {
      return zones
    }
		return zones.filter((zone) => gpuType?.zones.includes(zone.name));
	}, [currentGpuType, gpuTypes, zones]);


  const availableGpuCount = useMemo(() => {
    const gpuType = gpuTypes.find((gpuType) => gpuType.name === currentGpuType);
    if (!gpuType) {
      return [1,2,3,4,5,6,7,8,9,10]
    }
    return Array.from({ length: gpuType.gpu_count }, (_, index) => index + 1)
  }, [currentGpuType, gpuTypes])


  return (
  <FormField
    name="gpu_type"
    control={form.control}
    render={({ field }) => (
    <FormItem>
    <FormLabel>资源配置</FormLabel>
    <FormControl>
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="space-y-6">
        <Tabs defaultValue="gpu">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="gpu">GPU</TabsTrigger>
            <TabsTrigger value="cpu">CPU</TabsTrigger>
          </TabsList>
          <TabsContent value="gpu" className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">GPU型号</h3>
            <div className="flex gap-4">
              {gpuTypes
                .filter((type) => type.gpu_memory > 0)
                .map((gpuType) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                  <FormControl>
                    <Checkbox
                    onCheckedChange={
                      (e) => {
                        console.log(e, gpuType)
                      }
                    }
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    {GPU(gpuType.name)}
                  </FormLabel>
                  <FormDescription>
                    {Memory(gpuType.gpu_memory)}
                  </FormDescription>
                  </div>
                </FormItem>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">GPU数量</h3>
            <div className="flex flex-wrap gap-2">
              {['1', '2', '3', '4', '5', '6', '7', '8', '10', '12'].map((count) => (
                <Button
                  type="button"
                  key={count}
                  variant={gpuCount === count ? "default" : "outline"}
                  onClick={() => setGpuCount(count)}
                  size="sm"
                >
                  {count}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">规格列表</h3>
            <Card>
              <CardContent className="p-4">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">实例</th>
                      <th className="text-left p-2">配置</th>
                      <th className="text-left p-2">价格</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">205机</td>
                      <td className="p-2">
                        <div>CPU: 16核 内存: 120GB</div>
                        <div className="text-sm text-muted-foreground">Xeon(R) Gold 6430</div>
                      </td>
                      <td className="p-2 text-red-500">¥2.19/时</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>

          </TabsContent>
          <TabsContent value="cpu">
            <div>
              <h3 className="text-lg font-semibold">CPU型号</h3>
            </div>
          </TabsContent>
        </Tabs>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">区域选择</h3>
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="选择区域" />
              </SelectTrigger>
              <SelectContent>
                {availableZones.map((zone) => (

                  <SelectItem key={zone.name} value={zone.name}>
                    {zone.display_name}
                    <Badge className="ml-2 bg-red-500" variant="secondary">
                      HOT
                    </Badge>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="bg-muted p-4 rounded-md">
            <h4 className="font-medium mb-2">实例规格汇总</h4>
            <div className="grid grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">GPU：</span>
                <span>RTX 4090 × 1卡</span>
              </div>
              <div>
                <span className="text-muted-foreground">CPU：</span>
                <span>16核心</span>
              </div>
              <div>
                <span className="text-muted-foreground">内存：</span>
                <span>120GB</span>
              </div>
              <div>
                <span className="text-muted-foreground">系统盘：</span>
                <span>30GB</span>
              </div>
              <div className="col-span-4">
                <span className="text-muted-foreground">免费系统盘：</span>
                <span>50GB SSD</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    </FormControl>
    <FormDescription />
    <FormMessage />
    </FormItem>
    )}
    />
  )
}

