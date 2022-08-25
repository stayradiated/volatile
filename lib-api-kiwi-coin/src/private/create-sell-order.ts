import type { Kanye } from '@volatile/kanye'
import { post, getResponseBody } from '../util/client.js'
import type { Order } from '../util/order.js'
import { parseOrder } from '../util/order.js'
import type { Config } from '../util/types.js'

type CreateSellOrderOptions = { config: Config; price: number; amount: number }
type CreateSellOrderResponse = {
  price: string
  amount: string
  type: 0 | 1
  id: number
  datetime: string
}

const createSellOrder = async (
  options: CreateSellOrderOptions,
): Promise<[Order | Error, Kanye?]> => {
  const { config, price, amount } = options

  const raw = await post(config, 'sell', {
    price: String(price),
    amount: String(amount),
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<CreateSellOrderResponse>(raw)
  if (result instanceof Error) {
    return [result, raw]
  }

  const order = parseOrder(result)
  return [order, raw]
}

export { createSellOrder }
export type { CreateSellOrderOptions }
