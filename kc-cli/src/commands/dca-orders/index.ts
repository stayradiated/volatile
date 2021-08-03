import { graphql } from '../../utils/graphql.js'
import { getAuthHeaders } from '../../utils/auth.js'
import { createHandler } from '../../utils/create-handler.js'

export const command = 'dca-orders'

export const desc = 'Print dca orders'

export const builder = {}

type GetDCAOrdersResult = {
  data: {
    kc_dca_order: Array<{
      exchange: { id: string }
      market: { id: string }
      symbol: string,
      start_at: string,
      daily_average: number,
      market_offset: number,
      min_amount_nzd: number | null,
      max_amount_nzd: number | null,

      dca_order_histories: Array<{
        created_at: string,
        market_price_nzd: number,
        available_balance_nzd: number,
        calculated_amount_nzd: number,
        created_order: boolean,
        description: string,
      }>
    }>
  }
}

const QUERY_GET_DCA_ORDERS = `
query getDCAOrders {
  kc_dca_order {
    exchange { id }
    market { id }
    symbol
    start_at
    daily_average
    market_offset
    min_amount_nzd
    max_amount_nzd
    
    dca_order_histories(limit:1, order_by:{created_at: desc}){
      created_at
      market_price_nzd
      available_balance_nzd
      calculated_amount_nzd
      created_order
      description
    }
  }
}
`

export const handler = createHandler(async (config): Promise<void | Error> => {
  const authHeaders = await getAuthHeaders(config)
  if (authHeaders instanceof Error) {
    return authHeaders
  }

  const result = await graphql<GetDCAOrdersResult>(
    config.endpoint,
    authHeaders,
    QUERY_GET_DCA_ORDERS,
    {},
  )
  if (result instanceof Error) {
    throw result
  }

  const dcaOrders = result.data.kc_dca_order

  console.dir(dcaOrders, { depth: null })
})
