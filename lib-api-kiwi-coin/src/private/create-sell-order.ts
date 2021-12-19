import { post } from '../util/client.js'
import { parseOrder, Order } from '../util/order.js'
import type { Config } from '../util/types.js'

type CreateSellOrderOptions = { config: Config; price: number; amount: number }
type CreateBuyOrderResponse = {
  price: string
  amount: string
  type: 0 | 1
  id: number
  datetime: string
}

const createSellOrder = async (
  options: CreateSellOrderOptions,
): Promise<Order | Error> => {
  const { config, price, amount } = options
  const data = await post<CreateBuyOrderResponse>(config, 'sell', {
    price: String(price),
    amount: String(amount),
  })
  if (data instanceof Error) {
    return data
  }

  return parseOrder(data)
}

export { createSellOrder }
export type { CreateSellOrderOptions }
