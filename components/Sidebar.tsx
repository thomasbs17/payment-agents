import { Link } from "react-router-dom"
import { Box, VStack, Text, Icon } from "@chakra-ui/react"
import { FaBuilding, FaRobot, FaCreditCard, FaWallet, FaShieldAlt, FaIdCard, FaEye, FaChartBar } from "react-icons/fa"

const Sidebar = () => {
  return (
    <Box bg="brand.700" w="200px" h="100vh" color="white" p={4}>
      <VStack spacing={4} align="stretch">
        <Link to="/">
          <Box display="flex" alignItems="center">
            <Icon as={FaBuilding} mr={2} />
            <Text>Enterprise Onboarding</Text>
          </Box>
        </Link>
        <Link to="/agent-onboarding">
          <Box display="flex" alignItems="center">
            <Icon as={FaRobot} mr={2} />
            <Text>Agent Onboarding</Text>
          </Box>
        </Link>
        <Link to="/payment-gateway">
          <Box display="flex" alignItems="center">
            <Icon as={FaCreditCard} mr={2} />
            <Text>Payment Gateway</Text>
          </Box>
        </Link>
        <Link to="/wallet-management">
          <Box display="flex" alignItems="center">
            <Icon as={FaWallet} mr={2} />
            <Text>Wallet Management</Text>
          </Box>
        </Link>
        <Link to="/policy-management">
          <Box display="flex" alignItems="center">
            <Icon as={FaShieldAlt} mr={2} />
            <Text>Policy Management</Text>
          </Box>
        </Link>
        <Link to="/identity-configuration">
          <Box display="flex" alignItems="center">
            <Icon as={FaIdCard} mr={2} />
            <Text>Identity Configuration</Text>
          </Box>
        </Link>
        <Link to="/preview">
          <Box display="flex" alignItems="center">
            <Icon as={FaEye} mr={2} />
            <Text>Preview</Text>
          </Box>
        </Link>
        <Link to="/dashboard">
          <Box display="flex" alignItems="center">
            <Icon as={FaChartBar} mr={2} />
            <Text>Dashboard</Text>
          </Box>
        </Link>
      </VStack>
    </Box>
  )
}

export default Sidebar

