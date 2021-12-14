import { useMemo, useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { formatISO } from 'date-fns'

import { Alert, Spin } from '../retro-ui'
import { Chart, ChartConfig, formatDataForChart } from '../chart'

import type {
  GetDcaOrderHistoryPriceChartQuery as Query,
  GetDcaOrderHistoryPriceChartQueryVariables as QueryVariables,
  DcaOrderHistoryPriceChart_Kc_Dca_Order_HistoryFragment as Fragment,
} from '../../utils/graphql'

const QUERY = gql`
  query getDCAOrderHistoryPriceChart(
    $dcaOrderUID: uuid!
    $gt: timestamptz!
    $lte: timestamptz!
  ) {
    kc_dca_order_by_pk(uid: $dcaOrderUID) {
      uid
      exchange_market_trading_pair {
        market_uid
        primary_currency_symbol
        secondary_currency_symbol

        market_prices(
          where: { timestamp: { _lte: $lte, _gt: $gt } }
          order_by: { timestamp: desc }
        ) {
          price
          timestamp
        }
      }
      market_prices(
        where: { timestamp: { _lte: $lte, _gt: $gt } }
        order_by: { timestamp: desc }
      ) {
        price
        timestamp
      }
    }
  }
`

type Props = {
  dcaOrderUID: string
  dcaOrderHistoryList: Fragment[]
  dateRange: { lte: Date; gt: Date }
}

const DCAOrderHistoryPriceChart = (props: Props) => {
  const { dcaOrderUID, dcaOrderHistoryList, dateRange } = props

  const [localDateRange, setLocalDateRange] = useState(dateRange)

  const { data, loading, error, fetchMore } = useQuery<Query, QueryVariables>(
    QUERY,
    {
      variables: {
        dcaOrderUID,
        gt: formatISO(dateRange.gt),
        lte: formatISO(dateRange.lte),
      },
    },
  )

  useEffect(() => {
    console.log({
      lte: formatISO(localDateRange.gt),
      gt: formatISO(dateRange.gt),
    })
    fetchMore({
      variables: {
        lte: formatISO(localDateRange.gt),
        gt: formatISO(dateRange.gt),
      },
    })
    setLocalDateRange(dateRange)
  }, [dateRange])

  const charts = useMemo((): ChartConfig[] => {
    return [
      {
        type: 'line',
        options: { color: 'blue' },
        data: formatDataForChart({
          data: dcaOrderHistoryList,
          getValue: (row) =>
            row.created_order
              ? row.market_price * ((100 + row.market_offset) / 100)
              : undefined,
          getTime: (row) => row.created_at,
        }),
      },
      {
        type: 'line',
        options: { color: 'red' },
        data: formatDataForChart({
          data: data?.kc_dca_order_by_pk?.market_prices ?? [],
          getValue: (row) => row.price,
          getTime: (row) => row.timestamp,
        }),
      },
      {
        type: 'line',
        options: { color: 'orange' },
        data: formatDataForChart({
          data:
            data?.kc_dca_order_by_pk?.exchange_market_trading_pair?.[0]
              ?.market_prices ?? [],
          getValue: (row) => row.price,
          getTime: (row) => row.timestamp,
        }),
      },
      {
        type: 'area',
        options: {
          topColor: 'rgba(76, 175, 80, 0.5)',
          lineColor: 'rgba(76, 175, 80, 1)',
          bottomColor: 'rgba(76, 175, 80, 0.5)',
          lineWidth: 2,
          priceScaleId: '',
          scaleMargins: {
            top: 0.85,
            bottom: 0,
          },
        },
        data: formatDataForChart({
          data: dcaOrderHistoryList,
          getValue: (row) => row.value,
          getTime: (row) => row.created_at,
        }),
      },
    ]
  }, [data, dcaOrderHistoryList])

  if (loading && !data) {
    return <Spin />
  }

  if (error) {
    return <Alert message={error.message} type="error" />
  }

  return <Chart width={1160} charts={charts} />
}

DCAOrderHistoryPriceChart.fragments = {
  kc_dca_order_history: gql`
    fragment DCAOrderHistoryPriceChart_kc_dca_order_history on kc_dca_order_history {
      created_at
      created_order
      market_price
      market_offset
      value
      available_balance
    }
  `,
}

export { DCAOrderHistoryPriceChart }
