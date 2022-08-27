import { format } from 'date-fns'
import type { Kanye } from '@volatile/kanye'
import { getResponseBodyJson } from '@volatile/kanye'

import type { Config } from '../util/types.js'
import { get } from '../util/client.js'

/* https://docs.openexchangerates.org/docs/timeseries-json */

type TimeSeriesOptions = {
  config: Config
  start: Date // The time series start date
  end: Date // The time series end date
  base?: string // Change base currency (3-letter code, default: USD)
  symbols?: string[] // Limit results to specific currencies (list of 3-letter codes)
  prettyprint?: boolean // Set to false to reduce response size (removes whitespace)
  showAlternative?: boolean // Extend returned values with alternative, black market and digital currency rates
}

type TimeSeriesResult = {
  disclaimer: string
  license: string
  start_date: string
  end_date: string
  base: string
  rates: Record<string, Record<string, number>>
}

type TimeSeriesSearchParameters = {
  start: string
  end: string
  base?: string
  symbols?: string
  prettyprint?: string
  show_alternative?: string
}

const timeseries = async (
  options: TimeSeriesOptions,
): Promise<[TimeSeriesResult | Error, Kanye?]> => {
  const {
    config,
    base,
    symbols,
    prettyprint = false,
    showAlternative,
  } = options

  const parameters: TimeSeriesSearchParameters = {
    start: format(options.start, 'yyyy-MM-dd'),
    end: format(options.end, 'yyyy-MM-dd'),
  }

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

  const raw = await get(config, 'time-series.json', parameters)
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBodyJson<TimeSeriesResult>(raw)

  return [result, raw]
}

export { timeseries }
