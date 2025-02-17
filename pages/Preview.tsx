import { Box, Heading, VStack, Text, Button, useToast } from "@chakra-ui/react"

const Preview = () => {
  const toast = useToast()

  const handleValidate = () => {
    // Simulate validation process
    toast({
      title: "Configuration Validated",
      description: "All configurations have been successfully validated.",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
  }

  return (
    <Box p={8}>
      <Heading mb={6}>Preview Configuration</Heading>
      <VStack spacing={4} align="stretch">
        <Box borderWidth={1} borderRadius="md" p={4}>
          <Heading size="md">Enterprise Details</Heading>
          <Text>Company: Acme Corp</Text>
          <Text>Admin: admin@acmecorp.com</Text>
        </Box>
        <Box borderWidth={1} borderRadius="md" p={4}>
          <Heading size="md">Agent Details</Heading>
          <Text>Name: ChatBot-001</Text>
          <Text>Type: Chatbot</Text>
          <Text>Initiative: Customer Support</Text>
        </Box>
        <Box borderWidth={1} borderRadius="md" p={4}>
          <Heading size="md">Payment Gateway</Heading>
          <Text>Type: Stripe</Text>
        </Box>
        <Box borderWidth={1} borderRadius="md" p={4}>
          <Heading size="md">Wallet Configuration</Heading>
          <Text>Type: Prepaid</Text>
          <Text>Initial Balance: $1000</Text>
          <Text>Daily Limit: $100</Text>
          <Text>Monthly Limit: $2000</Text>
        </Box>
        <Box borderWidth={1} borderRadius="md" p={4}>
          <Heading size="md">Policy Configuration</Heading>
          <Text>Time Restriction: Enabled</Text>
          <Text>Location Restriction: Disabled</Text>
          <Text>Usage Limit: Enabled</Text>
        </Box>
        <Box borderWidth={1} borderRadius="md" p={4}>
          <Heading size="md">Identity Configuration</Heading>
          <Text>Type: JWT</Text>
          <Text>Initial Trust Score: 80</Text>
        </Box>
        <Button onClick={handleValidate} colorScheme="green">
          Validate Configuration
        </Button>
      </VStack>
    </Box>
  )
}

export default Preview

