"use client"

import type React from "react"

import { useState } from "react"
import { Box, Heading, FormControl, FormLabel, Input, Button, VStack, Select, useToast } from "@chakra-ui/react"

const AgentOnboarding = () => {
  const [agentName, setAgentName] = useState("")
  const [agentType, setAgentType] = useState("")
  const [initiative, setInitiative] = useState("")
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate onboarding process
    console.log({ agentName, agentType, initiative })
    toast({
      title: "Agent Onboarded",
      description: "The AI agent has been successfully onboarded.",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    // Reset form
    setAgentName("")
    setAgentType("")
    setInitiative("")
  }

  return (
    <Box p={8}>
      <Heading mb={6}>Agent Onboarding</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Agent Name</FormLabel>
            <Input value={agentName} onChange={(e) => setAgentName(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Agent Type</FormLabel>
            <Select placeholder="Select agent type" value={agentType} onChange={(e) => setAgentType(e.target.value)}>
              <option value="chatbot">Chatbot</option>
              <option value="dataAnalysis">Data Analysis</option>
              <option value="contentCreation">Content Creation</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>AI Initiative</FormLabel>
            <Input value={initiative} onChange={(e) => setInitiative(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="green">
            Onboard Agent
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default AgentOnboarding

