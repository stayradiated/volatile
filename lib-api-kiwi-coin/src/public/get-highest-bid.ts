import { kanye, Kanye, getResponseBody, NetError } from '@volatile/kanye'

type GetHighestBidResult = number

const getHighestBid = async (): Promise<
  [GetHighestBidResult | Error, Kanye?]
> => {
  const raw = await kanye('extprice', {
    prefixUrl: 'https://kiwi-coin.com/',
    searchParams: { s: '-1', t: 'buy' },
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const price = getResponseBody(raw)
  if (price instanceof Error) {
    const error = new NetError({
      message: 'Could not fetch highest bid from kiwi-coin.com',
      cause: price,
    })
    return [error, raw]
  }

  return [Number.parseFloat(price), raw]
}

export { getHighestBid }
export type { GetHighestBidResult }
