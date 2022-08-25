import type { Kanye } from '@volatile/kanye'

import { post, getResponseBody } from '../util/client.js'
import type { Order } from '../util/order.js'
import { parseOrderList } from '../util/order.js'
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
): Promise<[Order[] | Error, Kanye?]> => {
  const { config } = options

  const raw = await post(config, 'open_orders')
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const responseBody = getResponseBody<GetOpenOrderListResponse>(raw)
  if (responseBody instanceof Error) {
    return [responseBody, raw]
  }

  const openOrderList = parseOrderList(responseBody)
  return [openOrderList, raw]
}

export { getOpenOrderList }
export type { GetOpenOrderListOptions, GetOpenOrderListResponse }
