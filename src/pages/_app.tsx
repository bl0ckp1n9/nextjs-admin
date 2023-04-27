import { NextPage } from 'next'
import { AppProps } from 'next/app'
// eslint-disable-next-line import-helpers/order-imports
import React, { ReactElement, ReactNode } from 'react'

import 'react-toastify/dist/ReactToastify.css'
import '@/styles/globals.css'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
// eslint-disable-next-line import-helpers/order-imports
import MainTemplate from '@/templates/MainTemplate'
import { ToastContainer } from 'react-toastify'

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
      <ToastContainer autoClose={2000} theme="colored" />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

const getDefaultLayout = (page: ReactNode) => <MainTemplate>{page}</MainTemplate>

export default MyApp
