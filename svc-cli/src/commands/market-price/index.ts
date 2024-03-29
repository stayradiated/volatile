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

const getMarketPriceQuery = /* GraphQL */ `
  query getMarketPrice($assetSymbol: String!, $timestamp: timestamptz!) {
    marketPrice(
      distinctOn: [marketUid, assetSymbol, currency]
      where: {
        assetSymbol: { _eq: $assetSymbol }
        timestamp: { _gte: $timestamp }
      }
    ) {
      timestamp
      assetSymbol
      sourcePrice
      sourceCurrency
      fxRate
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
    query: getMarketPriceQuery,
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

  const rowData = result.data.marketPrice
    .map<RowData | undefined>((marketPrice) => ({
      marketName: marketPrice.market.name,
      timestamp: parseISO(marketPrice.timestamp),
      assetSymbol: marketPrice.assetSymbol,
      sourcePrice: marketPrice.sourcePrice,
      sourceCurrency: marketPrice.sourceCurrency,
      fxRate: marketPrice.fxRate,
      price: marketPrice.price,
      currency: marketPrice.currency,
    }))
    .filter(Boolean) as RowData[]

  console.log(drawTable(rowData))
  return undefined
})
