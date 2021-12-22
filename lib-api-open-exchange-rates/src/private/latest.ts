import type { Config } from '../util/types.js'
import { get } from '../util/client.js'

/* https://docs.openexchangerates.org/docs/latest-json */

type LatestOptions = {
  config: Config

  base?: string // Change base currency (3-letter code, default: USD)
  symbols?: string[] // Limit results to specific currencies (list of 3-letter codes)
  prettyprint?: boolean // Set to false to reduce response size (removes whitespace)
  showAlternative?: boolean // Extend returned values with alternative, black market and digital currency rates
}

type LatestResult = {
  disclaimer: string
  license: string
  timestamp: number
  base: string
  rates: Record<string, number>
}

type LatestSearchParameters = {
  base?: string
  symbols?: string
  prettyprint?: string
  show_alternative?: string
}

const latest = async (
  options: LatestOptions,
): Promise<LatestResult | Error> => {
  const { config, base, symbols, prettyprint, showAlternative } = options

  const parameters: LatestSearchParameters = {}

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

  const result = await get(config, 'latest.json', parameters)

  return result
}

export { latest }
