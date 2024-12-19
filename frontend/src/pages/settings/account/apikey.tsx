'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, ChevronDown, ChevronUp, Copy, FileText, Pencil, Trash } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card } from '@/components/ui/card'

interface APIKey {
  id: string
  name: string
  key: string
  permissions: 'Read & Write' | 'Read Only'
  used: string
  created: string
  enabled: boolean
}

export default function APIKeys() {
  const [isApiKeysOpen, setIsApiKeysOpen] = useState(true)
  const [newKeyDetails, setNewKeyDetails] = useState<{ fullKey: string }>({ fullKey: '' })
  const [keys, setKeys] = useState<APIKey[]>([
    {
      id: '1',
      name: 'Key 1',
      key: 'rpa_S8FS3HZ543...',
      permissions: 'Read & Write',
      used: 'Never',
      created: '17 Dec',
      enabled: false
    }
  ])

  const [newKey, setNewKey] = useState({
    name: '',
    permissions: 'Read & Write' as const
  })

  const handleCreateKey = () => {
    const key: APIKey = {
      id: Math.random().toString(),
      name: newKey.name,
      key: `rpa_${Math.random().toString(36).substring(2, 15)}...`,
      permissions: newKey.permissions,
      used: 'Never',
      created: new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short' }),
      enabled: true
    }
    setKeys([...keys, key])
    setNewKey({ name: '', permissions: 'Read & Write' })
  }

  const toggleKey = (id: string) => {
    setKeys(keys.map(key => 
      key.id === id ? { ...key, enabled: !key.enabled } : key
    ))
  }

  const deleteKey = (id: string) => {
    setKeys(keys.filter(key => key.id !== id))
  }

  return (
    <Card className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsApiKeysOpen(!isApiKeysOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/50"
      >
        <span className="text-lg font-medium">API Keys</span>
        {isApiKeysOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      
      {isApiKeysOpen && (
      <div className="px-6 py-4 border-t">
        <p className="text-sm text-muted-foreground mb-4">
          Generate unique keys that allow you to securely access our API services. Simply create a new key, copy it, and use it to integrate our API into your project. Treat these keys as top secret - they allow anyone with the key to gain full access to your account!
        </p>
        <Alert className="mb-4 bg-green-50 border-green-200">
          <Check className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-600">
            Copy the below API Key. For security reasons, we do not store the key.
          </AlertDescription>
          <div className="mt-2 flex items-center gap-2 bg-white rounded border px-3 py-2">
            <code className="flex-1 text-sm font-mono">
              {newKeyDetails.fullKey}
            </code>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => copyToClipboard(newKeyDetails.fullKey!)}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </Alert>


        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="mb-6">
              <span className="text-primary mr-2">+</span> Create API Key
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create API Key</DialogTitle>
              <DialogDescription>
                Create a new API key for secure access to our services.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Key Name</Label>
                <Input
                  id="name"
                  placeholder="Enter key name"
                  value={newKey.name}
                  onChange={(e) => setNewKey({ ...newKey, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="permissions">Permissions</Label>
                <Select
                  value={newKey.permissions}
                  onValueChange={(value: 'Read & Write' | 'Read Only') => 
                    setNewKey({ ...newKey, permissions: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select permissions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Read & Write">Read & Write</SelectItem>
                    <SelectItem value="Read Only">Read Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleCreateKey}>Create Key</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>NAME</TableHead>
                <TableHead>SECRET KEY</TableHead>
                <TableHead>PERMISSIONS</TableHead>
                <TableHead>USED</TableHead>
                <TableHead>CREATED</TableHead>
                <TableHead>ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {keys.map((key) => (
                <TableRow key={key.id}>
                  <TableCell>{key.name}</TableCell>
                  <TableCell className="font-mono">{key.key}</TableCell>
                  <TableCell>{key.permissions}</TableCell>
                  <TableCell>{key.used}</TableCell>
                  <TableCell>{key.created}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          {key.enabled ? 'Enabled' : 'Disabled'}
                        </span>
                        <Switch
                          checked={key.enabled}
                          onCheckedChange={() => toggleKey(key.id)}
                        />
                      </div>
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteKey(key.id)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      )}
    </Card>
  )
}

