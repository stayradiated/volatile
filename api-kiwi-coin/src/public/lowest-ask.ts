import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError } from '../util/error.js'
import { client } from '../util/client.js'

const lowestAsk = async (): Promise<number | Error> => {
  const price = await errorBoundary(async () =>
    client
      .get('extprice', {
        prefixUrl: 'https://kiwi-coin.com/',
        searchParams: { s: '-1', t: 'sell' },
      })
      .text(),
  )

  if (price instanceof Error) {
    return new NetError({
      message: 'Could not fetch lowest ask from kiwi-coin.com',
      cause: price,
    })
  }

  return Number.parseFloat(price)
}

export { lowestAsk }
