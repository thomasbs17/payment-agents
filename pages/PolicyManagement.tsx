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
  Checkbox,
  Textarea,
  useToast,
} from "@chakra-ui/react"

const PolicyManagement = () => {
  const [agentId, setAgentId] = useState("")
  const [timeRestriction, setTimeRestriction] = useState(false)
  const [locationRestriction, setLocationRestriction] = useState(false)
  const [usageLimit, setUsageLimit] = useState(false)
  const [customPolicy, setCustomPolicy] = useState("")
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate policy configuration
    console.log({ agentId, timeRestriction, locationRestriction, usageLimit, customPolicy })
    toast({
      title: "Policy Configured",
      description: "The policy has been successfully configured for the agent.",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    // Reset form
    setAgentId("")
    setTimeRestriction(false)
    setLocationRestriction(false)
    setUsageLimit(false)
    setCustomPolicy("")
  }

  return (
    <Box p={8}>
      <Heading mb={6}>Policy Management</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Agent ID</FormLabel>
            <Input value={agentId} onChange={(e) => setAgentId(e.target.value)} />
          </FormControl>
          <Checkbox isChecked={timeRestriction} onChange={(e) => setTimeRestriction(e.target.checked)}>
            Enable Time Restriction
          </Checkbox>
          <Checkbox isChecked={locationRestriction} onChange={(e) => setLocationRestriction(e.target.checked)}>
            Enable Location Restriction
          </Checkbox>
          <Checkbox isChecked={usageLimit} onChange={(e) => setUsageLimit(e.target.checked)}>
            Enable Usage Limit
          </Checkbox>
          <FormControl>
            <FormLabel>Custom Policy</FormLabel>
            <Textarea value={customPolicy} onChange={(e) => setCustomPolicy(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="green">
            Configure Policy
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default PolicyManagement

