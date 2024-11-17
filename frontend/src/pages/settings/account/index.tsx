'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import useAuth from "@/hooks/use-auth"
import { FileText, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from "react"
import { AppearanceForm } from "./appearance-form"

export default function Component() {
  const [isApiKeysOpen, setIsApiKeysOpen] = useState(true)
  const [isLoginSettingsOpen, setIsLoginSettingsOpen] = useState(false)
  const [isThemeSettingsOpen, setIsThemeSettingsOpen] = useState(false)
  const [isContainerRegistryAuthOpen, setIsContainerRegistryAuthOpen] = useState(false)
  const [isNotificationSettingsOpen, setIsNotificationSettingsOpen] = useState(false)
  const [isSshPublicKeyOpen, setIsSshPublicKeyOpen] = useState(false)
  const { user } = useAuth()
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

        <Card className="p-6">
          <button 
            className="w-full flex justify-between items-center"
            onClick={() => setIsLoginSettingsOpen(!isLoginSettingsOpen)}
          >
            <h2 className="text-xl font-semibold">Login Settings</h2>
            {isLoginSettingsOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          
          {isLoginSettingsOpen && (
            <div className="mt-6">
              {/* Login settings content would go here */}
            </div>
          )}
        </Card>

        <Card className="p-6">
          <button 
            className="w-full flex justify-between items-center"
            onClick={() => setIsContainerRegistryAuthOpen(!isContainerRegistryAuthOpen)}
          >
            <h2 className="text-xl font-semibold">Container Registry Auth</h2>
            {isContainerRegistryAuthOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          
          {isContainerRegistryAuthOpen && (
            <div className="mt-6">
              <p className="text-muted-foreground">
                Register your container registry credentials here to pull private images from various container registries. Please be aware that we currently only support docker login type credentials. You can add your credentials to a template by registering the credential here and then selecting it from the dropdown when editing or creating your template.
              </p>
              <AppearanceForm />
            </div>
          )}
        </Card>

        <Card className="p-6">
          <button 
            className="w-full flex justify-between items-center"
            onClick={() => setIsNotificationSettingsOpen(!isNotificationSettingsOpen)}
          >
            <h2 className="text-xl font-semibold">Notification Settings</h2>
            {isNotificationSettingsOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          
          {isNotificationSettingsOpen && (
            <div className="mt-6">
              <p className="text-muted-foreground">
                Configure your notification settings here.
              </p>
              <AppearanceForm />
            </div>
          )}
        </Card>

        <Card className="p-6">
          <button 
            className="w-full flex justify-between items-center"
            onClick={() => setIsSshPublicKeyOpen(!isSshPublicKeyOpen)}
          >
            <h2 className="text-xl font-semibold">SSH Public Key</h2>
            {isSshPublicKeyOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          
          {isSshPublicKeyOpen && (
            <div className="mt-6">
              <p className="text-muted-foreground">
                Add your SSH public key here to enable passwordless SSH access to your pods.
              </p>
              <AppearanceForm />
            </div>
          )}
        </Card>


      </div>
    </div>
  )
}