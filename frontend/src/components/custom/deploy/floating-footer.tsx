'use client'

import { Button } from "@/components/ui/button"
import { useNavigate, useParams } from "react-router-dom";
import useIsCollapsed from "@/hooks/use-is-collapsed";

export function FloatingFooter() {
  const { workspace } = useParams();
  const navigate = useNavigate();

  const GoBack = () => {
    navigate(`/workspaces/${workspace}/instances`)
  }
  
  return (
    <div 
      className="fixed bottom-0 right-0 border-t bg-background p-4 transition-[left] duration-300 left-0 md:left-[240px]"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div>
            日常费用: <span className="text-red-500">¥0.00/日</span>
          </div>
          <div>
            配置费用: <span className="text-red-500">¥2.19/时</span>
          </div>
          <div className="text-sm text-muted-foreground">
            账户余额: ¥-0.32
          </div>
        </div>
        <div className="flex gap-4">
          <Button onClick={GoBack} variant="outline">取消</Button>
          <Button>立即创建</Button>
        </div>
      </div>
    </div>
  )
}

