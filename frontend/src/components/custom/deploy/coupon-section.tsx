import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export function CouponSection(field: any) {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">优惠券</h2>
          <Select>
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="选择优惠券" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">暂无可用优惠券</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )
}

