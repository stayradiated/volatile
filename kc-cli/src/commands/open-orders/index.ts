import { DateTime } from 'luxon'

import { graphql } from '../../utils/graphql.js'
import { getAuthHeaders } from '../../utils/auth.js'
import { createHandler } from '../../utils/create-handler.js'
import { drawTable } from './draw-table.js'
import type { RowData } from './types.js'

export const command = 'open-orders'

export const desc = 'Print open orders'

export const builder = {}

type GetOpenOrdersResult = {
  data: {
    kc_order: Array<{
      exchange: { id: string }
      opened_at: string
      amount: number
      price_nzd: number
      symbol: string
      type: string
    }>
  }
}

const QUERY_GET_OPEN_ORDERS = `
query getOpenOrdesr {
  kc_order(where:{closed_at:{_is_null: true}}) {
    exchange { id }
    opened_at
    amount
    price_nzd
    symbol
    type
  }
}
`

export const handler = createHandler(async (config): Promise<void | Error> => {
  const authHeaders = await getAuthHeaders(config)
  if (authHeaders instanceof Error) {
    return authHeaders
  }

  const result = await graphql<GetOpenOrdersResult>(
    config.endpoint,
    authHeaders,
    QUERY_GET_OPEN_ORDERS,
    {},
  )
  if (result instanceof Error) {
    throw result
  }

  const rowData = result.data.kc_order.map<RowData>((order) => ({
    exchangeID: order.exchange.id,
    openedAt: DateTime.fromISO(order.opened_at),
    amount: order.amount,
    priceNZD: order.price_nzd,
    totalNZD: order.amount * order.price_nzd,
    symbol: order.symbol,
    type: order.type,
  }))

  console.log(drawTable(rowData))
})
