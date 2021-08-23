import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError } from '../util/error.js'
import { client } from '../util/client.js'

enum ExtPriceSource {
  worldwide = '1',
  europe = '2',
}

type ExtPriceOptions = {
  source: ExtPriceSource
}

type ExtPriceResult = {
  price: number
}

const extPrice = async (
  options: ExtPriceOptions,
): Promise<ExtPriceResult | Error> => {
  const { source } = options

  const price = await errorBoundary(async () =>
    client
      .get('extprice', {
        prefixUrl: 'https://kiwi-coin.com/',
        searchParams: { s: source },
      })
      .text(),
  )

  if (price instanceof Error) {
    return new NetError({
      message: 'Could not fetch ext price from kiwi-coin.com',
      cause: price,
      context: {
        options,
      },
    })
  }

  return {
    price: Number.parseFloat(price),
  }
}

export { extPrice }
export type { ExtPriceSource, ExtPriceOptions, ExtPriceResult }
