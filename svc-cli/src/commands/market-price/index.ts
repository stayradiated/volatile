import { parseISO, subMinutes, set, formatISO } from 'date-fns'
import type { Argv } from 'yargs'

import { graphql } from '../../utils/graphql.js'
import { getAuthHeaders } from '../../utils/auth.js'
import { createHandler } from '../../utils/create-handler.js'

import { drawTable } from './draw-table.js'
import type { RowData } from './types.js'
import type { GetMarketPriceQuery } from './index.graphql'

export const command = 'market-price'

export const desc = 'Print current market price'

type Options = {
  asset?: string
}

export const builder = (yargs: Argv) =>
  yargs.option('asset', {
    alias: 's',
    type: 'string',
    required: true,
  })

const QUERY_GET_MARKET_PRICE = /* GraphQL */ `
  query getMarketPrice($assetSymbol: String!, $timestamp: timestamptz!) {
    market_price(
      distinct_on: [market_uid, asset_symbol, currency]
      where: {
        asset_symbol: { _eq: $assetSymbol }
        timestamp: { _gte: $timestamp }
      }
    ) {
      timestamp
      asset_symbol
      source_price
      source_currency
      fx_rate
      price
      currency
      market {
        name
      }
    }
  }
`

export const handler = createHandler<Options>(async (config, argv) => {
  const { asset } = argv

  const authHeaders = await getAuthHeaders(config)
  if (authHeaders instanceof Error) {
    return authHeaders
  }

  const result = await graphql<GetMarketPriceQuery>({
    endpoint: config.endpoint,
    headers: authHeaders,
    query: QUERY_GET_MARKET_PRICE,
    variables: {
      assetSymbol: asset,
      timestamp: formatISO(
        set(subMinutes(new Date(), 1), {
          seconds: 0,
          milliseconds: 0,
        }),
      ),
    },
  })
  if (result instanceof Error) {
    return result
  }

  const rowData = result.data.market_price
    .map<RowData | undefined>((marketPrice) => ({
      marketName: marketPrice.market.name,
      timestamp: parseISO(marketPrice.timestamp),
      assetSymbol: marketPrice.asset_symbol,
      sourcePrice: marketPrice.source_price,
      sourceCurrency: marketPrice.source_currency,
      fxRate: marketPrice.fx_rate,
      price: marketPrice.price,
      currency: marketPrice.currency,
    }))
    .filter(Boolean) as RowData[]

  console.log(drawTable(rowData))
  return undefined
})
