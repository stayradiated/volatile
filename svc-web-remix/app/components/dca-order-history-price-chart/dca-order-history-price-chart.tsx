import { useMemo } from 'react'

import { Chart, ChartConfig, formatDataForChart } from '../chart'

import type {
  GetDcaOrderHistoryPriceChartQuery,
  DcaOrderHistoryFragment,
} from '~/graphql/generated'

type Props = {
  query: GetDcaOrderHistoryPriceChartQuery
  dcaOrderHistoryList: DcaOrderHistoryFragment[]
  dateRange: { lte: Date; gt: Date }
}

const DcaOrderHistoryPriceChart = (props: Props) => {
  const { query, dcaOrderHistoryList } = props

  const config = {
    rightPriceScale: {
      scaleMargins: {
        top: 0,
        bottom: 0.1,
      },
    },
  }

  const charts = useMemo(
    (): ChartConfig[] => [
      {
        type: 'area',
        options: {
          topColor: 'rgba(75, 75, 75,1.0)',
          lineColor: 'rgba(75, 75, 75,0.8)',
          bottomColor: 'rgba(75, 75, 75,0.2)',
          lineWidth: 1,
          priceScaleId: '',
          scaleMargins: {
            top: 0.9,
            bottom: 0,
          },
        },
        data: formatDataForChart({
          data: dcaOrderHistoryList,
          getValue: (row) => row.value,
          getTime: (row) => row.createdAt,
        }),
      },
      {
        type: 'line',
        options: { color: 'rgba(75, 75, 75,0.5)' },
        data: formatDataForChart({
          data: query.dcaOrderByPk?.marketPrices ?? [],
          getValue: (row) => row.price,
          getTime: (row) => row.timestamp,
        }),
      },
      {
        type: 'area',
        options: {
          lineColor: 'rgba(255, 159, 26,1.0)',
          topColor: 'rgba(255, 159, 26,0.5)',
          bottomColor: 'rgba(255, 159, 26,0.0)',
        },
        data: formatDataForChart({
          data:
            query.dcaOrderByPk?.exchangeMarketTradingPair?.[0]?.marketPrices ??
            [],
          getValue: (row) => row.price,
          getTime: (row) => row.timestamp,
        }),
      },
      {
        type: 'line',
        options: { color: 'rgba(125, 95, 255,0.5)' },
        data: formatDataForChart({
          data: dcaOrderHistoryList,
          getValue: (row) =>
            row.createdOrder
              ? undefined
              : row.marketPrice * ((100 + row.marketOffset) / 100),
          getTime: (row) => row.createdAt,
        }),
      },
      {
        type: 'area',
        options: {
          topColor: 'rgba(125, 95, 255,1.0)',
          lineColor: 'rgba(125, 95, 255,0.5)',
          bottomColor: 'rgba(125, 95, 255,0)',
        },
        data: formatDataForChart({
          data: dcaOrderHistoryList,
          getValue: (row) =>
            row.createdOrder
              ? row.marketPrice * ((100 + row.marketOffset) / 100)
              : undefined,
          getTime: (row) => row.createdAt,
        }),
      },
    ],
    [query, dcaOrderHistoryList],
  )

  return <Chart width={1160} config={config} charts={charts} />
}

export { DcaOrderHistoryPriceChart }
