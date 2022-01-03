import { format } from 'date-fns'
import { Kanye } from '@volatile/kanye'

import type { Config } from '../util/types.js'
import { get, getResponseBodyJSON } from '../util/client.js'

/* https://docs.openexchangerates.org/docs/historical-json */

type HistoricalOptions = {
  config: Config
  date: Date // The requested date
  base?: string // Change base currency (3-letter code, default: USD)
  symbols?: string[] // Limit results to specific currencies (list of 3-letter codes)
  prettyprint?: boolean // Set to false to reduce response size (removes whitespace)
  showAlternative?: boolean // Extend returned values with alternative, black market and digital currency rates
}

type HistoricalResult = {
  disclaimer: string
  license: string
  timestamp: number
  base: string
  rates: Record<string, number>
}

type HistoricalSearchParameters = {
  base?: string
  symbols?: string
  prettyprint?: string
  show_alternative?: string
}

const historical = async (
  options: HistoricalOptions,
): Promise<[HistoricalResult | Error, Kanye?]> => {
  const { config, base, symbols, prettyprint, showAlternative } = options

  const parameters: HistoricalSearchParameters = {}

  if (typeof base === 'string') {
    parameters.base = base
  }

  if (Array.isArray(symbols)) {
    parameters.symbols = symbols.join(',')
  }

  if (typeof prettyprint === 'boolean') {
    parameters.prettyprint = String(prettyprint)
  }

  if (typeof showAlternative === 'boolean') {
    parameters.show_alternative = String(showAlternative)
  }

  const date = format(options.date, 'yyyy-MM-dd')

  const raw = await get(config, `historical/${date}.json`, parameters)
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBodyJSON<HistoricalResult>(raw)

  return [result, raw]
}

export { historical }
