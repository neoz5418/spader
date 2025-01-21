import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FormMessage, FormDescription, FormField, FormLabel, FormControl, FormItem } from "@/components/ui/form";
import { listWorkspaceCoupons } from "@/gen/clients/listWorkspaceCoupons";
import { useQuery } from "@tanstack/react-query";
import { useCurrentWorkspace } from "@/hooks/use-setting";
import { ListWorkspaceCouponsQueryResponseType } from "@/gen/ts/ListWorkspaceCouponsType";
import { BillingCouponType } from "@/gen/ts/BillingCouponType";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Check, Circle, CheckCircle2 } from "lucide-react"

interface CouponSectionProps {
  selectedCoupon: BillingCouponType | null;
  setSelectedCoupon: (coupon: BillingCouponType|null) => void;
}


export function CouponSection({ form, selectedCoupon, setSelectedCoupon }: CouponSectionProps) {
  const { currentWorkspace } = useCurrentWorkspace();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { data: coupons, isLoading } = useQuery<ListWorkspaceCouponsQueryResponseType, Error>({
    queryKey: ["coupons"],
    queryFn: () => listWorkspaceCoupons(currentWorkspace?.name || ""),
    select: (data) => data?.items || [],
    enabled: !!currentWorkspace?.name,
  })

  const filteredCoupons = coupons?.filter(
    (coupon:BillingCouponType) =>
      coupon.display_name?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleCouponSelect = (coupon: BillingCouponType) => {
    if (selectedCoupon?.uid === coupon.uid) {
      // 如果点击的是已选中的优惠券，则取消选择
      setSelectedCoupon(null);
      form.setValue("coupon", null);
      // 对话框保持打开
    } else {
      // 选择新的优惠券
      setSelectedCoupon(coupon);
      form.setValue("coupon", coupon.uid);
      // 关闭对话框
      setOpen(false);
    }
  }

  return (
    <FormField
      name="coupon"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>优惠券</FormLabel>
          <FormControl>
            <Card className="w-full">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">优惠券选择</h2>
                    <Dialog open={open} onOpenChange={setOpen}>
                      <DialogTrigger asChild>
                        <Button size="sm">
                          选择优惠券
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[725px]">
                        <DialogHeader>
                          <DialogTitle>优惠券选择</DialogTitle>
                        </DialogHeader>
                        <div className="w-full max-w-4xl mx-auto p-6">
                          <div className="flex flex-col space-y-4">
                            <Input
                              placeholder="搜索优惠券..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="max-w-full"
                            />

                            <div className="mt-8">
                              <div className="grid gap-4">
                                {filteredCoupons?.map((coupon:BillingCouponType) => (
                                  <CouponCard
                                    key={coupon.uid}
                                    coupon={coupon}
                                    onClick={() => !coupon.used && handleCouponSelect(coupon)}
                                    isUsed={coupon.used}
                                    isSelected={selectedCoupon?.uid === coupon.uid}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  {selectedCoupon && (
                    <CouponCard
                      coupon={selectedCoupon}
                      onClick={() => {}}
                      isUsed={selectedCoupon.used}
                      isSelected={true}
                    />
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


function CouponCard({ coupon, onClick, isUsed, isSelected }: { 
  coupon: BillingCouponType; 
  onClick: () => void;
  isUsed?: boolean; 
  isSelected?: boolean;
}) {
  return (
    <Card 
      className={cn(
        "relative overflow-hidden",
        isUsed 
          ? "opacity-60 cursor-not-allowed bg-gray-50" 
          : "cursor-pointer hover:bg-accent/50",
      )}
      onClick={isUsed ? undefined : onClick}
    >
      <div className="flex">
        {/* 左侧金额部分 */}
        {(() => {
          switch(coupon.type) {  
            case "discount":
              return (
                <div className={cn(
                  "w-32 p-6 flex flex-col items-center justify-center text-primary-foreground",
                  isUsed ? "bg-gray-400" : "bg-orange-300 text-purple-950"
                )}>
                  <div className="text-2xl font-bold">¥{coupon.max_discount_value}</div>
                  <div className="text-sm">满{coupon.min_purchase}可用</div>
                </div>
              );
            case "cash":
              return (
                <div className={cn(
                  "w-32 p-6 flex flex-col items-center justify-center text-primary-foreground",
                  isUsed ? "bg-gray-400" : "bg-orange-300 text-purple-950"
                )}>
                  <div className="text-2xl font-bold">{coupon.discount_rate/10}折</div>
                  <div className="text-sm">满{coupon.min_purchase}可用</div>
                </div>
              );
            default:
              return (
                <div className={cn(
                  "w-32 p-6 flex flex-col items-center justify-center text-primary-foreground",
                  isUsed ? "bg-gray-400" : "bg-orange-300 text-purple-950"
                )}>
                  <div className="text-2xl font-bold">¥{coupon.max_discount_value}</div>
                  <div className="text-sm">满{coupon.min_purchase}可用</div>
                </div>
              );
          }
        })()}
        
        
        {/* 右侧信息部分 */}
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">{coupon.display_name}</h4>
              <p className="text-sm text-muted-foreground mt-1">
                {coupon.description || "优惠券编号: " + coupon.uid}
              </p>
            </div>
            {isUsed ? (
              <Badge variant="secondary" className="bg-gray-200 text-gray-700">
                已使用
              </Badge>
            ) : (
              <div className="text-primary">
                {isSelected ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <Circle className="h-5 w-5" />
                )}
              </div>
            )}
          </div>
          
          {/* 有效期 */}
          <div className="mt-2 text-xs text-muted-foreground">
            有效期：{new Date(coupon.valid_from).toLocaleDateString()} - {new Date(coupon.valid_to).toLocaleDateString()}
          </div>
        </div>
      </div>
      
      {/* 装饰性圆点 */}
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-background rounded-full" />
      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-background rounded-full" />
    </Card>
  )
}