import { useCreateWorkspaceSshKeysHook } from "@/gen/hooks/useCreateWorkspaceSshKeysHook";
import { useGetSshKeyHook } from "@/gen/hooks/useGetSshKeyHook";

// useCreateWorkspaceSshKeysHook
'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, ChevronDown, ChevronUp, Copy, FileText, Loader, Pencil, Trash } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card } from '@/components/ui/card'
import { Textarea } from "@/components/ui/textarea"
import { useCurrentWorkspace } from "@/hooks/use-setting";
import { useGetWorkspaceAuditLogsHook } from "@/gen/hooks/useGetWorkspaceAuditLogsHook";



export default function SSHKeys() {
  const [isSshPublicKeyOpen, setIsSshPublicKeyOpen] = useState(true)
  const [sshKey, setSSHKey] = useState('')
  const [oldSSHKey, setOldSSHKey] = useState('')
  const [isUpdate, setIsUpdate] = useState(false)
  const { currentWorkspace } = useCurrentWorkspace()
  
  const { mutate: updateSshKey, isPending: isUpdatePending ,error: updateError} = useCreateWorkspaceSshKeysHook(currentWorkspace?.name || ''   )
  const { data: sshKeyData } = useGetSshKeyHook(currentWorkspace?.name || '', 'ssh-key',    {
    query: {
      enabled: !!currentWorkspace
    }
  })

  const isSSHKeyChanged = () => {
    return sshKey !== oldSSHKey
  }

  useEffect(() => {
    if (sshKeyData?.public_key) {
      setSSHKey(sshKeyData.public_key)
      setOldSSHKey(sshKeyData.public_key)
    }
  }, [sshKeyData])

  const handleUpdateSSHKey = async () => {
    if (!currentWorkspace?.name) return
    try {
        await updateSshKey({  
            public_key: sshKey,
            name: 'ssh-key'
        })
        setIsUpdate(true)
        setOldSSHKey(sshKey)
    } catch (error) {
        console.error(error)
    }
  }

  return (
    <Card className="border rounded-lg overflow-hidden">
        <button
        onClick={() => setIsSshPublicKeyOpen(!isSshPublicKeyOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/50"
        >
        <span className="text-lg font-medium">SSH 公钥</span>
        {isSshPublicKeyOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
        
        {isSshPublicKeyOpen && (
        <div className="px-6 py-4 border-t">
            <p className="text-sm text-muted-foreground mb-4">
            将公钥添加到您的账户中，您可以使用匹配的私钥通过终端访问pods。 
            您可以添加多个密钥，用换行符分隔（最多65500个字符）。 
            平台会自动将这些密钥添加到pod的authorized_keys文件中，使您可以轻松通过SSH使用pod的公网IP连接。
            </p>
            
            <div className="space-y-4">
            <div>
                <label htmlFor="ssh-key" className="text-sm font-medium">
                SSH 公钥     
                {!isSSHKeyChanged() && isUpdate && (<span className="text-xs text-green-600 ml-2">更新成功</span>)}
                {isSSHKeyChanged() && (<span className="text-xs text-red-600 ml-2">已修改</span>)}
                </label>
                <Textarea
                id="ssh-key"
                value={sshKey}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setSSHKey(e.target.value)}
                className="font-mono text-sm mt-2"
                rows={2}
                />
                <div className="text-sm text-muted-foreground mt-1">
                {sshKey.length}/65500 characters
                </div>
            </div>

            <Button variant="outline" onClick={handleUpdateSSHKey} disabled={!isSSHKeyChanged()}>
                更新公钥
            </Button>
            </div>
        </div>
        )}
    </Card>
  )}