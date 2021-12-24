import { useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'

import type {
  GetTradeSumValueByWeekByWeekQuery as Query,
  GetTradeSumValueByWeekByWeekQueryVariables as QueryVariables,
} from '../../utils/graphql'

import { Spin, Alert } from '../retro-ui'
import { Chart, ChartConfig, formatDataForChart } from '../chart'

const QUERY = gql`
  query getTradeSumValueByWeekByWeek {
    kc_trade_sum_by_window(
      args: {
        group_by: "week",
        currency: "NZD"
      }
      order_by: { timestamp: desc }
    ) {
      timestamp
      primary_currency
      total_value
    }
  }
`

const TradeSumValueByWeek = () => {
  const { data, loading, error } = useQuery<Query, QueryVariables>(QUERY)

  const charts = useMemo((): ChartConfig[] => {
    const rows = data?.kc_trade_sum_by_window ?? []

    const sum: Record<string, number> = {}
    rows.forEach((row) => {
      sum[row.timestamp!] = (sum[row.timestamp!] ?? 0) + row.total_value!
    })
    const sumRows = Object.entries(sum)

    return [
      {
        type: 'histogram',
        options: {
          color: 'rgba(76, 175, 80, 0.5)',
        },
        data: formatDataForChart({
          interval: 'week',
          data: sumRows,
          getValue: (row) => row[1],
          getTime: (row) => row[0],
        }),
      },
    ]
  }, [data])

  if (loading) {
    return <Spin />
  }

  if (error) {
    return <Alert message={error.message} type="error" />
  }

  return (
    <>
      <Chart width={1160} charts={charts} />
    </>
  )
}

export { TradeSumValueByWeek }
