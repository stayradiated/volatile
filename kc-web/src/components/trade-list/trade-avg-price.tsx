import { useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'
import { parseISO } from 'date-fns'
import { Spin, Alert } from 'antd'

import type {
  GetTradeAvgPriceByDayQuery as Query,
  GetTradeAvgPriceByDayQueryVariables as QueryVariables,
} from '../../utils/graphql'

import { LineChart } from './line-chart'

type ChartData = Query['kc_trade_avg_price_by_day']

const QUERY = gql`
  query getTradeAvgPriceByDay(
    $primaryCurrency: String!
    $secondaryCurrency: String!
  ) {
    kc_trade_avg_price_by_day(
      where: {
        primary_currency: { _eq: $primaryCurrency }
        secondary_currency: { _eq: $secondaryCurrency }
      }
      order_by: { day: desc }
    ) {
      day
      price
      avg_price
    }
  }
`

const formatDataForChart = (data: ChartData, key: 'price' | 'avg_price') => {
  return data
    .map((row) => ({
      time: parseISO(row.day!).getTime() / 1000,
      value: row[key]!,
    }))
    .reverse()
}

type Props = {
  primaryCurrency?: string
  secondaryCurrency?: string
}

const TradeAvgPrice = (props: Props) => {
  const { primaryCurrency = 'BTC', secondaryCurrency = 'NZD' } = props

  const { data, loading, error } = useQuery<Query, QueryVariables>(QUERY, {
    variables: {
      primaryCurrency,
      secondaryCurrency,
    },
  })

  const charts = useMemo(() => {
    const rows = data?.kc_trade_avg_price_by_day ?? []

    return [
      { color: 'blue', data: formatDataForChart(rows, 'price') },
      { color: 'red', data: formatDataForChart(rows, 'avg_price') },
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
        {primaryCurrency}-{secondaryCurrency}
      </h2>
      <LineChart charts={charts} />
    </>
  )
}

export { TradeAvgPrice }
