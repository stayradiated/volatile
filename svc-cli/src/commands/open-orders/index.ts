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

const QUERY_GET_OPEN_ORDERS = /* GraphQL */ `
  query getOpenOrders {
    order(where: { closed_at: { _is_null: true } }) {
      exchange {
        id
      }
      opened_at
      price
      value
      volume
      primary_currency
      secondary_currency
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
    query: QUERY_GET_OPEN_ORDERS,
    variables: {},
  })
  if (result instanceof Error) {
    return result
  }

  const rowData = result.data.order.map<RowData>((order) => ({
    exchangeID: order.exchange.id,
    openedAt: parseISO(order.opened_at),
    value: order.value,
    price: order.price,
    volume: order.volume,
    primaryCurrency: order.primary_currency,
    secondaryCurrency: order.secondary_currency,
    type: order.type,
  }))

  console.log(drawTable(rowData))
  return undefined
})
