import { kanye, getResponseBody, NetError } from '@volatile/kanye'

type GetHighestBidResult = number

const getHighestBid = async (): Promise<GetHighestBidResult | Error> => {
  const raw = await kanye('extprice', {
    prefixUrl: 'https://kiwi-coin.com/',
    searchParams: { s: '-1', t: 'buy' },
  })
  if (raw instanceof Error) {
    return raw
  }

  const price = getResponseBody(raw)
  if (price instanceof Error) {
    return new NetError({
      message: 'Could not fetch highest bid from kiwi-coin.com',
      cause: price,
    })
  }

  return Number.parseFloat(price)
}

export { getHighestBid }
export type { GetHighestBidResult }
