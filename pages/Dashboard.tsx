import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react"

const Dashboard = () => {
  const transactions = [
    { id: 1, agent: "ChatBot-001", website: "api.openai.com", amount: 0.05, status: "Completed" },
    { id: 2, agent: "DataAnalyst-002", website: "aws.amazon.com", amount: 1.2, status: "Pending" },
    { id: 3, agent: "ContentCreator-003", website: "api.shutterstock.com", amount: 0.5, status: "Completed" },
  ]

  const handleAudit = (id: number) => {
    console.log(`Auditing transaction ${id}`)
    // In a real application, this would open a detailed view or start an audit process
  }

  return (
    <Box p={8}>
      <Heading mb={6}>Dashboard</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Transaction ID</Th>
            <Th>Agent</Th>
            <Th>Website</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions.map((transaction) => (
            <Tr key={transaction.id}>
              <Td>{transaction.id}</Td>
              <Td>{transaction.agent}</Td>
              <Td>{transaction.website}</Td>
              <Td>${transaction.amount.toFixed(2)}</Td>
              <Td>{transaction.status}</Td>
              <Td>
                <Button size="sm" colorScheme="blue" onClick={() => handleAudit(transaction.id)}>
                  Audit
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}

export default Dashboard

