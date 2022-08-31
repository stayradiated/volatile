import { useMemo } from 'react'

import type { ChartConfig } from '../chart'
import { Chart, formatDataForChart } from '../chart'
import type { GetTradeCumulativeSumByDayQuery } from '~/graphql/generated'

type Props = {
  query: GetTradeCumulativeSumByDayQuery
}

const TradeCumulativeSum = (props: Props) => {
  const { query } = props

  const charts = useMemo((): ChartConfig[] => {
    const rows = query.tradeAvgPriceByWindow ?? []
    const btc = rows.filter((row) => row.primaryCurrency === 'BTC')
    const eth = rows.filter((row) => row.primaryCurrency === 'ETH')

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
          getValue: (row) => row.totalValue ?? undefined,
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
          getValue: (row) => row.totalValue ?? undefined,
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
