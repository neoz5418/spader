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
import { Memory, Disk, Price, GPU } from "@/utils/format"
import { z } from "@/utils/zod"
import { isLoggedIn } from "@/hooks/use-auth"
import { listAcceleratorTypes } from "@/gen/clients/listAcceleratorTypes"
import { useQuery } from "@tanstack/react-query"
import { listWorkspaceGpuTypes } from "@/gen/clients/listWorkspaceGpuTypes"
import { ListWorkspaceGpuTypesQueryResponseType } from "@/gen/ts/ListWorkspaceGpuTypesType"
import { WorkspaceType } from "@/gen/ts/WorkspaceType"
import { PaginatedListAcceleratorTypeType } from "@/gen/ts/PaginatedListAcceleratorTypeType"
import { ZoneType } from "@/gen/ts/ZoneType"
import { ListWorkspaceZonesQueryResponseType } from "@/gen/ts/ListWorkspaceZonesType"
import { listWorkspaceZones } from "@/gen/clients/listWorkspaceZones"
import { listWorkspaceCoupons } from "@/gen/clients/listWorkspaceCoupons"
import { ListWorkspaceCouponsQueryResponseType } from "@/gen/ts/ListWorkspaceCouponsType"
import { AcceleratorTypeType } from "@/gen/ts/AcceleratorTypeType"
import { GpuTypePublicType } from "@/gen/ts/GpuTypePublicType"

interface ResourceSectionProps {
  selectedMethod: string;
  selectedInstanceType: GpuTypePublicType | null;
  setSelectedInstanceType: (instanceType: GpuTypePublicType | null) => void;
}

export function ResourceSection({ form, selectedMethod, selectedInstanceType, setSelectedInstanceType ,selectedZone, setSelectedZone}: ResourceSectionProps) {
  const { currentWorkspace } = useCurrentWorkspace();
	const [currentAcceleratorType, setCurrentAcceleratorType] = useState<string[]>([]); // 当前选择的加速器型号
	const { workspace } = useParams();
	const navigate = useNavigate();
	const { mutateAsync: createInstanceAsync } = useCreateInstanceHook(
		currentWorkspace?.name || "",
	);

  const { data: acceleratorTypes, isLoading } = useQuery<AcceleratorTypeType[], Error>({
    queryKey: ["acceleratorTypes"],
    queryFn: () => listAcceleratorTypes({}),
    enabled: isLoggedIn(),
    select: (data) => {
      console.log("data", data)
      return (data && 'items' in data) ? data.items : []
    },
  })

  const { data: instanceTypes, isLoading: instanceTypesLoading } = useQuery<GpuTypePublicType[], Error>({
    queryKey: ["gpuTypes"],
    queryFn: () => {
      const workspace = currentWorkspace as WorkspaceType
      return listWorkspaceGpuTypes(workspace.name)
    },
    select: (data) => {
      console.log("data", data) 
      return (data && 'items' in data) ? data.items : []
    },
    enabled: !!currentWorkspace,
  })

  const { data: zones, isLoading: zonesLoading } = useQuery<ZoneType[], Error>({
    queryKey: ["zones"],
    queryFn: () => {
      const workspace = currentWorkspace as WorkspaceType
      return listWorkspaceZones(workspace.name)
    },
    select: (data) => {
      console.log("data", data) 
      return (data && 'items' in data) ? data.items : []
    },
    enabled: !!currentWorkspace,
  })
  
  const { data: coupons, isLoading: couponsLoading } = useQuery<ListWorkspaceCouponsQueryResponseType, Error>({
    queryKey: ["coupons"],
    queryFn: () => {
      const workspace = currentWorkspace as WorkspaceType
      return listWorkspaceCoupons(workspace.name)
    },
    select: (data) => {
      console.log("data", data) 
      return (data && 'items' in data) ? data.items : []
    },
    enabled: !!currentWorkspace,
  })

  const availableZones = useMemo(() => {
    if (!zones) {
      console.log("zones1", zones) 
      return []
    }
    if (instanceTypes) {
      const instanceType = instanceTypes.find((instanceType:GpuTypePublicType) => instanceType.name === selectedInstanceType?.name);
      if (instanceType) {
        console.log("instanceType", instanceType)
        return zones.filter((zone:ZoneType) => instanceType?.zones.includes(zone.name));
      }
    }
    console.log("zones2", zones) 
    return zones
  }, [selectedInstanceType, instanceTypes, zones]);

  const availableInstanceTypes = useMemo(() => {
    if (!instanceTypes) {
      return []
    }
    return instanceTypes.filter((instanceType:GpuTypePublicType) => {
      if (currentAcceleratorType.length === 0) {
        return true;
      }
      if (instanceType.accelerator_type) {
        return currentAcceleratorType.includes(instanceType.accelerator_type);
      }
      return false;
    });
  }, [currentAcceleratorType, instanceTypes])

  const instanceType = useMemo(() => {
    if (!instanceTypes) {
      return null
    }
    return instanceTypes.find((instanceType:GpuTypePublicType) => instanceType.name === selectedInstanceType?.name)
  }, [selectedInstanceType, instanceTypes])

  // const availableGpuCount = useMemo(() => {
  //   // 从 availableGpuTypes 中获取所有的 数量，返回一个数字数组 [1,2,3,4,5,6,7,8,9,10]
  //   const gpuSizes = availableInstanceTypes.map((instanceType:GpuTypePublicType) => instanceType.accelerator);
  //   console.log("gpuSizes", gpuSizes)
  //   // 过滤掉 null 值，重复值
  //   const uniqueGpuSizes = [...new Set(gpuSizes.filter((gpuSize:number) => gpuSize !== null))];
  //   console.log("uniqueGpuSizes", uniqueGpuSizes)
  //   return uniqueGpuSizes
  // }, [availableInstanceTypes])

  const handleInstanceTypeChange = (instanceType:GpuTypePublicType) => {
    setSelectedInstanceType(instanceType)
    form.setValue("gpu_type", instanceType.name)
    console.log("instanceType", instanceType.name, form.getValues("gpu_type"))
  }

  const handleZoneChange = (zone:string) => {
    setSelectedZone(zone)
    form.setValue("zone", zone)
  }

  const clearSelected = () => {
    setCurrentAcceleratorType([])
    setSelectedInstanceType(null)
    form.setValue("gpu_type", "")
    form.setValue("zone", "")
  }


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
        <Tabs defaultValue="gpu" onValueChange={clearSelected}>
          <TabsList className="grid w-full grid-cols-2" >
            <TabsTrigger value="gpu">GPU</TabsTrigger>
            <TabsTrigger value="cpu">CPU</TabsTrigger>
          </TabsList>
          <TabsContent value="gpu" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">GPU型号</h3>
              <div className="flex gap-4">
                {acceleratorTypes?.map((acceleratorType: AcceleratorTypeType) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                    <FormControl>
                      <Checkbox
                      onCheckedChange={
                        (e) => {
                          if (e) {
                            setCurrentAcceleratorType([...currentAcceleratorType, acceleratorType.name])
                          } else {
                            setCurrentAcceleratorType(currentAcceleratorType.filter((name) => name !== acceleratorType.name))
                          }
                          setSelectedInstanceType(null)
                        }
                      }
                      checked={currentAcceleratorType.includes(acceleratorType.name)}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      {acceleratorType.display_name}
                    </FormLabel>
                    <FormDescription>
                      {Memory(acceleratorType.gpu_memory)}
                    </FormDescription>
                    </div>
                  </FormItem>
                ))}
              </div>
            </div>

            {/* <div className="space-y-4">
              <h3 className="text-lg font-semibold">GPU数量</h3>
              <div className="flex flex-wrap gap-2">
                {['1', '2', '3', '4', '5', '6', '7', '8', '10', '12'].map((count) => (
                  <Button
                    type="button"
                    key={count}
                    disabled={!availableGpuCount.includes(Number(count))}
                    variant={gpuCount.includes(Number(count)) ? "default" : "outline"}
                    onClick={() => {
                      if (gpuCount.includes(Number(count))) {
                        setGpuCount(gpuCount.filter((c) => c !== Number(count)))
                      } else {
                        setGpuCount([...gpuCount, Number(count)] )
                      }
                    }}
                    size="sm"
                  >
                    {count}
                  </Button>
                ))}
              </div>
            </div> */}

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">规格列表</h3>
              <Card>
                <CardContent className="p-4">
                  {availableInstanceTypes.length > 0 ? (
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2"></th>
                        <th className="text-left p-2">算力型号/显存</th>
                        <th className="text-left p-2">性能模式</th>
                        <th className="text-left p-2">CPU核数</th>
                        <th className="text-left p-2">GPU数量</th>
                        <th className="text-left p-2">内存大小</th>
                        <th className="text-left p-2">系统盘容量</th>
                        <th className="text-left p-2">磁盘</th>
                        <th className="text-left p-2">价格</th>
                      </tr>
                    </thead>
                    <tbody>
                      {availableInstanceTypes
                      .filter((instanceType:GpuTypePublicType) => instanceType.gpu_memory > 0)
                      .map((instanceType:GpuTypePublicType) => (
                      <tr className="border-b">
                        <td className="p-2">
                          <Checkbox 
                          checked={instanceType.name === selectedInstanceType?.name} 
                          onCheckedChange={() => handleInstanceTypeChange(instanceType)} />
                        </td>
                        <td className="p-2">{instanceType.display_name} ({Memory(instanceType.gpu_memory)})</td>
                        <td className="p-2">普通性能</td>
                        <td className="p-2">{instanceType.cpu}</td>
                        <td className="p-2">{instanceType.accelerator}</td>
                        <td className="p-2">{Memory(instanceType.memory)}</td>
                        <td className="p-2">{Disk(instanceType.disk_size)}</td>
                        <td className="p-2">{instanceType.disk_type}</td>
                        <td className="p-2">{
                          Price(instanceType.prices.find((price) => price.period === selectedMethod)?.price, selectedMethod)
                        }</td>
                      </tr>
                      ))}
                    </tbody>
                    </table>
                  ) : (
                    <div className="text-center">
                      <p className="text-muted-foreground">库存紧张，无符合要求的规格</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="cpu">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">CPU型号</h3>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">规格列表</h3>
              <Card>
                <CardContent className="p-4">
                  {availableInstanceTypes.length > 0 ? (
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2"></th>
                        <th className="text-left p-2">CPU核数</th>
                        <th className="text-left p-2">内存大小</th>
                        <th className="text-left p-2">系统盘容量</th>
                        <th className="text-left p-2">磁盘</th>
                        <th className="text-left p-2">价格</th>
                      </tr>
                    </thead>
                    <tbody>
                      {availableInstanceTypes
                      .filter((instanceType:GpuTypePublicType) => instanceType.accelerator == 0)
                      .map((instanceType:GpuTypePublicType) => (
                      <tr className="border-b">
                        <td className="p-2">
                          <Checkbox checked={instanceType.name === selectedInstanceType?.name} 
                          onCheckedChange={() => {
                            setSelectedInstanceType(instanceType)
                          }} />
                        </td>
                        <td className="p-2">{instanceType.cpu}</td>
                        <td className="p-2">{Memory(instanceType.memory)}</td>
                        <td className="p-2">{Disk(instanceType.disk_size)}</td>
                        <td className="p-2">{instanceType.disk_type}</td>
                        <td className="p-2">{
                          Price(instanceType.prices.find((price) => price.period === selectedMethod)?.price, selectedMethod)
                        }</td>
                      </tr>
                      ))}
                    </tbody>
                    </table>
                  ) : (
                    <div className="text-center">
                      <p className="text-muted-foreground">库存紧张，无符合要求的规格</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">区域选择</h3>
            <Select value={selectedZone} onValueChange={handleZoneChange}>
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="选择区域" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem key="auto" value="auto">
                  自动分配
                </SelectItem>
                {availableZones?.map((zone:ZoneType) => ( 
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
          {instanceType && (
          <div className="bg-muted p-4 rounded-md">
            <h4 className="font-medium mb-2">实例规格汇总</h4>
            <div className="grid grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">GPU：</span>
                {instanceType.accelerator > 0 ? <span>{instanceType.display_name} × {instanceType.accelerator}卡</span> : <span>无</span>} 
              </div>
              <div>
                <span className="text-muted-foreground">CPU：</span>
                <span>{instanceType.cpu}核心</span>
              </div>
              <div>
                <span className="text-muted-foreground">内存：</span>
                <span>{Memory(instanceType.memory)}</span>
              </div>
              <div>
                <span className="text-muted-foreground">磁盘：</span>
                <span>{Disk(instanceType.disk_size)}</span>
              </div>
            </div>
          </div>
          )}
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

