import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Spinner, Text } from '@chakra-ui/react'

export default function Home() {
  const router = useRouter()
  const [error, setError] = useState('')

  useEffect(() => {
    // Redirect to Dashboard by default
    router.push('/Dashboard').catch((err) => {
      console.error('Navigation error:', err)
      setError('Failed to navigate to Dashboard')
    })
  }, [router])

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Spinner size="xl" mb={4} />
      <Text>Loading Dashboard...</Text>
      {error && <Text color="red.500" mt={2}>{error}</Text>}
    </Box>
  )
}
