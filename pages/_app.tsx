import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import MainLayout from '../components/layout/MainLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  )
}

export default MyApp
