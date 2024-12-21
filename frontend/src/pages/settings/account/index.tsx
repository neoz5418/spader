'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import useAuth from "@/hooks/use-auth"
import { FileText, ChevronDown, ChevronUp, Monitor } from 'lucide-react'
import { useState } from "react"
import { AppearanceForm } from "./appearance-form"
import APIKeys from "./apikey"
import SSHKeys from "./sshkeys"

export default function Component() {
  const [isActiveSessionsOpen, setIsActiveSessionsOpen] = useState(false)
  const [isThemeSettingsOpen, setIsThemeSettingsOpen] = useState(false)
  const [isContainerRegistryAuthOpen, setIsContainerRegistryAuthOpen] = useState(false)
  const [isNotificationSettingsOpen, setIsNotificationSettingsOpen] = useState(false)
  const [isSshPublicKeyOpen, setIsSshPublicKeyOpen] = useState(false)
  const { user } = useAuth()
  const [sshKey, setSSHKey] = useState('abcd')
  console.log(user)


  return (
    <div id="setting" className={`w-full min-h-screen`}>      
      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-semibold">用户信息</h2>
            {/* <Button variant="outline" className="text-purple-600">
              Edit Account Info
            </Button> */}
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            <div>
              <div className="mb-4">
                <label className="text-sm text-muted-foreground">用户名:</label>
                <div>{user?.name}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm text-muted-foreground">邮箱:</label>
                <div>{user?.email}</div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">角色:</label>
                <div>{user?.role}</div>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label className="text-sm text-muted-foreground">显示名称:</label>
                <div>{user?.display_name}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm text-muted-foreground">手机号:</label>
                <div>{user?.phone_number}</div>
              </div>
            </div>
          </div>
        </Card>
      
        <Card className="p-6">
          <button 
            className="w-full flex justify-between items-center"
            onClick={() => setIsThemeSettingsOpen(!isThemeSettingsOpen)}
          >
            <h2 className="text-xl font-semibold">主题设置</h2>
            {isThemeSettingsOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          
          {isThemeSettingsOpen && (
            <div className="mt-6">
              <p className="text-muted-foreground">
                选择页面主题。  
              </p>
              <AppearanceForm />
            </div>
          )}
        </Card>

        
        <APIKeys />

        {/* <Card className="border rounded-lg overflow-hidden">
          <button
            onClick={() => setIsActiveSessionsOpen(!isActiveSessionsOpen)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/50"
          >
            <span className="text-lg font-medium">活跃会话</span>
            {isActiveSessionsOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          
          {isActiveSessionsOpen && (
            <div className="px-6 py-4 border-t">
              <div className="flex items-center gap-4">
                <Monitor className="h-5 w-5" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Chrome</span>
                    <span className="text-muted-foreground">on</span>
                    <span>Macintosh</span>
                    <span className="px-2 py-0.5 text-xs bg-secondary rounded">此设备</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    <div>45.120.216.129 (, HK)</div>
                    <div>最后活跃: 2024/12/17 21:20:44</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card> */}

        <SSHKeys />
        
      </div>
    </div>
  )
}