"use client"

import type React from "react"

import { useState } from "react"
import { Box, Heading, FormControl, FormLabel, Input, Button, VStack, Select, useToast } from "@chakra-ui/react"

const IdentityConfiguration = () => {
  const [agentId, setAgentId] = useState("")
  const [identityType, setIdentityType] = useState("")
  const [trustScore, setTrustScore] = useState("")
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate configuration process
    console.log({ agentId, identityType, trustScore })
    toast({
      title: "Identity Configured",
      description: "The identity has been successfully configured for the agent.",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    // Reset form
    setAgentId("")
    setIdentityType("")
    setTrustScore("")
  }

  return (
    <Box p={8}>
      <Heading mb={6}>Identity Configuration</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Agent ID</FormLabel>
            <Input value={agentId} onChange={(e) => setAgentId(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Identity Type</FormLabel>
            <Select
              placeholder="Select identity type"
              value={identityType}
              onChange={(e) => setIdentityType(e.target.value)}
            >
              <option value="jwt">JWT</option>
              <option value="oauth">OAuth</option>
              <option value="saml">SAML</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Initial Trust Score</FormLabel>
            <Input type="number" min={0} max={100} value={trustScore} onChange={(e) => setTrustScore(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="green">
            Configure Identity
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default IdentityConfiguration

