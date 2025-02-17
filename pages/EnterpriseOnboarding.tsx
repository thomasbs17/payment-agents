"use client"

import type React from "react"

import { useState } from "react"
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  HStack,
  Checkbox,
  useToast,
} from "@chakra-ui/react"

interface Role {
  name: string
  permissions: string[]
}

const EnterpriseOnboarding = () => {
  const [companyName, setCompanyName] = useState("")
  const [adminEmail, setAdminEmail] = useState("")
  const [roles, setRoles] = useState<Role[]>([
    { name: "Admin", permissions: ["all"] },
    { name: "Manager", permissions: ["read", "write"] },
    { name: "Viewer", permissions: ["read"] },
  ])
  const toast = useToast()

  const handleAddRole = () => {
    setRoles([...roles, { name: "", permissions: [] }])
  }

  const handleRoleChange = (index: number, field: "name" | "permissions", value: string | string[]) => {
    const updatedRoles = [...roles]
    updatedRoles[index] = { ...updatedRoles[index], [field]: value }
    setRoles(updatedRoles)
  }

  const handlePermissionChange = (roleIndex: number, permission: string) => {
    const updatedRoles = [...roles]
    const currentPermissions = updatedRoles[roleIndex].permissions
    if (currentPermissions.includes(permission)) {
      updatedRoles[roleIndex].permissions = currentPermissions.filter((p) => p !== permission)
    } else {
      updatedRoles[roleIndex].permissions = [...currentPermissions, permission]
    }
    setRoles(updatedRoles)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate onboarding process
    console.log({ companyName, adminEmail, roles })
    toast({
      title: "Enterprise Onboarded",
      description: "Your company has been successfully onboarded.",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    // Reset form
    setCompanyName("")
    setAdminEmail("")
    setRoles([
      { name: "Admin", permissions: ["all"] },
      { name: "Manager", permissions: ["read", "write"] },
      { name: "Viewer", permissions: ["read"] },
    ])
  }

  return (
    <Box p={8}>
      <Heading mb={6}>Enterprise Onboarding</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Company Name</FormLabel>
            <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Admin Email</FormLabel>
            <Input type="email" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} />
          </FormControl>
          <Heading size="md" mt={4}>
            Role-Based Access Control
          </Heading>
          {roles.map((role, index) => (
            <Box key={index} borderWidth={1} borderRadius="md" p={4}>
              <FormControl>
                <FormLabel>Role Name</FormLabel>
                <Input value={role.name} onChange={(e) => handleRoleChange(index, "name", e.target.value)} />
              </FormControl>
              <FormLabel mt={2}>Permissions</FormLabel>
              <HStack>
                {["read", "write", "delete", "all"].map((permission) => (
                  <Checkbox
                    key={permission}
                    isChecked={role.permissions.includes(permission)}
                    onChange={() => handlePermissionChange(index, permission)}
                  >
                    {permission}
                  </Checkbox>
                ))}
              </HStack>
            </Box>
          ))}
          <Button onClick={handleAddRole} colorScheme="blue">
            Add Role
          </Button>
          <Button type="submit" colorScheme="green">
            Onboard Enterprise
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default EnterpriseOnboarding

