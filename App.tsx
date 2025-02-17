import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ChakraProvider, Box } from "@chakra-ui/react"
import Sidebar from "./components/Sidebar"
import EnterpriseOnboarding from "./pages/EnterpriseOnboarding"
import AgentOnboarding from "./pages/AgentOnboarding"
import PaymentGatewayConnection from "./pages/PaymentGatewayConnection"
import WalletManagement from "./pages/WalletManagement"
import PolicyManagement from "./pages/PolicyManagement"
import IdentityConfiguration from "./pages/IdentityConfiguration"
import Preview from "./pages/Preview"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box display="flex">
          <Sidebar />
          <Box flexGrow={1} p={5}>
            <Routes>
              <Route path="/" element={<EnterpriseOnboarding />} />
              <Route path="/agent-onboarding" element={<AgentOnboarding />} />
              <Route path="/payment-gateway" element={<PaymentGatewayConnection />} />
              <Route path="/wallet-management" element={<WalletManagement />} />
              <Route path="/policy-management" element={<PolicyManagement />} />
              <Route path="/identity-configuration" element={<IdentityConfiguration />} />
              <Route path="/preview" element={<Preview />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App

