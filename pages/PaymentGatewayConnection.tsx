"use client"

import type React from "react"

import { useState } from "react"
import { Box, Heading, FormControl, FormLabel, Input, Button, VStack, Select, useToast } from "@chakra-ui/react"

const PaymentGatewayConnection = () => {
  const [gatewayType, setGatewayType] = useState("")
  const [apiKey, setApiKey] = useState("")
  const [secretKey, setSecretKey] = useState("")
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate connection process
    console.log({ gatewayType, apiKey, secretKey })
    toast({
      title: "Payment Gateway Connected",
      description: "Your payment gateway has been successfully connected.",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    // Reset form
    setGatewayType("")
    setApiKey("")
    setSecretKey("")
  }

  return (
    <Box p={8}>
      <Heading mb={6}>Connect Payment Gateway</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Payment Gateway</FormLabel>
            <Select
              placeholder="Select payment gateway"
              value={gatewayType}
              onChange={(e) => setGatewayType(e.target.value)}
            >
              <option value="stripe">Stripe</option>
              <option value="paypal">PayPal</option>
              <option value="virtualCard">Virtual Card</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>API Key</FormLabel>
            <Input type="password" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Secret Key</FormLabel>
            <Input type="password" value={secretKey} onChange={(e) => setSecretKey(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="green">
            Connect Gateway
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default PaymentGatewayConnection

