import ky from 'ky-universal'
import debug from 'debug'

const log = debug('exchange-rate')

// a little bit more than an hour because sometimes openexchangerates.com is
// slow to update
const MAX_CACHE_MS = 65 * 60 * 1000

const openExchangeRates = ky.create({
  prefixUrl: 'https://openexchangerates.org/api/',
  hooks: {
    beforeRequest: [
      (request) => {
        log(request.url)
      },
    ],
    afterResponse: [
      (request) => {
        log(request.url)
      },
    ],
  },
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

const latest = async (
  options: LatestOptions,
  pastResult?: LatestResult,
): Promise<LatestResult> => {
  const { appId, base, symbol } = options

  if (pastResult) {
    const delta = Date.now() - pastResult.rateDate.getTime()
    if (delta < MAX_CACHE_MS) {
      log(`re-using past data from ${(delta / 1000).toFixed(1)}s ago.`)
      return pastResult
    } else {
      log(`previous result is ${(delta / 1000).toFixed(1)}s old, querying API`)
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
    throw new TypeError(
      `Could not get ${base}/${symbol} rate. Expecting number, got "${rate}"`,
    )
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
