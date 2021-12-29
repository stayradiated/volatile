import ky from 'ky-universal'
import { errorBoundary } from '@stayradiated/error-boundary'
import { fromUnixTime, addSeconds } from 'date-fns'

const matchArray =
  <T>(varName: string) =>
  (input: string): T[] | Error => {
    const regExp = new RegExp(
      `var\\s*${varName}\\s*=\\s*(\\[[a-z0-9"{}:,.]+\\])`,
    )
    const match = regExp.exec(input)
    const jsonString = match?.[1]
    if (!jsonString) {
      return new Error(`Could not find array for "${varName}"`)
    }

    const array = JSON.parse(jsonString) as T[]
    return array
  }

const matchInt =
  (varName: string) =>
  (input: string): number | Error => {
    const regExp = new RegExp(`var\\s*${varName}\\s*=\\s*(\\d+)`)
    const match = regExp.exec(input)
    const string = match?.[1]
    if (!string) {
      return new Error(`Could not find numbe for "${varName}"`)
    }

    return Number.parseInt(string, 10)
  }

type KiwiCoinDeal = {
  datetime: number
  price: number
  volume: number
  direction: 'buy' | 'sell'
}

enum DealDirection {
  buy = 0,
  sell = 1,
}

type Deal = {
  datetime: Date
  price: number
  volume: number
  direction: DealDirection
}

const parseDeal = (kiwiCoinDeal: KiwiCoinDeal): Deal => ({
  datetime: fromUnixTime(kiwiCoinDeal.datetime),
  price: kiwiCoinDeal.price,
  volume: kiwiCoinDeal.volume,
  direction:
    kiwiCoinDeal.direction === 'buy' ? DealDirection.buy : DealDirection.sell,
})

type KiwiCoinPrice = {
  o: number
  c: number
  l: number
  h: number
  v: number
}

type Price = {
  datetime: Date
  open: number
  close: number
  low: number
  high: number
  volume: number
}

const parsePrice = (
  begin: number,
  period: number,
  kiwiCoinPrice: KiwiCoinPrice,
  index: number,
): Price => ({
  datetime: addSeconds(fromUnixTime(begin), period * index),
  open: Math.max(0, kiwiCoinPrice.o),
  close: Math.max(0, kiwiCoinPrice.c),
  low: Math.max(0, kiwiCoinPrice.l),
  high: Math.max(0, kiwiCoinPrice.h),
  volume: Math.max(0, kiwiCoinPrice.v),
})

type Stats = {
  prices: Price[]
  deals: Deal[]
}

const matchDealArray = matchArray<KiwiCoinDeal>('DealArray')
const matchPriceArray = matchArray<KiwiCoinPrice>('PriceArray')
const matchBeginInt = matchInt('Begin')
const matchPeriodInt = matchInt('Period')

const parseStats = (input: string): Stats | Error => {
  const priceArray = matchPriceArray(input)
  if (priceArray instanceof Error) {
    return priceArray
  }

  const dealArray = matchDealArray(input)
  if (dealArray instanceof Error) {
    return dealArray
  }

  const begin = matchBeginInt(input)
  if (begin instanceof Error) {
    return begin
  }

  const period = matchPeriodInt(input)
  if (period instanceof Error) {
    return period
  }

  return {
    prices: priceArray.map((price, index) =>
      parsePrice(begin, period, price, index),
    ),
    deals: dealArray.map((deal) => parseDeal(deal)),
  }
}

const fetchStats = async (): Promise<Stats | Error> => {
  const result = await errorBoundary(async () =>
    ky('https://kiwi-coin.com/stats.html', {
      headers: {
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36',
      },
    }).text(),
  )
  if (result instanceof Error) {
    return result
  }

  return parseStats(result)
}

export { fetchStats, parseStats, Stats, DealDirection, Deal, Price }
