import { useMemo } from 'react'

import type { GetTradeCumulativeSumByDayQuery } from '~/graphql/generated'

import { Chart, ChartConfig, formatDataForChart } from '../chart'

type Props = {
  query: GetTradeCumulativeSumByDayQuery
}

const TradeCumulativeSum = (props: Props) => {
  const { query } = props

  const charts = useMemo((): ChartConfig[] => {
    const rows = query.kc_trade_avg_price_by_window ?? []
    const btc = rows.filter((row) => row.primary_currency === 'BTC')
    const eth = rows.filter((row) => row.primary_currency === 'ETH')

    return [
      {
        type: 'area',
        options: {
          lineColor: 'rgba(125, 95, 255,1.0)',
          topColor: 'rgba(125, 95, 255,0.2)',
          bottomColor: 'rgba(125, 95, 255,0.2)',
        },
        data: formatDataForChart({
          interval: 'day',
          data: btc,
          getValue: (row) => row.total_value!,
          getTime: (row) => row.timestamp!,
        }),
      },
      {
        type: 'area',
        options: {
          lineColor: 'rgba(125, 95, 255,1.0)',
          topColor: 'rgba(125, 95, 255,0.2)',
          bottomColor: 'rgba(125, 95, 255,0.2)',
        },
        data: formatDataForChart({
          interval: 'day',
          data: eth,
          getValue: (row) => row.total_value!,
          getTime: (row) => row.timestamp!,
        }),
      },
    ]
  }, [query])

  const chartConfig = {
    rightPriceScale: {
      scaleMargins: {
        top: 0.1,
        bottom: 0.1,
      },
    },
  }

  return (
    <>
      <Chart width={1160} config={chartConfig} charts={charts} />
    </>
  )
}

export { TradeCumulativeSum }
