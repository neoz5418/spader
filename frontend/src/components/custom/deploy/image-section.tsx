'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ControllerRenderProps } from "react-hook-form";

interface ImageSectionProps {
  field: ControllerRenderProps<any, "image">;
}

export function ImageSection({ field }: ImageSectionProps) {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">镜像选择</h2>
          <Select defaultValue="base">
            <SelectTrigger className="w-full h-auto border-2">
              <SelectValue placeholder="选择镜像">
                <div className="w-full px-4 py-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">基础镜像</span>
                    <div className="flex gap-1">
                      <Badge variant="outline">CUDA 11.8</Badge>
                      <Badge variant="outline">PyTorch 2.0</Badge>
                    </div>
                  </div>
                  <div className="text-left text-sm text-muted-foreground">
                    包含深度学习基础软件，如：深度学习框架、
                  </div>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="w-[var(--radix-select-trigger-width)] p-0">
              <div className="relative">
                <SelectItem value="base" className="p-0">
                  <div className="w-full px-4 py-3 space-y-2">
                    <div>
                      <span className="font-medium">基础镜像</span>
                    </div>
                    <div className="text-left text-sm text-muted-foreground">
                      包含深度学习基础软件，如：深度学习框架
                    </div>
                  </div>
                </SelectItem>
                <div className="absolute top-3 right-11 flex gap-1">
                  <Badge variant="outline">CUDA 11.8</Badge>
                  <Badge variant="outline">PyTorch 2.0</Badge>
                </div>
              </div>
              <div className="relative">
                <SelectItem value="custom" className="p-0">
                  <div className="w-full px-4 py-3 space-y-2">
                    <div>
                      <span className="font-medium">社区镜像</span>
                    </div>
                    <div className="text-left text-sm text-muted-foreground">
                      由社区维护的预装常用软件的镜像
                    </div>
                  </div>
                </SelectItem>
                <div className="absolute top-3 right-11 flex gap-1">
                  <Badge variant="outline">CUDA 11.8</Badge>
                  <Badge variant="outline">PyTorch 2.0</Badge>
                </div>
              </div>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )
}

