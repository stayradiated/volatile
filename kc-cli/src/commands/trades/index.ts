import ky from 'ky-universal'
import { HTTPError } from 'ky'
import { errorBoundary } from '@stayradiated/error-boundary'
import { DateTime } from 'luxon'

import { createHandler, Config } from '../../utils/create-handler.js'
import { drawTable } from './draw-table.js'
import type { RowData } from './types.js'

export const command = 'trades'

export const desc = 'Print trades'

export const builder = {}

type GetTradesResult = {
  data: {
    kc_trade: Array<{
      exchange: {
        id: string,
      }
      timestamp: string,
      amount: number,
      symbol: string,
      type: 'BUY' | 'SELL',
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

const graphql = async <T>(config: Config, query: string, variables: Record<string, unknown>): Promise<T|Error> => {
  const result = await errorBoundary(async () => ky.post(config.endpoint, {
    headers: {
      Authorization: `Bearer ${config.auth_token}`,
    },
    body: JSON.stringify({ query, variables })
  }).json())
  if (result instanceof Error) {
    if (result instanceof HTTPError) {
      const response = (await result.response.json())
      console.log(response)
    }
    return result
  }
  return result as T
}

export const handler = createHandler(
  async (config): Promise<void | Error> => {
    const result = await graphql<GetTradesResult>(config, QUERY_GET_TRADES, {})
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
      fee: trade.fee_nzd / trade.total_nzd * 100,
      type: trade.type,
    }))

    console.log(drawTable(rowData))
  },
)
