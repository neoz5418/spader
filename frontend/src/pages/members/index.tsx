import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { CreditCard, Calendar, Loader, Pencil } from 'lucide-react'
import { useCurrentWorkspace, useWorkspaceAccount } from "@/hooks/use-setting"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { useListWorkspaceResourceUsageRecordsHook } from "@/gen/hooks/useListWorkspaceResourceUsageRecordsHook"
import { PaginationState, Updater } from "@tanstack/react-table"
import { useState } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"
function formatCurrency(amount: number, currency: string) {
    return (amount / 100).toLocaleString('zh-CN', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
    })
}
import {
    getWorkspaceMembers
} from "@/gen/clients"
import { isLoggedIn } from "@/hooks/use-auth"
import { useGetWorkspaceMembersHook } from "@/gen/hooks/useGetWorkspaceMembersHook"

export default function WorkspaceManager() {
    const { currentWorkspace } = useCurrentWorkspace()
    const { workspacesAccount, isLoading: workspaceAccountIsLoading } = useWorkspaceAccount()
    const [isEditing, setIsEditing] = useState(false)
    const [newDisplayName, setNewDisplayName] = useState("")
    // const updateWorkspace = useUpdateWorkspaceMutation()


    
    const [searchParams, setSearchParams] = useSearchParams()
    const pagination = {
        pageIndex: parseInt(searchParams.get('pageIndex') || '0'),
        pageSize: parseInt(searchParams.get('pageSize') || '10'),
    }
    const rechargeAmountValues = [25, 50, 100]
    const [rechargeAmount, setRechargeAmount] = useState(rechargeAmountValues[0])

    const handleEditClick = () => {
        setNewDisplayName(currentWorkspace?.display_name || "")
        setIsEditing(true)
    }
    


    
    const handleSave = async () => {
        if (!currentWorkspace?.name) return
        
        try {
            // await updateWorkspace.mutateAsync({
            //     workspace_name: currentWorkspace.name,
            //     data: {
            //         display_name: newDisplayName
            //     }
            // })
            setIsEditing(false)
        } catch (error) {
            console.error("Failed to update workspace name:", error)
        }
    }

    const {
        isMemberLoading,
        data: { items: members = []} = {},
      } = useGetWorkspaceMembersHook(currentWorkspace?.name || '', {
        query: {
          enabled: !!currentWorkspace,
        },
      })

    return (
        <div className="max-w-[1200px] mx-auto p-6 space-y-8">
            <div className="flex justify-between items-center">
                <div>
                <h1 className="text-2xl font-semibold flex items-center gap-4">
                    {isEditing ? (
                        <div className="flex items-center gap-2">
                            <Input
                                value={newDisplayName}
                                onChange={(e) => setNewDisplayName(e.target.value)}
                                className="max-w-[200px]"
                                autoFocus
                            />
                            <Button 
                                size="sm" 
                                onClick={handleSave}
                                // disabled={updateWorkspace.isLoading}
                            >
                                保存
                            </Button>
                            <Button 
                                size="sm" 
                                variant="ghost" 
                                onClick={() => setIsEditing(false)}
                            >
                                取消
                            </Button>
                        </div>
                    ) : (
                        <>
                            {currentWorkspace?.display_name}
                            <Pencil 
                                className="h-5 w-5 ml-2 cursor-pointer hover:text-gray-600" 
                                onClick={handleEditClick}
                            /> 
                        </>
                    )}
                </h1>
                <p className="text-sm text-muted-foreground">{currentWorkspace?.name}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                ID: {currentWorkspace?.uid}
                </div>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>工作空间成员</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>邮箱</TableHead>
                                <TableHead>角色</TableHead>
                                <TableHead>操作</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {members.map((member) => (
                                <TableRow>
                                    <TableCell>{member.email}</TableCell>
                                    <TableCell>{member.role}</TableCell>
                                    <TableCell>
                                        <Button size="sm" variant="ghost">
                                            删除
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

