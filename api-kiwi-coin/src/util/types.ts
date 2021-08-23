type Config = {
  userId: string
  apiKey: string
  apiSecret: string
}

type Order = {
  price: string
  amount: string
  type: 0 | 1
  id: number
  datetime: string
}

export type { Config, Order }
