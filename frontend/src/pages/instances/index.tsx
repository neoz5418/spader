import { Input } from "@/components/ui/input"
import InstanceItem from "./instance"
import { useMemo, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Link, useSearchParams } from "react-router-dom"
import { SimplePagination } from "@/components/custom/simple-pagination"
import { getInstancesColumns } from "./columns"
import { useCurrentWorkspace } from "@/hooks/use-setting"
import { useEvents } from "@/hooks/use-watch"
import { ListWorkspaceInstancesQueryResponseType } from "@/gen/ts/ListWorkspaceInstancesType"
import { Updater, useQuery } from "@tanstack/react-query"
import { listWorkspaceInstances } from "@/gen/clients/listWorkspaceInstances"
import { PaginationState } from "@tanstack/react-table"
import { Loader, Search, RotateCw } from "lucide-react"
import { debounce } from 'lodash'
// const instances = [
//     {
//       title: "ComfyUI-Archi1",
//       id: "ID: gsxgjf8xknfkif2",
//       specs: {
//         gpu: "1x RTX 2000 Ada",
//         cpu: "6 vCPU",
//         ram: "31 GB RAM",
//       },
//       version: "zeropi/comfy-docker:0.0.1",
//       status: "On-Demand - Secure Cloud",
//       volumeInfo: {
//         disk: "70 GB Disk",
//         podVolume: "100 GB Pod Volume",
//         path: "Volume Path: /workspace",
//       },
//       networkMetrics: {
//         io: "8320 Mbps",
//         download: "4849 Mbps",
//         upload: "6213 Mbps",
//       },
//       logs: [
//         "10:04:02    b13aa89ca13c Downloading [==================>    ] 3.349GB/7.181GB",
//         "10:04:02    007bf3599cc6 Extracting [=====>              ] 332MB/3.084GB",
//         "10:04:02    7890c5d7676e Downloading [==================>    ] 3.436GB/7.85GB",
//         "10:04:02    b13aa89ca13c Downloading [==================>    ] 3.387GB/7.181GB",
//         "10:04:02    007bf3599cc6 Extracting [=====>              ] 339.2MB/3.084GB",
//         "10:04:02    7890c5d7676e Downloading [==================>    ] 3.4531GB/7.85GB",
//         "10:04:02    b13aa89ca13c Downloading [==================>    ] 3.403GB/7.181GB",
//         "10:04:02    007bf3599cc6 Extracting [=====>              ] 345.6MB/3.084GB",
//         "10:04:02    7890c5d7676e Downloading [==================>    ] 3.469GB/7.85GB",
//       ],
//       pricePerHour: "$0.28/hr",
//     },
//     {
//         title: "ComfyUI-Archi2",
//     },
//     {
//         title: "ComfyUI-Archi3",
//     },
//     {
//         title: "ComfyUI-Archi4",
//     },
//     {
//         title: "ComfyUI-Archi5",
//     },
//     {
//         title: "ComfyUI-Archi6",
//     },
//     {
//         title: "ComfyUI-Archi7",
//     },
//     {
//         title: "ComfyUI-Archi8",
//     },
//     {
//         title: "ComfyUI-Archi9",
//     },
//     {
//         title: "ComfyUI-Archi10",
//     },
//   ]

interface Event {
    resource: {
        uid: string;
    };
}


export default function InstanceList() {
    const { currentWorkspace, isLoading: isWorkspaceLoading } =
    useCurrentWorkspace();
    const [searchParams, setSearchParams] = useSearchParams();
    const events: Event[] = useEvents();
    const pagination = {
        pageIndex: Number.parseInt(searchParams.get("pageIndex") || "0"),
        pageSize: Number.parseInt(searchParams.get("pageSize") || "10"),
    };

    const {
        data: result,
        isLoading: isInstancesLoading,
        refetch,
    } = useQuery<ListWorkspaceInstancesQueryResponseType | null, Error>({
        queryKey: ["instances", pagination.pageIndex, pagination.pageSize, searchParams.get('name')],
        queryFn: () =>
            listWorkspaceInstances(currentWorkspace?.name || "", {
                offset: pagination.pageIndex * pagination.pageSize,
                limit: pagination.pageSize,
                search: searchParams.get('name') || '',
            }),
        enabled: !!currentWorkspace,
    });

    const items = result?.items || [];
    const totalPages = useMemo(() => {
        if (!result?.pagination?.total) return 0;
        return Math.ceil(result?.pagination?.total/pagination.pageSize) || 0;
    }, [result?.pagination?.total, pagination.pageSize]);

    // function setPagination(updater: Updater<PaginationState>) {
    //     let state: PaginationState;
    //     if (typeof updater === "function") {
    //         state = updater(pagination);
    //     } else {
    //         state = updater;
    //     }

    //     searchParams.set("pageIndex", state.pageIndex.toString());
    //     searchParams.set("pageSize", state.pageSize.toString());
    //     setSearchParams(searchParams);
    // }

    const updatedItems = items
        .map((instance) => {
            events.map((event) => {
                if (event.resource.uid === instance.uid) {
                    instance = {
                        ...instance,
                        ...event.resource,
                    };
                }
            });
            return instance;
        })
        .filter((instance) => instance.delete_time === null);

    const instances = useMemo(
        () =>
            (updatedItems ?? []).map((item) => {
                console.log("updatedItems", item);
                const ret = {
                    uid: item.uid,
                    name: item.name,
                    display_name: item.display_name,
                    status: item.status,
                    image: item.image,
                    workspace: item.workspace,
                    zone: item.zone,
                    zone_display_name: item.zone_display_name,
                    gpu_display_name: item.gpu_display_name,
                    gpu_type: item.gpu_type,
                    services: item.services,
                    lease_status: item.lease_status,
                    gpu_memory: item.gpu_memory,
                    memory: item.memory,
                    cpu: item.cpu,
                    disk_size: item.disk_size,
                    disk_type: item.disk_type,
                    accelerator_type: item.accelerator_type,
                    accelerator: item.accelerator,
                    create_time: item.create_time,
                    price: item.price,
                    auto_renew_period: item.auto_renew_period,
                };
                return ret;
            }),
        [updatedItems],
    );

    const debouncedSearch = useCallback(
        debounce((value: string) => {
            console.log("value", value);
            setSearchParams({ name: value, pageIndex: "0", pageSize: "10" });
        }, 500),
        []  // Empty dependency array since we don't want to recreate the debounced function
    );

    if (isWorkspaceLoading || isInstancesLoading) {
        return <Loader />;
    }

    const createLink = `/workspaces/${currentWorkspace?.name}/instances/deploy`
    return (
        <div className="space-y-4 md:px-8  p-4">
            <div className="flex items-center justify-between">
                <Button variant="default" asChild>
                    <Link to={createLink}>新建</Link>
                </Button>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2'>
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="搜索资源名称"
                                    defaultValue={searchParams.get('name') || ''}
                                    onChange={(event) => debouncedSearch(event.target.value)}
                                    className="h-8 w-[150px] lg:w-[250px] pl-8"
                                />
                            </div>
                            <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => refetch()}
                                className="h-8 w-8"
                            >
                                <RotateCw className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
           
            {instances.map((instance) => (
                <InstanceItem key={instance.uid} {...instance} />
            ))}

            <p className="text-sm text-muted-foreground mt-4">
                计费说明: 所有计费价格每小时刷新。
            </p>

            <SimplePagination
                page={pagination.pageIndex + 1}
                totalPages={totalPages}
                onPageChange={(page) => setSearchParams({ pageIndex: page.toString() })}
                className="mt-4"
            />
        </div>
    )
    }

