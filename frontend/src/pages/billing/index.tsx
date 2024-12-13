import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { CreditCard } from 'lucide-react'
import Loader from '@/components/loader'
import { useCurrentWorkspace, useWorkspaceAccount } from "@/hooks/use-setting"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { useListWorkspaceResourceUsageRecordsHook } from "@/gen/hooks/useListWorkspaceResourceUsageRecordsHook"
import { PaginationState, Updater } from "@tanstack/react-table"
import { useState } from "react"

function formatCurrency(amount: number, currency: string) {
    return (amount / 100).toLocaleString('zh-CN', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
    })
}

export default function BillingDashboard() {
    const { currentWorkspace } = useCurrentWorkspace()
    const { workspacesAccount, isLoading: workspaceAccountIsLoading } = useWorkspaceAccount()
    const balance = workspacesAccount?.balance || 0
    const currency = workspacesAccount?.currency || 'CNY'
    const rechargeLink = '/workspaces/' + (currentWorkspace?.name || '') + '/recharge'
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const pagination = {
        pageIndex: parseInt(searchParams.get('pageIndex') || '0'),
        pageSize: parseInt(searchParams.get('pageSize') || '10'),
    }
    const rechargeAmountValues = [25, 50, 100]
    const [rechargeAmount, setRechargeAmount] = useState(rechargeAmountValues[0])


    function setPagination(updater: Updater<PaginationState>) {
        let state: PaginationState
        if (typeof updater === 'function') {
            state = updater(pagination)
        } else {
            state = updater
        }

        searchParams.set('pageIndex', state.pageIndex.toString())
        searchParams.set('pageSize', state.pageSize.toString())
        setSearchParams(searchParams)
    }

    const {
        isLoading,
        data: { items: records = [], pagination: { total = 0 } = {} } = {},
    } = useListWorkspaceResourceUsageRecordsHook(currentWorkspace?.name || '', {
        offset: pagination.pageIndex * pagination.pageSize,
        limit: pagination.pageSize,
        target_id: currentWorkspace?.name || '',
    }, {
        query: {
            enabled: !!currentWorkspace,
        },
    })
    console.log(records)
    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="max-w-[1200px] mx-auto p-6 space-y-8">
            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>余额: {
                            workspaceAccountIsLoading ?
                                '...':formatCurrency(balance, currency)
              }</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-sm text-muted-foreground">
                            <p>消费限额: 无限额</p>
                            <p>当前消费: {formatCurrency(0, currency)} / 小时</p>
                        </div>
                    </CardContent>
                </Card>


                <Card>
                <CardHeader>
                    <CardTitle>充值</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                    <div className="flex gap-2">
                        {rechargeAmountValues.map((value, index) => (
                            <Button
                                key={index}
                                variant={rechargeAmount === value ? "secondary" : "outline"}
                                onClick={() => setRechargeAmount(value)}
                            >
                                 {formatCurrency(value * 100, currency)}
                            </Button>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <div className="w-1/2 flex-1">
                            <Input
                                type="number"
                                placeholder={`${currency} 自定义金额`}
                                value={rechargeAmount || ''}
                                onChange={(e) => setRechargeAmount(Number(e.target.value))}
                            />
                        </div>
                        <Button className="w-1/2 bg-purple-600 hover:bg-purple-700"
                            onClick={() => {
                                navigate(rechargeLink)
                            }}
                        >
                        <CreditCard className="mr-2 h-4 w-4" />
                            <Link to={rechargeLink} >
                                {'充值'}
                            </Link>
                        </Button>
                    </div>
                    </div>
                </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>账单</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="summary">
                        <TabsList className="grid w-full grid-cols-7 mb-4">
                            <TabsTrigger value="summary">总消费</TabsTrigger>
                            <TabsTrigger value="gpu">GPU 实例</TabsTrigger>
                        </TabsList>
                        <TabsContent value="summary">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>日期</TableHead>
                                        <TableHead>总消费</TableHead>
                                        <TableHead>GPU 实例</TableHead>
                                        <TableHead>CPU 实例</TableHead>
                                        <TableHead>带宽</TableHead>
                                        <TableHead>存储</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>2024年11月29日</TableCell>
                                        <TableCell>$0.001</TableCell>
                                        <TableCell>$0</TableCell>
                                        <TableCell>$0.001</TableCell>
                                        <TableCell>$0</TableCell>
                                        <TableCell>$0</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2024年11月28日</TableCell>
                                        <TableCell>$1.915</TableCell>
                                        <TableCell>$1.91</TableCell>
                                        <TableCell>$0</TableCell>
                                        <TableCell>$0</TableCell>
                                        <TableCell>$0.005</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TabsContent>
                        <TabsContent value="gpu">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>日期</TableHead>
                                        <TableHead>GPU 实例</TableHead>
                                        <TableHead>RTX 3060</TableHead>
                                        <TableHead>A100</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>2024年11月29日</TableCell>
                                        <TableCell>$0.001</TableCell>
                                        <TableCell>$0</TableCell>
                                        <TableCell>$0</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2024年11月28日</TableCell>
                                        <TableCell>$1.915</TableCell>
                                        <TableCell>$1.91</TableCell>
                                        <TableCell>$0</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    )
}
