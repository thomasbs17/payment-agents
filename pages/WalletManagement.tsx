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
  Select,
  NumberInput,
  NumberInputField,
  useToast,
} from "@chakra-ui/react"

const WalletManagement = () => {
  const [agentId, setAgentId] = useState("")
  const [walletType, setWalletType] = useState("")
  const [initialBalance, setInitialBalance] = useState("")
  const [dailyLimit, setDailyLimit] = useState("")
  const [monthlyLimit, setMonthlyLimit] = useState("")
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate wallet creation process
    console.log({ agentId, walletType, initialBalance, dailyLimit, monthlyLimit })
    toast({
      title: "Wallet Created",
      description: "The sub-wallet has been successfully created and assigned to the agent.",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    // Reset form
    setAgentId("")
    setWalletType("")
    setInitialBalance("")
    setDailyLimit("")
    setMonthlyLimit("")
  }

  return (
    <Box p={8}>
      <Heading mb={6}>Wallet Management</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Agent ID</FormLabel>
            <Input value={agentId} onChange={(e) => setAgentId(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Wallet Type</FormLabel>
            <Select placeholder="Select wallet type" value={walletType} onChange={(e) => setWalletType(e.target.value)}>
              <option value="prepaid">Prepaid</option>
              <option value="postpaid">Postpaid</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Initial Balance</FormLabel>
            <NumberInput min={0}>
              <NumberInputField value={initialBalance} onChange={(e) => setInitialBalance(e.target.value)} />
            </NumberInput>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Daily Limit</FormLabel>
            <NumberInput min={0}>
              <NumberInputField value={dailyLimit} onChange={(e) => setDailyLimit(e.target.value)} />
            </NumberInput>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Monthly Limit</FormLabel>
            <NumberInput min={0}>
              <NumberInputField value={monthlyLimit} onChange={(e) => setMonthlyLimit(e.target.value)} />
            </NumberInput>
          </FormControl>
          <Button type="submit" colorScheme="green">
            Create Wallet
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default WalletManagement

