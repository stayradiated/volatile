import { parseISO } from 'date-fns'

import { graphql } from '../../utils/graphql.js'
import { getAuthHeaders } from '../../utils/auth.js'
import { createHandler } from '../../utils/create-handler.js'
import { drawTable } from './draw-table.js'
import type { RowData } from './types.js'

import type { GetOpenOrdersQuery } from './index.graphql'

export const command = 'open-orders'

export const desc = 'Print open orders'

export const builder = {}

const getOpenOrdersQuery = /* GraphQL */ `
  query getOpenOrders {
    order(where: { closedAt: { _isNull: true } }) {
      exchange {
        id
      }
      openedAt
      price
      value
      volume
      primaryCurrency
      secondaryCurrency
      type
    }
  }
`

export const handler = createHandler(async (config) => {
  const authHeaders = await getAuthHeaders(config)
  if (authHeaders instanceof Error) {
    return authHeaders
  }

  const result = await graphql<GetOpenOrdersQuery>({
    endpoint: config.endpoint,
    headers: authHeaders,
    query: getOpenOrdersQuery,
    variables: {},
  })
  if (result instanceof Error) {
    return result
  }

  const rowData = result.data.order.map<RowData>((order) => ({
    exchangeId: order.exchange.id,
    openedAt: parseISO(order.openedAt),
    value: order.value,
    price: order.price,
    volume: order.volume,
    primaryCurrency: order.primaryCurrency,
    secondaryCurrency: order.secondaryCurrency,
    type: order.type,
  }))

  console.log(drawTable(rowData))
  return undefined
})
