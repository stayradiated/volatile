import { kanye, Kanye, getResponseBody, NetError } from '@volatile/kanye'

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
): Promise<[GetExtPriceResult | Error, Kanye?]> => {
  const { source } = options

  const raw = await kanye('extprice', {
    prefixUrl: 'https://kiwi-coin.com/',
    searchParams: { s: source },
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const price = getResponseBody(raw)
  if (price instanceof Error) {
    const error = new NetError({
      message: 'Could not fetch ext price from kiwi-coin.com',
      cause: price,
      context: {
        options,
      },
    })
    return [error, raw]
  }

  return [Number.parseFloat(price), raw]
}

export { getExtPrice }
export type { GetExtPriceSource, GetExtPriceOptions, GetExtPriceResult }
