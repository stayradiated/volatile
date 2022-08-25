import type { Kanye } from '@volatile/kanye'
import { post, getResponseBody } from '../util/client.js'
import type { Order } from '../util/order.js'
import { parseOrder } from '../util/order.js'
import type { Config } from '../util/types.js'

type CreateBuyOrderOptions = { config: Config; price: number; amount: number }
type CreateBuyOrderResponse = {
  price: string
  amount: string
  type: 0 | 1
  id: number
  datetime: string
}

const createBuyOrder = async (
  options: CreateBuyOrderOptions,
): Promise<[Order | Error, Kanye?]> => {
  const { config, price, amount } = options

  const raw = await post(config, 'buy', {
    price: String(price),
    amount: String(amount),
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<CreateBuyOrderResponse>(raw)
  if (result instanceof Error) {
    return [result, raw]
  }

  const order = parseOrder(result)
  return [order, raw]
}

export { createBuyOrder }
export type { CreateBuyOrderOptions }
