import ky from 'ky-universal'
import debug from 'debug'

const log = debug('binance-us')

const FIVE_SECONDS = 5 * 1000

const binance = ky.create({
  prefixUrl: 'https://api.binance.us/api/',
  hooks: {
    beforeRequest: [
      (request) => {
        log(request.url)
      },
    ],
    afterResponse: [
      (request) => {
        log(request.url)
      },
    ],
  },
})

export type TickerPriceOptions = {
  symbol: string
}

type TickerPriceResponse = {
  price: string
  symbol: string
}

export type TickerPriceResult = {
  requestDate: Date
  responseDate: Date
  price: number
  symbol: string
}

const tickerPrice = async (
  options: TickerPriceOptions,
  pastResult?: TickerPriceResult,
): Promise<TickerPriceResult> => {
  const { symbol } = options

  if (pastResult) {
    const delta = Date.now() - pastResult.responseDate.getTime()
    if (delta < FIVE_SECONDS) {
      log(`re-using past data from ${(delta/1000).toFixed(1)}s ago.`)
      return pastResult
    } else {
      log(`previous result is ${(delta / 1000).toFixed(1)}s old, querying API`)
    }
  }

  if (symbol.toUpperCase() !== symbol) {
    throw new Error(`Symbol must be uppercase, received "${symbol}".`)
  }

  const requestDate = new Date()

  const result: TickerPriceResponse = await binance
    .get('v3/ticker/price', {
      searchParams: {
        symbol,
      },
    })
    .json()

  const { price } = result

  return {
    requestDate,
    responseDate: new Date(),
    price: Number.parseFloat(price),
    symbol,
  }
}

export type AveragePriceOptions = {
  symbol: string
}

type AveragePriceResponse = {
  price: string
  symbol: string
}

export type AveragePriceResult = {
  requestDate: Date
  responseDate: Date
  price: number
  symbol: string
}

const averagePrice = async (
  options: AveragePriceOptions,
  pastResult?: AveragePriceResult,
): Promise<AveragePriceResult> => {
  const { symbol } = options

  if (pastResult) {
    const delta = Date.now() - pastResult.responseDate.getTime()
    if (delta < FIVE_SECONDS) {
      log(`re-using past data from ${(delta/1000).toFixed(1)}s ago.`)
      return pastResult
    } else {
      log(`previous result is ${(delta / 1000).toFixed(1)}s old, querying API`)
    }
  }

  if (symbol.toUpperCase() !== symbol) {
    throw new Error(`Symbol must be uppercase, received "${symbol}".`)
  }

  const requestDate = new Date()

  const result: AveragePriceResponse = await binance
    .get('v3/avgPrice', {
      searchParams: {
        symbol,
      },
    })
    .json()

  const { price } = result

  return {
    requestDate,
    responseDate: new Date(),
    price: Number.parseFloat(price),
    symbol,
  }
}

export { tickerPrice, averagePrice }
