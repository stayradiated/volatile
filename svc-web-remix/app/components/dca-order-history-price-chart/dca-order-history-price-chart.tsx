import { useMemo} from 'react'

import { Chart, ChartConfig, formatDataForChart } from '../chart'

import type {
  GetDcaOrderHistoryPriceChartQuery,
  DcaOrderHistoryPriceChart_Kc_Dca_Order_HistoryFragment,
} from '~/graphql/generated'

type Props = {
  query: GetDcaOrderHistoryPriceChartQuery,
  dcaOrderHistoryList: DcaOrderHistoryPriceChart_Kc_Dca_Order_HistoryFragment[]
  dateRange: { lte: Date; gt: Date }
}

const DCAOrderHistoryPriceChart = (props: Props) => {
  const { query, dcaOrderHistoryList } = props

  // const [localDateRange, setLocalDateRange] = useState(dateRange)
  //
  // useEffect(() => {
  //   if (!loading && dateRange !== localDateRange) {
  //     fetchMore({
  //       variables: {
  //         lte: formatISO(localDateRange.gt),
  //         gt: formatISO(dateRange.gt),
  //       },
  //     })
  //     setLocalDateRange(dateRange)
  //   }
  // }, [loading, dateRange])

  const config = {
    rightPriceScale: {
      scaleMargins: {
        top: 0,
        bottom: 0.1,
      },
    },
  }

  const charts = useMemo((): ChartConfig[] => {
    return [
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
          getTime: (row) => row.created_at,
        }),
      },
      {
        type: 'line',
        options: { color: 'rgba(75, 75, 75,0.5)' },
        data: formatDataForChart({
          data: query.kc_dca_order_by_pk?.market_prices ?? [],
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
            query.kc_dca_order_by_pk?.exchange_market_trading_pair?.[0]
              ?.market_prices ?? [],
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
            row.created_order
              ? undefined
              : row.market_price * ((100 + row.market_offset) / 100),
          getTime: (row) => row.created_at,
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
            row.created_order
              ? row.market_price * ((100 + row.market_offset) / 100)
              : undefined,
          getTime: (row) => row.created_at,
        }),
      },
    ]
  }, [query, dcaOrderHistoryList])

  return <Chart width={1160} config={config} charts={charts} />
}


export { DCAOrderHistoryPriceChart }
