import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { getSession } from './session-store'

const httpLink = createHttpLink({
  uri: 'http://localhost:9999/v1/graphql',
  // Uri: 'http://localhost:5556/v1/graphql',
})

const authLink = setContext((_request, { headers }) => {
  const session = getSession()

  if (session.role === 'guest') {
    return {}
  }

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${session.authToken}`,
    },
  }
})

const cache = new InMemoryCache({
  typePolicies: {
    kc_user_exchange_keys: { keyFields: ['uid'] },
    kc_exchange: { keyFields: ['uid'] },
    kc_market: { keyFields: ['uid'] },
    kc_dca_order: { keyFields: ['uid'] },
  },
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
})

export { client }
