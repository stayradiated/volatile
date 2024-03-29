import React from 'react'
import { ApolloProvider } from '@apollo/client'

import { client } from './utils/apollo-client'

import 'react-day-picker/dist/style.css'
import './global.css'

type Props = {
  children: React.ReactNode
}

const App = (props: Props) => {
  const { children } = props
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </React.StrictMode>
  )
}

export default App
