import { kanye, getResponseBodyJson } from '@volatile/kanye'

const prefixUrl = 'https://api.coinmarketcap.com/'

export enum Coin {
  BTC = 1,
  LTC = 2,
  XRP = 52,
  DOGE = 74,
  XLM = 512,
  ETH = 1027,
  BCH = 1831,
  BNB = 1839,
  LINK = 1975,
  ADA = 2010,
  USD = 2781,
  AUD = 2782,
  BRL = 2783,
  CAD = 2784,
  CHF = 2785,
  CLP = 2786,
  CNY = 2787,
  CZK = 2788,
  DKK = 2789,
  EUR = 2790,
  GBP = 2791,
  HKD = 2792,
  HUF = 2793,
  IDR = 2794,
  ILS = 2795,
  INR = 2796,
  JPY = 2797,
  KRW = 2798,
  MXN = 2799,
  MYR = 2800,
  NOK = 2801,
  NZD = 2802,
  PHP = 2803,
  PKR = 2804,
  PLN = 2805,
  RUB = 2806,
  SEK = 2807,
  SGD = 2808,
  THB = 2809,
  TRY = 2810,
  TWD = 2811,
  ZAR = 2812,
  AED = 2813,
  BGN = 2814,
  HRK = 2815,
  MUR = 2816,
  RON = 2817,
  ISK = 2818,
  NGN = 2819,
  COP = 2820,
  ARS = 2821,
  PEN = 2822,
  VND = 2823,
  UAH = 2824,
  BOB = 2832,
  ALL = 3526,
  AMD = 3527,
  AZN = 3528,
  BAM = 3529,
  BDT = 3530,
  BHD = 3531,
  BMD = 3532,
  BYN = 3533,
  CRC = 3534,
  CUP = 3535,
  DOP = 3536,
  DZD = 3537,
  EGP = 3538,
  GEL = 3539,
  GHS = 3540,
  GTQ = 3541,
  HNL = 3542,
  IQD = 3543,
  IRR = 3544,
  JMD = 3545,
  JOD = 3546,
  KES = 3547,
  KGS = 3548,
  KHR = 3549,
  KWD = 3550,
  KZT = 3551,
  LBP = 3552,
  LKR = 3553,
  MAD = 3554,
  MDL = 3555,
  MKD = 3556,
  MMK = 3557,
  MNT = 3558,
  NAD = 3559,
  NIO = 3560,
  NPR = 3561,
  OMR = 3562,
  PAB = 3563,
  QAR = 3564,
  RSD = 3565,
  SAR = 3566,
  SSP = 3567,
  TND = 3568,
  TTD = 3569,
  UGX = 3570,
  UYU = 3571,
  UZS = 3572,
  VES = 3573,
  DOT = 6636,
  UNI = 7083,
  SATS = 9022,
  BITS = 9023,
}

type ApiStatus = {
  timestamp: string
  error_code: number
  error_message: string
  elapsed: number
  credit_count: number
}

export type ChartOptions = {
  id: Coin
  range: '1D' | '7D' | '1M' | '3M' | '1Y' | 'YTD'
  convertId: Coin
}

type ApiChartPoint = {
  v: [number, number, number, number]
  c: [number, number, number]
}

type ApiChartResponse = {
  data: {
    points: Record<string, ApiChartPoint>
  }
  status: ApiStatus
}

export type ChartResult = Array<{ date: Date; price: number }>

export const chart = async (
  options: ChartOptions,
): Promise<ChartResult | Error> => {
  const { id, range, convertId } = options
  const raw = await kanye(
    prefixUrl + 'data-api/v3/cryptocurrency/detail/chart',
    {
      method: 'GET',
      searchParams: {
        id: id.toString(),
        range,
        convertId: convertId.toString(),
      },
    },
  )
  if (raw instanceof Error) {
    return raw
  }

  const result = getResponseBodyJson<ApiChartResponse>(raw)
  if (result instanceof Error) {
    return result
  }

  const results = Object.entries(result.data.points).map(
    ([timestamp, entry]) => {
      const date = new Date(Number.parseInt(timestamp, 10) * 1000)
      const price = entry.c[0]
      return { date, price }
    },
  )

  return results
}
