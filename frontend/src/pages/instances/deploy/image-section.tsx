'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useQuery } from "@tanstack/react-query";
import { listWorkspaceImages } from "@/gen/clients/listWorkspaceImages";
import { ControllerRenderProps } from "react-hook-form";
import { ImageType } from "@/gen/ts/ImageType";
import { architecture, ArchitectureType } from "@/gen/ts/ArchitectureType";
import { imageVisibility, ImageVisibilityType } from "@/gen/ts/ImageVisibilityType";
import { WorkspaceType } from "@/gen/ts/WorkspaceType";
import { useCurrentWorkspace } from "@/hooks/use-setting";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label";
import { Check, ImageIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";

import PytorchIcon from '/icon/pytorch.png';
import VllmIcon from '/icon/vllm.png';
import TensorflowIcon from '/icon/tensorflow.png';
import DockerIcon from '/icon/docker.png';
import UbuntuIcon from '/icon/ubuntu.png';
import { FormMessage } from "@/components/ui/form";
import { FormDescription } from "@/components/ui/form";
import { FormField } from "@/components/ui/form";
import { FormItem } from "@/components/ui/form";
import { FormLabel } from "@/components/ui/form";
import { FormControl } from "@/components/ui/form";


const imageIcons = {
  "pytorch": PytorchIcon,
  "vllm": VllmIcon,
  "tensorflow": TensorflowIcon,
  "docker": DockerIcon,
  "ubuntu": UbuntuIcon,
}



const images: ImageType[] = [
  {
    name: "base",
    url: "pytorch:2.4.0-py3.11-cuda12.4.1-devel-ubuntu22.04",
    display_name: "基础镜像（PyTorch 2.4.0）",
    description: "包含深度学习基础软件，如：深度学习框架、CUDA、PyTorch等",
    architecture: architecture.amd64,
    visibility: imageVisibility.public,
    metadata: {
      icon: "pytorch",
      version: "2.4.0",
      python_version: "3.11",
      framework: "PyTorch 2.0",
      cuda_version: "12.4.1",
      os: "ubuntu22.04",
    },
  },
  {
    name: "custom",
    url: "pytorch:2.5.0-py3.11-cuda12.4.1-devel-ubuntu22.04",
    display_name: "基础镜像（PyTorch 2.5.0）[模拟数据]",
    description: "包含深度学习基础软件，如：深度学习框架、CUDA、PyTorch等",
    architecture: architecture.amd64,
    visibility: imageVisibility.public,
    metadata: {
      icon: "pytorch",
      version: "2.5.0",
      python_version: "3.12",
      framework: "PyTorch 2.0",
      cuda_version: "12.5",
      os: "ubuntu22.04",
    },
  },
  {
    name: "vllm",
    url: "vllm:1.0.0-py3.11-cuda12.4.1-devel-ubuntu22.04",
    display_name: "vLLM 镜像[模拟数据]",
    description: "推理框架vLLM",
    architecture: architecture.amd64,
    visibility: imageVisibility.public,
    metadata: {
      icon: "vllm",
      version: "1.0.0",
      python_version: "3.12",
      framework: "vLLM 1.0.0",
      cuda_version: "12.4.1",
      os: "ubuntu22.04",
    },
  },
  {
    name: "ubuntu",
    url: "ubuntu:20.04",
    display_name: "Ubuntu 20.04",
    description: "纯净的Ubuntu 20.04",
    architecture: architecture.amd64,
    visibility: imageVisibility.public,
    metadata: {
      version: "20.04",
      os: "ubuntu20.04",
    },
  },
  {
    name: "ubuntu",
    url: "ubuntu:22.04",
    display_name: "Ubuntu 22.04",
    description: "纯净的Ubuntu 22.04",
    architecture: architecture.amd64,
    visibility: imageVisibility.public,
    metadata: {
      icon: "ubuntu",
      version: "22.04",
      os: "ubuntu22.04",
    },
  },
]


interface ImageSectionProps {
  selectedImage: ImageType | null;
  setSelectedImage: (image: ImageType | null) => void;
}

export function ImageSection({ form, selectedImage, setSelectedImage }: ImageSectionProps) {
  // const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  // const { currentWorkspace } = useCurrentWorkspace();
  // const { data: images, isLoading: imagesLoading } = useQuery<ImageType[], Error>({
  //   queryKey: ["images"],
  //   queryFn: () => {
  //     const workspace = currentWorkspace as WorkspaceType
  //     return listWorkspaceImages(workspace.name, "default", {})
  //   },
  //   select: (data) => {
  //     console.log("data", data) 
  //     return data?.items || []
  //   },
  //   enabled: !!currentWorkspace,
  // })

  const [open, setOpen] = useState(false)
  
  interface Template {
    id: string
    title: string
    imagePath: string
    type: "community" | "official"
  }

  const [searchQuery, setSearchQuery] = useState("")
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const filteredImages = images.filter(
    (image) =>
      image.display_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.url.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleImageSelect = (image: ImageType) => {
    setSelectedImage(image)
    setOpen(false) // 选择后关闭对话框
    form.setValue("image", image.url)
    console.log("selectedImage", selectedImage)
  }

  return (
    <FormField
        name="image"
        control={form.control}
        render={({ field }) => (
            <FormItem>
                <FormLabel>镜像</FormLabel>
                <FormControl>
                  <Card className="w-full">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h2 className="text-lg font-semibold">镜像选择</h2>
                          <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                              <Button size="sm">
                                选择镜像
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[725px]">
                              <DialogHeader>
                                <DialogTitle>镜像选择</DialogTitle>
                                <DialogDescription>
                                </DialogDescription>
                              </DialogHeader>
                              <div className="w-full max-w-4xl mx-auto p-6">
                                <div className="flex flex-col space-y-4">
                                  <Input
                                    placeholder="Find something to deploy..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="max-w-full"
                                  />

                                  <div className="mt-8">
                                    <div className="grid gap-4" >
                                      {filteredImages 
                                        .map((image) => (
                                          <ImageCard
                                            key={image.name}
                                            image={image}
                                            onSelect={handleImageSelect}
                                            isSelected={selectedImage?.name === image.name}
                                            onCopy={() => handleCopy(image.url, image.name)}
                                            isCopied={copiedId === image.name}
                                          />
                                        ))}
                                    </div>
                                  </div>
              {/* 
                                  <div className="mt-8">
                                    <h3 className="text-lg font-medium mb-4">Official</h3>
                                    <div className="grid gap-4">
                                      {filteredTemplates
                                        .filter((t) => t.type === "official")
                                        .map((template) => (
                                          <TemplateCard
                                            key={template.id}
                                            template={template}
                                            onCopy={() => handleCopy(template.imagePath, template.id)}
                                            isCopied={copiedId === template.id}
                                          />
                                        ))}
                                    </div>
                                  </div> */}
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>

                        {selectedImage && ( 
                        <Card className="flex items-center p-4 hover:bg-accent/50 transition-colors">
                          <div className="h-8 w-8 mr-4">
                            <img
                              src={selectedImage.metadata.icon ? imageIcons[selectedImage.metadata.icon] : DockerIcon}
                              alt=""
                              className="h-8 w-8 rounded"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium truncate">{selectedImage.display_name}</h4>
                            <p className="text-sm text-muted-foreground truncate">{selectedImage.url}</p>
                          </div>
                          <div className="flex gap-1">
                            {selectedImage.metadata.cuda_version && <Badge variant="outline" className="bg-green-500 text-white">CUDA {selectedImage.metadata.cuda_version}</Badge>}
                            {selectedImage.metadata.framework && <Badge variant="outline" className="bg-green-500 text-white">{selectedImage.metadata.framework}</Badge>}
                          </div>
                        </Card>
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


interface ImageCardProps {
  image: ImageType
  onSelect: (image: ImageType) => void
  onCopy: () => void
  isCopied: boolean
}

function ImageCard({ image, onSelect, onCopy, isCopied }: ImageCardProps) {
  return (
    <Card className="flex items-center p-4 hover:bg-accent/50 transition-colors" onClick={() => onSelect(image)}>
      <div className="h-8 w-8 mr-4">
        <img
          src={image.metadata.icon ? imageIcons[image.metadata.icon] : DockerIcon}
          alt=""
          className="h-8 w-8 rounded"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium truncate">{image.display_name}</h4>
        <p className="text-sm text-muted-foreground truncate">{image.url}</p>
      </div>
      <Button variant="ghost" size="icon" className={cn("ml-4 h-8 w-8", isCopied && "text-green-500")} onClick={onCopy}>
        {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        <span className="sr-only">Copy docker image path</span>
      </Button>
    </Card>
  )
}

