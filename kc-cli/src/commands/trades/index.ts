import { DateTime } from 'luxon'

import { graphql } from '../../utils/graphql.js'
import { getAuthHeaders } from '../../utils/auth.js'
import { createHandler } from '../../utils/create-handler.js'
import { drawTable } from './draw-table.js'
import type { RowData } from './types.js'

export const command = 'trades'

export const desc = 'Print trades'

export const builder = {}

type GetTradesResult = {
  data: {
    kc_trade: Array<{
      exchange: {
        id: string
      }
      timestamp: string
      amount: number
      symbol: string
      type: 'BUY' | 'SELL'
      price_nzd: number
      total_nzd: number
      fee_nzd: number
    }>
  }
}

const QUERY_GET_TRADES = `
query getTrades {
  kc_trade(order_by: {timestamp: asc}) {
    exchange {
      id
    }
    timestamp
    amount
    symbol
    type
    price_nzd
    total_nzd
    fee_nzd
  }
}
`

export const handler = createHandler(async (config): Promise<void | Error> => {
  const authHeaders = await getAuthHeaders(config)
  if (authHeaders instanceof Error) {
    return authHeaders
  }

  const result = await graphql<GetTradesResult>(
    config.endpoint,
    authHeaders,
    QUERY_GET_TRADES,
    {},
  )
  if (result instanceof Error) {
    throw result
  }

  const rowData = result.data.kc_trade.map<RowData>((trade) => ({
    exchange: trade.exchange.id,
    date: DateTime.fromISO(trade.timestamp),
    price: trade.price_nzd,
    symbol: trade.symbol,
    nzd: trade.total_nzd,
    btc: trade.amount,
    fee: (trade.fee_nzd / trade.total_nzd) * 100,
    type: trade.type,
  }))

  console.log(drawTable(rowData))
})
