import type { Argv } from 'yargs'
import { parseISO } from 'date-fns'

import { graphqlPaginate } from '../../utils/graphql.js'
import { getAuthHeaders } from '../../utils/auth.js'
import { createHandler } from '../../utils/create-handler.js'
import { drawTable } from './draw-table.js'
import type { RowData } from './types.js'
import type { GetTradesQuery } from './index.graphql'

export const command = 'trades'

export const desc = 'Print trades'

type Options = {
  asset?: string
}

export const builder = (yargs: Argv) =>
  yargs.option('asset', {
    alias: 's',
    type: 'string',
    required: true,
  })

const getTradesQuery = /* GraphQL */ `
  query getTrades($assetSymbol: String!, $limit: Int!, $offset: Int!) {
    tradeAggregate: tradeAggregate {
      aggregate {
        count
      }
    }
    trade(
      where: { primaryCurrency: { _eq: $assetSymbol } }
      orderBy: { timestamp: ASC }
      limit: $limit
      offset: $offset
    ) {
      exchange {
        id
      }
      order {
        createdAt
      }
      tradeId
      timestamp
      volume
      primaryCurrency
      type
      price
      fee
      totalValue
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
    query: getTradesQuery,
    variables: {
      assetSymbol: asset,
    },
    headers: authHeaders,
    getTotal: (result) => result.tradeAggregate.aggregate?.count ?? 0,
    merge: (a, b) => ({
      tradeAggregate: a.tradeAggregate,
      trade: [...a.trade, ...b.trade],
    }),
  })
  if (result instanceof Error) {
    return result
  }

  const rowData = result.data.trade.map<RowData>((trade) => ({
    exchange: trade.exchange.id,
    tradeId: trade.tradeId,
    orderCreatedAt: trade.order ? parseISO(trade.order.createdAt) : undefined,
    date: parseISO(trade.timestamp),
    price: trade.price,
    assetSymbol: trade.primaryCurrency,
    nzd: trade.totalValue,
    btc: trade.volume,
    fee: (trade.fee / trade.totalValue) * 100,
    type: trade.type,
  }))

  console.log(drawTable(rowData))

  return undefined
})
