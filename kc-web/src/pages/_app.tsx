import { ApolloProvider } from '@apollo/client'
import { client } from '../utils/apollo-client'

import 'antd/dist/antd.css'

type Props = {
  children: React.ReactNode
}

const App = (props: Props) => {
  const { children } = props
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default App
