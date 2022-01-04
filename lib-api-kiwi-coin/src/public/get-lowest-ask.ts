import { kanye, Kanye, getResponseBodyText, NetError } from '@volatile/kanye'

type GetLowestAskResult = number

const getLowestAsk = async (): Promise<
  [GetLowestAskResult | Error, Kanye?]
> => {
  const raw = await kanye('extprice', {
    prefixUrl: 'https://kiwi-coin.com/',
    searchParams: { s: '-1', t: 'sell' },
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const price = getResponseBodyText(raw)
  if (price instanceof Error) {
    const error = new NetError({
      message: 'Could not fetch lowest ask from kiwi-coin.com',
      cause: price,
    })
    return [error, raw]
  }

  return [Number.parseFloat(price), raw]
}

export { getLowestAsk }
export type { GetLowestAskResult }
