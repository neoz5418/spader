'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronDown, ChevronUp, FileText, Pencil, Trash } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
  const [isExpanded, setIsExpanded] = useState(true)
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
    <div className="w-full max-w-3xl mx-auto space-y-4 p-4">
      <div className="border rounded-lg overflow-hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/50"
        >
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <span className="text-lg font-medium">API Keys</span>
          </div>
          {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
        
        {isExpanded && (
          <div className="px-6 py-4 border-t">
            <p className="text-sm text-muted-foreground mb-4">
              Generate unique keys that allow you to securely access our API services. Simply create a new key, copy it, and use it to integrate our API into your project. Treat these keys as top secret - they allow anyone with the key to gain full access to your account!
            </p>
            
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
      </div>
    </div>
  )
}

