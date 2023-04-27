import { NextPage } from 'next'
import { AppProps } from 'next/app'
// eslint-disable-next-line import-helpers/order-imports
import React, { ReactElement, ReactNode } from 'react'

import '@/styles/globals.css'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import MainLayout from '@/components/ui/templates/main-layout'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

interface Props extends AppProps {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: Props) => {
  const queryClient = new QueryClient()
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? getDefaultLayout

  return (
    <QueryClientProvider client={queryClient}>
      {getLayout(<Component {...pageProps} />)}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

const getDefaultLayout = (page: ReactNode) => <MainLayout>{page}</MainLayout>

export default MyApp
