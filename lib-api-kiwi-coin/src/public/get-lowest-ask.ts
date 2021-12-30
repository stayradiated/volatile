import { kanye, getResponseBody, NetError } from '@volatile/kanye'

type GetLowestAskResult = number

const getLowestAsk = async (): Promise<GetLowestAskResult | Error> => {
  const raw = await kanye('extprice', {
    prefixUrl: 'https://kiwi-coin.com/',
    searchParams: { s: '-1', t: 'sell' },
  })
  if (raw instanceof Error) {
    return raw
  }

  const price = getResponseBody(raw)
  if (price instanceof Error) {
    return new NetError({
      message: 'Could not fetch lowest ask from kiwi-coin.com',
      cause: price,
    })
  }

  return Number.parseFloat(price)
}

export { getLowestAsk }
export type { GetLowestAskResult }
