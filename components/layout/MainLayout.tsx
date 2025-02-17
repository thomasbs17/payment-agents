import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  
  const navItems = [
    { href: "/Dashboard", label: "Dashboard" },
    { href: "/AgentOnboarding", label: "Agent Onboarding" },
    { href: "/EnterpriseOnboarding", label: "Enterprise Onboarding" },
    { href: "/IdentityConfiguration", label: "Identity Configuration" },
    { href: "/PaymentGatewayConnection", label: "Payment Gateway" },
    { href: "/PolicyManagement", label: "Policy Management" },
    { href: "/Preview", label: "Preview" },
    { href: "/WalletManagement", label: "Wallet Management" },
  ]

  return (
    <Flex direction="column" minH="100vh">
      <Box as="nav" bg="blue.600" color="white" p={4}>
        <Flex gap={6} overflowX="auto" whiteSpace="nowrap">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <ChakraLink
                p={2}
                borderRadius="md"
                bg={router.pathname === item.href ? "blue.700" : "transparent"}
                _hover={{ bg: "blue.500" }}
              >
                {item.label}
              </ChakraLink>
            </Link>
          ))}
        </Flex>
      </Box>
      <Box flex="1" p={8}>
        {children}
      </Box>
    </Flex>
  )
}

export default MainLayout
