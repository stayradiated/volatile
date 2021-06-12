import ky from 'ky-universal'

const FIVE_SECONDS = 5 * 1000

const binance = ky.create({
  prefixUrl: 'https://api.binance.us/api/'
})

type TickerPriceOptions = {
  symbol: string,
}

type TickerPriceResponse = {
  price: string,
  symbol: string,
}

type TickerPriceResult = {
  price: number,
  symbol: string,
}

const tickerPrice = async (options: TickerPriceOptions, pastResult?: TickerPriceResult): Promise<TickerPriceResult> => {
  const { symbol } = options

  if (symbol.toUpperCase() !== symbol) {
    throw new Error(`Symbol must be uppercase, received "${symbol}".`)
  }

  const result:TickerPriceResponse = await binance.get('v3/ticker/price', {
    searchParams: {
      symbol,
    }
  }).json()

  const { price } = result

  return {
    price: parseFloat(price),
    symbol,
  }
}

export {
  tickerPrice
}
