import type { Argv } from 'yargs'
import { DateTime } from 'luxon'

import { graphqlPaginate } from '../../utils/graphql.js'
import { getAuthHeaders } from '../../utils/auth.js'
import { createHandler } from '../../utils/create-handler.js'
import { drawTable } from './draw-table.js'
import type { RowData } from './types.js'
import type { GetTradesQuery } from './index.graphql'

export const command = 'trades'

export const desc = 'Print trades'

type Options = {
  asset: string
}

export const builder = (yargs: Argv) =>
  yargs.option('asset', {
    alias: 's',
    type: 'string',
    required: true,
  })

const QUERY_GET_TRADES = /* GraphQL */ `
  query getTrades($assetSymbol: String!, $limit: Int!, $offset: Int!) {
    kc_trade_aggregate {
      aggregate {
        count
      }
    }
    kc_trade(
      where: { primary_currency: { _eq: $assetSymbol } }
      order_by: { timestamp: asc }
      limit: $limit
      offset: $offset
    ) {
      exchange {
        id
      }
      order {
        created_at
      }
      trade_id
      timestamp
      volume
      primary_currency
      type
      price
      fee
      total_value
    }
  }
`

export const handler = createHandler<Options>(async (config, argv) => {
  const { asset } = argv

  const authHeaders = await getAuthHeaders(config)
  if (authHeaders instanceof Error) {
    return authHeaders
  }

  const result = await graphqlPaginate<GetTradesQuery>({
    endpoint: config.endpoint,
    query: QUERY_GET_TRADES,
    variables: {
      assetSymbol: asset,
    },
    headers: authHeaders,
    getTotal: (result) => result.kc_trade_aggregate.aggregate?.count ?? 0,
    merge: (a, b) => ({
      kc_trade_aggregate: a.kc_trade_aggregate,
      kc_trade: [...a.kc_trade, ...b.kc_trade],
    }),
  })
  if (result instanceof Error) {
    return result
  }

  const rowData = result.data.kc_trade.map<RowData>((trade) => ({
    exchange: trade.exchange.id,
    tradeID: trade.trade_id,
    orderCreatedAt: trade.order
      ? DateTime.fromISO(trade.order.created_at)
      : undefined,
    date: DateTime.fromISO(trade.timestamp),
    price: trade.price,
    assetSymbol: trade.primary_currency,
    nzd: trade.total_value,
    btc: trade.volume,
    fee: (trade.fee / trade.total_value) * 100,
    type: trade.type,
  }))

  console.log(drawTable(rowData))

  return undefined
})
