import ky from 'ky-universal'

const ONE_HOUR = 60 * 60 * 1000

const openExchangeRates = ky.create({
  prefixUrl: 'https://openexchangerates.org/api/',
})

export type LatestOptions = {
  appId: string
  base: string
  symbol: string
}

export type LatestAPIResponse = {
  disclaimer: string
  license: string
  timestamp: number
  base: string
  rates: Record<string, number>
}

export type LatestResult = {
  requestDate: Date
  rateDate: Date
  base: string
  symbol: string
  rate: number
}

const latest = async (options: LatestOptions, pastResult?: LatestResult): Promise<LatestResult> => {
  const { appId, base, symbol } = options

  if (pastResult) {
    const delta = Date.now() - pastResult.rateDate.getTime()
    if (delta < ONE_HOUR) {
      return pastResult
    }
  }

  const requestDate = new Date()

  const response: LatestAPIResponse = await openExchangeRates
    .get('latest.json', {
      searchParams: {
        app_id: appId,
        base,
        symbols: symbol,
      },
    })
    .json()

  const rateDate = new Date(response.timestamp * 1000)

  const rate = response.rates[symbol]
  if (typeof rate !== 'number') {
    throw new Error(`Could not get ${base}/${symbol} rate. Expecting number, got "${rate}"`)
  }

  return {
    requestDate,
    rateDate,
    base,
    symbol,
    rate,
  }
}

export { latest }
