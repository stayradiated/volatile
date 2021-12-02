import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { offsetLimitPagination } from "@apollo/client/utilities";

import { getSession } from './session-store'

const httpLink = createHttpLink({
  uri: '/hasura/v1/graphql',
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
    kc_trade: { keyFields: ['uid'] },
    Query: {
      fields: {
        kc_trade: offsetLimitPagination(['where'])
      },
    },
  },
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
})

export { client }
