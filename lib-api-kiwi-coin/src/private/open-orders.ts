import { post } from '../util/client.js'
import { parseOrderList, Order } from '../util/order.js'
import type { Config } from '../util/types.js'

type GetOpenOrderListOptions = { config: Config }

type GetOpenOrderListResponse = Array<{
  price: string
  amount: string
  type: 0 | 1
  id: number
  datetime: string
}>

const getOpenOrderList = async (
  options: GetOpenOrderListOptions,
): Promise<Order[] | Error> => {
  const { config } = options

  const data = await post<GetOpenOrderListResponse>(config, 'open_orders')
  if (data instanceof Error) {
    return data
  }

  return parseOrderList(data)
}

export { getOpenOrderList }
export type { GetOpenOrderListOptions, GetOpenOrderListResponse }
