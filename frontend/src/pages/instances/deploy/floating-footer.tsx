'use client'

import { Button } from "@/components/ui/button"
import { useNavigate, useParams } from "react-router-dom";
import useIsCollapsed from "@/hooks/use-is-collapsed";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { InfoIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { GpuTypePublicType } from "@/gen/ts/GpuTypePublicType";
import { BillingCouponType } from "@/gen/ts/BillingCouponType";
import { useMemo } from "react";
import { useCurrentWorkspace } from "@/hooks/use-setting";
import { useWorkspaceAccount } from "@/hooks/use-setting";
import { Currency } from "@/utils/format";
import { PriceType } from "@/gen/ts/PriceType";


interface FloatingFooterProps {
  selectedMethod: string;
  selectedCoupon: BillingCouponType | null;
  selectedInstanceType: GpuTypePublicType | null;
}

export function FloatingFooter({ selectedMethod, selectedCoupon, selectedInstanceType }: FloatingFooterProps) {
  const { workspace } = useParams();
  const navigate = useNavigate();

  const { currentWorkspace } = useCurrentWorkspace();
	const { workspacesAccount, isLoading: workspaceAccountIsLoading } =
		useWorkspaceAccount();
	const balance = workspacesAccount?.balance || 0;
	const currency = workspacesAccount?.currency || "CNY";
	const rate_per_hour = workspacesAccount?.rate_per_hour || 0;

  const GoBack = () => {
    navigate(`/workspaces/${workspace}/instances`)
  }

	const cost = useMemo(() => {
    console.log("selectedMethod", selectedMethod)
    console.log("selectedCoupon", selectedCoupon)
    console.log("selectedInstanceType", selectedInstanceType)
    const price = selectedInstanceType?.prices.find((price:PriceType) => price.period === selectedMethod)
    if (!price) {
      return null
    }else{
      console.log("price", price)
      const original_price = price.price
      const final_price = original_price - (selectedCoupon?.discount_rate || 0)
      return {
        final_price: final_price,
        original_price: original_price,
        discount_amount: selectedCoupon?.discount_rate || 0,
        billing_type: selectedMethod,
        details: [{ item: "配置费用", price: original_price, description: "配置费用" }],
        isInsufficient: balance < final_price,
      }
    }
	}, [selectedMethod, selectedCoupon, selectedInstanceType, balance])
  
  return (
    <div className="fixed bottom-0 right-0 border-t bg-background md:left-64 left-0">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          {/* 配置费用 */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">配置费用：</span>
            <span className="text-lg font-semibold text-primary">
              ¥{((cost?.final_price || 0) / 100).toFixed(2)}
            </span>
            {cost?.billing_type === "real_time" && <span className="text-sm text-muted-foreground">/小时</span>}
            
            {/* 费用详情悬浮框 */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button type="button" variant="ghost" size="sm" className="h-auto p-0">
                  <InfoIcon className="h-4 w-4 text-muted-foreground" />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80" align="start">
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold">费用详情</h4>
                  
                  {/* 费用明细 */}
                  <div className="space-y-2">
                    {cost?.details?.map((detail, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{detail.item}</span>
                        <span>¥{(detail.price / 100).toFixed(2)}</span>
                      </div>
                    ))}
                    
                    {/* 分割线 */}
                    <div className="my-2 border-t" />
                    
                    {/* 原价 */}
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">原价</span>
                      <span>¥{((cost?.original_price || 0) / 100).toFixed(2)}</span>
                    </div>
                    
                    {/* 优惠金额 */}
                    {cost?.discount_amount && cost.discount_amount > 0 && (
                      <div className="flex justify-between text-sm text-red-500">
                        <span>优惠金额</span>
                        <span>-¥{(cost.discount_amount / 100).toFixed(2)}</span>
                      </div>
                    )}
                    
                    {/* 最终价格 */}
                    <div className="flex justify-between text-base font-medium">
                      <span>最终价格</span>
                      <span className="text-primary">
                        ¥{((cost?.final_price || 0) / 100).toFixed(2)}
                        {cost?.billing_type === "real_time" && <span className="text-sm text-muted-foreground">/小时</span>}
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          {/* 账户余额 */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">账户余额：</span>
            <span className={cn(
              "text-lg font-semibold",
              cost?.isInsufficient ? "text-red-500" : "text-green-500"
            )}>
              {Currency(balance, currency)}
              {cost?.isInsufficient && <span >（余额不足）</span>}
            </span>
          </div>
        </div>

        {/* 右侧按钮 */}
        <div className="flex items-center gap-4">
          <Button onClick={GoBack} variant="outline">取消</Button>
          <Button type="submit" disabled={cost?.isInsufficient || false}>
            确认创建
          </Button>
        </div>
      </div>
    </div>
  )
}

