import { useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'

import type {
  GetTradeAvgPriceQuery as Query,
  GetTradeAvgPriceQueryVariables as QueryVariables,
} from '../../utils/graphql'

import { Spin, Alert } from '../retro-ui'
import { Chart, ChartConfig, formatDataForChart } from '../chart'

const QUERY = gql`
  query getTradeAvgPrice($primaryCurrency: String!) {
    kc_trade_avg_price_by_window(
      args: { group_by: "hour", currency: "NZD" }
      where: { primary_currency: { _eq: $primaryCurrency } }
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
        type: 'area',
        options: {
          lineColor: 'rgba(125, 95, 255,1.0)',
          topColor: 'rgba(125, 95, 255,0.2)',
          bottomColor: 'rgba(125, 95, 255,0.2)',
        },
        data: formatDataForChart({
          interval: 'hour',
          data: rows,
          getValue: (row) => row.price!,
          getTime: (row) => row.timestamp!,
        }),
      },
      {
        type: 'area',
        options: {
          lineColor: 'rgba(255, 77, 77, 1.0)',
          topColor: 'rgba(255, 77, 77, 0.8)',
          bottomColor: 'rgba(255, 77, 77, 0.2)',
        },
        data: formatDataForChart({
          interval: 'hour',
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
      <h2>{primaryCurrency}-NZD</h2>
      <Chart width={1160} charts={charts} />
    </>
  )
}

export { TradeAvgPrice }
