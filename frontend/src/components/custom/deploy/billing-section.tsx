'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FormLabel } from "@/components/ui/form"
import { FormField } from "@/components/ui/form"
import { ControllerRenderProps } from "node_modules/react-hook-form/dist/types/controller"

const billingMethods = [
  {
    key: "real_time",
    label: "实时计费",
    description: "按小时计费，1小时起租，不足1小时按1小时计费"
  },
  {
    key: "one_day",
    label: "按天租",
    price: 0.99,
    description: "按天计费，可享受更优惠的价格"
  },
  {
    key: "one_week",
    label: "按周租",
    price: 0.98,
    description: "按周计费，长期使用更经济实惠"
  },
  {
    key: "one_month",
    label: "按月租",
    price: 0.95,
    description: "按月计费，长期使用更经济实惠"
  }
]

interface BillingSectionProps {
  field: ControllerRenderProps<any, "billing">;
}

export function BillingSection({ form,field }: BillingSectionProps) {
  const [selectedMethod, setSelectedMethod] = useState("real_time")

  console.log("field", form)
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold mb-4">计费方式</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {billingMethods.map((method) => (
              <Button type="button"
                key={method.key}
                variant={selectedMethod === method.key ? "default" : "outline"}
                onClick={() => {
                  setSelectedMethod(method.key)
                  field.onChange(method.key)
                }}
                size="sm"
              >
                {method.label} 
                {method.price && (
                  <span className="ml-2 bg-red-500 text-white px-1.5 rounded-sm font-medium">
                    {method.price*10}折
                  </span>
                )}
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            {billingMethods.find(method => method.key === selectedMethod)?.description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

