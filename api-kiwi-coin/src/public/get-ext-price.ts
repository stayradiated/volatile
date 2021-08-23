import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError } from '../util/error.js'
import { client } from '../util/client.js'

enum GetExtPriceSource {
  worldwide = '1',
  europe = '2',
}

type GetExtPriceOptions = {
  source: GetExtPriceSource
}

type GetExtPriceResult = number

const getExtPrice = async (
  options: GetExtPriceOptions,
): Promise<GetExtPriceResult | Error> => {
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

  return Number.parseFloat(price)
}

export { getExtPrice }
export type { GetExtPriceSource, GetExtPriceOptions, GetExtPriceResult }
