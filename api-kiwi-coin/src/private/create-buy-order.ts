import { post } from '../util/client.js'
import { parseOrder, Order } from '../util/order.js'
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
): Promise<Order | Error> => {
  const { config, price, amount } = options
  const data = await post<CreateBuyOrderResponse>(config, 'buy', {
    price: String(price),
    amount: String(amount),
  })
  if (data instanceof Error) {
    return data
  }

  return parseOrder(data)
}

export { createBuyOrder }
export type { CreateBuyOrderOptions }
