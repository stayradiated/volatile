import { graphql, GraphQLResult } from '../../utils/graphql.js'
import { getAuthHeaders } from '../../utils/auth.js'
import { createHandler } from '../../utils/create-handler.js'

export const command = 'dca-orders'

export const desc = 'Print dca orders'

export const builder = {}

type GetDCAOrdersResult = GraphQLResult<{
  kc_dca_order: Array<{
    exchange: { id: string }
    market: { id: string }
    asset_symbol: string
    start_at: string
    daily_average: number
    market_offset: number
    min_amount_nzd: number | null
    max_amount_nzd: number | null

    dca_order_histories: Array<{
      created_at: string
      market_price_nzd: number
      available_balance_nzd: number
      calculated_amount_nzd: number
      created_order: boolean
      description: string

      order: {
        price_nzd: number
        amount: number
      }
    }>
  }>
}>

const QUERY_GET_DCA_ORDERS = `
query getDCAOrders {
  kc_dca_order {
    exchange { id }
    market { id }
    asset_symbol
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

      order {
        price_nzd
        amount
      }
    }
  }
}
`

export const handler = createHandler(async (config) => {
  const authHeaders = await getAuthHeaders(config)
  if (authHeaders instanceof Error) {
    return authHeaders
  }

  const result = await graphql<GetDCAOrdersResult>({
    endpoint: config.endpoint,
    headers: authHeaders,
    query: QUERY_GET_DCA_ORDERS,
    variables: {},
  })
  if (result instanceof Error) {
    return result
  }

  const dcaOrders = result.data.kc_dca_order

  console.dir(dcaOrders, { depth: null })
  return undefined
})
