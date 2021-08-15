import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { client } from '../utils/apollo-client'

import 'antd/dist/antd.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
