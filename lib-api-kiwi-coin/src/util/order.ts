import { Prism, formatWarnings } from '@zwolf/prism'

import { toFloat, toBuySell, toDate } from './transforms.js'

type ApiResponse = {
  price: string
  amount: string
  type: 0 | 1
  id: number
  datetime: string
}
type Order = {
  id: number
  price: number
  amount: number
  type: 'BUY' | 'SELL'
  datetime: Date
}

const toOrder = ($: Prism<ApiResponse>): Order => ({
  id: $.get<number>('id').value ?? -1,
  price: $.get<string>('price').transform(toFloat).value ?? -1,
  amount: $.get<string>('amount').transform(toFloat).value ?? -1,
  type: $.get<number>('type').transform(toBuySell).value ?? 'BUY',
  datetime: $.get<string>('datetime').transform(toDate).value ?? new Date(0),
})

const parseOrder = (data: ApiResponse): Order | Error => {
  const $ = new Prism(data)

  const result = $.transform(toOrder).value!

  if ($.warnings.length > 0) {
    return new Error(formatWarnings($.warnings, 'root', false))
  }

  return result
}

const parseOrderList = (data: ApiResponse[]): Order[] | Error => {
  const $ = new Prism<ApiResponse[]>(data)
  const result = $.toArray().map(($item: Prism<ApiResponse>): Order => {
    return $item.transform(toOrder).value!
  })

  if ($.warnings.length > 0) {
    return new Error(formatWarnings($.warnings, 'root', false))
  }

  return result
}

export { parseOrder, parseOrderList }
export type { Order }
