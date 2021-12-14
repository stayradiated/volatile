import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import {
  offsetLimitPagination,
  concatPagination,
} from '@apollo/client/utilities'

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
    kc_dca_order: {
      keyFields: ['uid'],
      fields: {
        market_prices: concatPagination(['order_by']),
      },
    },
    kc_market_trading_pair: {
      keyFields: [
        'market_uid',
        'primary_currency_symbol',
        'secondary_currency_symbol',
      ],
      fields: {
        market_prices: concatPagination(['order_by']),
      },
    },
    kc_dca_order_history: { keyFields: ['uid'] },
    kc_trade: { keyFields: ['uid'] },
    kc_user_device: { keyFields: ['uid'] },
    Query: {
      fields: {
        kc_trade: offsetLimitPagination(['where']),
        kc_user_exchange_keys: {
          merge: (_existing, incoming) => incoming,
        },
        kc_dca_order: {
          merge: (_existing, incoming) => incoming,
        },
        kc_dca_order_history: concatPagination([
          'order_by',
          'where',
          ['dca_order_uid'],
        ]),
      },
    },
  },
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
})

export { client }
