import React from 'react'
import { ApolloProvider } from '@apollo/client'

import { client } from './utils/apollo-client'
import { getSession } from './utils/session-store'
import { SessionProvider } from './utils/session-context'

import './global.css'
import 'antd/dist/antd.css'

type Props = {
  children: React.ReactNode
}

const App = (props: Props) => {
  const { children } = props
  const session = getSession()

  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </ApolloProvider>
    </React.StrictMode>
  )
}

export { App }
