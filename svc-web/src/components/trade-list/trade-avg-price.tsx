import { useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'

import type {
  GetTradeAvgPriceByDayQuery as Query,
  GetTradeAvgPriceByDayQueryVariables as QueryVariables,
} from '../../utils/graphql'

import { Spin, Alert } from '../retro-ui'
import { Chart, ChartConfig, formatDataForChart } from '../chart'

const QUERY = gql`
  query getTradeAvgPriceByDay(
    $primaryCurrency: String!
  ) {
    kc_trade_avg_price_by_window(
      args: {
        group_by: "day",
        currency: "NZD"
      }
      where: {
        primary_currency: { _eq: $primaryCurrency }
      }
      order_by: { timestamp: desc }
    ) {
      timestamp
      price
      avg_price
    }
  }
`

type Props = {
  primaryCurrency?: string
}

const TradeAvgPrice = (props: Props) => {
  const { primaryCurrency = 'BTC' } = props

  const { data, loading, error } = useQuery<Query, QueryVariables>(QUERY, {
    variables: {
      primaryCurrency,
    },
  })

  const charts = useMemo((): ChartConfig[] => {
    const rows = data?.kc_trade_avg_price_by_window ?? []
    return [
      {
        type: 'line',
        options: { color: 'blue' },
        data: formatDataForChart({
          interval: 'day',
          data: rows,
          getValue: (row) => row.price!,
          getTime: (row) => row.timestamp!,
        }),
      },
      {
        type: 'line',
        options: { color: 'red' },
        data: formatDataForChart({
          interval: 'day',
          data: rows,
          getValue: (row) => row.avg_price!,
          getTime: (row) => row.timestamp!,
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
      <h2>
        {primaryCurrency}-NZD
      </h2>
      <Chart width={1160} charts={charts} />
    </>
  )
}

export { TradeAvgPrice }
