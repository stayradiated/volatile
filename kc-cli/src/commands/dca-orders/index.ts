import { graphql } from '../../utils/graphql.js'
import { getAuthHeaders } from '../../utils/auth.js'
import { createHandler } from '../../utils/create-handler.js'

import type { GetDcaOrdersQuery } from './index.graphql'

export const command = 'dca-orders'

export const desc = 'Print dca orders'

export const builder = {}

const QUERY_GET_DCA_ORDERS = /* GraphQL */ `
  query getDCAOrders {
    kc_dca_order {
      exchange {
        id
      }
      market {
        id
      }
      primary_currency
      start_at
      daily_average
      market_offset
      min_value
      max_value

      dca_order_histories(limit: 1, order_by: { created_at: desc }) {
        created_at
        market_price
        available_balance
        target_value
        created_order
        description

        order {
          price
          volume
          value
        }
      }
    }
  }
`

export const handler = createHandler(async (config) => {
  const authHeaders = await getAuthHeaders(config)
  if (authHeaders instanceof Error) {
    return authHeaders
  }

  const result = await graphql<GetDcaOrdersQuery>({
    endpoint: config.endpoint,
    headers: authHeaders,
    query: QUERY_GET_DCA_ORDERS,
    variables: {},
  })
  if (result instanceof Error) {
    return result
  }

  const dcaOrders = result.data.kc_dca_order

  console.dir(dcaOrders, { depth: null })
  return undefined
})
