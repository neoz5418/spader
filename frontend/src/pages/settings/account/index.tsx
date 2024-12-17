'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import useAuth from "@/hooks/use-auth"
import { FileText, ChevronDown, ChevronUp, Monitor } from 'lucide-react'
import { useState } from "react"
import { AppearanceForm } from "./appearance-form"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  const [isApiKeysOpen, setIsApiKeysOpen] = useState(true)
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
            <h2 className="text-xl font-semibold">Account Info</h2>
            <Button variant="outline" className="text-purple-600">
              Edit Account Info
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            <div>
              <div className="mb-4">
                <label className="text-sm text-muted-foreground">Name:</label>
                <div>{user?.name}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm text-muted-foreground">Email:</label>
                <div>{user?.email}</div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Role:</label>
                <div>{user?.role}</div>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label className="text-sm text-muted-foreground">Display Name:</label>
                <div>{user?.display_name}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm text-muted-foreground">Phone Number:</label>
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
            <h2 className="text-xl font-semibold">Theme Settings</h2>
            {isThemeSettingsOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          
          {isThemeSettingsOpen && (
            <div className="mt-6">
              <p className="text-muted-foreground">
                Select the theme for the dashboard.  
              </p>
              <AppearanceForm />
            </div>
          )}
        </Card>

        <Card className="p-6">
          <button 
            className="w-full flex justify-between items-center"
            onClick={() => setIsApiKeysOpen(!isApiKeysOpen)}
          >
            <h2 className="text-xl font-semibold">API Keys</h2>
            {isApiKeysOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          
          {isApiKeysOpen && (
            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <FileText className="h-5 w-5" />
                <span>Documents</span>
              </div>
              
              <p className="text-muted-foreground">
                Generate unique keys that allow you to securely access our API services. Simply create a new key, copy it, and use it to integrate our API into your project. Treat these keys as top secret - they allow anyone with the key to gain full access to your account!
              </p>
              
              <Button className="gap-2" variant="outline">
                <span className="text-purple-600">+</span>
                Create API Key
              </Button>
            </div>
          )}
        </Card>

        <Card className="border rounded-lg overflow-hidden">
          <button
            onClick={() => setIsActiveSessionsOpen(!isActiveSessionsOpen)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/50"
          >
            <span className="text-lg font-medium">Active Sessions</span>
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
                    <span className="px-2 py-0.5 text-xs bg-secondary rounded">This device</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    <div>45.120.216.129 (, HK)</div>
                    <div>Last active: 2024/12/17 21:20:44</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>

        <Card className="border rounded-lg overflow-hidden">
          <button
            onClick={() => setIsSshPublicKeyOpen(!isSshPublicKeyOpen)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/50"
          >
            <span className="text-lg font-medium">SSH Public Keys</span>
            {isSshPublicKeyOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          
          {isSshPublicKeyOpen && (
            <div className="px-6 py-4 border-t">
              <p className="text-sm text-muted-foreground mb-4">
                Adding public keys to your account lets you access pods via terminal using the matching private key. 
                You can add multiple keys, separated by a newline (up to 65500 characters). 
                RunPod automatically adds these keys to your pod&apos;s authorized_keys file, making it easy to connect via SSH using the pod&apos;s public IP.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="ssh-key" className="text-sm font-medium">
                    SSH Public Key
                  </label>
                  <Textarea
                    id="ssh-key"
                    value={sshKey}
                    onChange={(e) => setSSHKey(e.target.value)}
                    className="font-mono text-sm mt-2"
                    rows={2}
                  />
                  <div className="text-sm text-muted-foreground mt-1">
                    {sshKey.length}/65500 characters
                  </div>
                </div>
                
                <Button variant="outline">
                  Update Public Key
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}