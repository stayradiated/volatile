import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { getSession } from './session-store'

const httpLink = createHttpLink({
  uri: 'http://localhost:7947/v1/graphql',
})

const authLink = setContext((_request, { headers }) => {
  const session = getSession()

  if (!session.isAuthenticated) {
    return {}
  }

  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': session.adminSecret
    },
  }
})

const cache = new InMemoryCache({
  typePolicies: {
    kc_exchange: { keyFields: ['uid'] },
  },
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
})

export { client }
