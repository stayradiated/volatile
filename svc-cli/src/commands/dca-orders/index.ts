import { graphql } from '../../utils/graphql.js'
import { getAuthHeaders } from '../../utils/auth.js'
import { createHandler } from '../../utils/create-handler.js'

import type { GetDcaOrdersQuery } from './index.graphql'

export const command = 'dca-orders'

export const desc = 'Print dca orders'

export const builder = {}

const getDcaOrdersQuery = /* GraphQL */ `
  query getDCAOrders {
    dcaOrder {
      exchange {
        id
      }
      market {
        id
      }
      primaryCurrencySymbol
      secondaryCurrencySymbol
      startAt
      dailyAverage
      marketOffset
      minValue
      maxValue

      dcaOrderHistories(limit: 1, orderBy: { createdAt: DESC }) {
        createdAt
        marketPrice
        marketOffset
        availableBalance
        targetValue
        createdOrder
        description
        primaryCurrency
        secondaryCurrency

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
    query: getDcaOrdersQuery,
    variables: {},
  })
  if (result instanceof Error) {
    return result
  }

  const dcaOrders = result.data.dcaOrder

  console.dir(dcaOrders, { depth: null })
  return undefined
})
