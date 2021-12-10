import { useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'
import { parseISO, eachDayOfInterval } from 'date-fns'

import type {
  GetTradeAvgPriceByDayQuery as Query,
  GetTradeAvgPriceByDayQueryVariables as QueryVariables,
} from '../../utils/graphql'

import { Spin, Alert } from '../retro-ui'

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
  if (data.length === 0) {
    return []
  }

  const endDate = parseISO(data[0].day!)
  const startDate = parseISO(data[data.length - 1].day!)

  const map = new Map<number, any>(
    eachDayOfInterval({ start: startDate, end: endDate }).map((date) => {
      return [date.getTime() / 1000, undefined]
    }),
  )

  for (const row of data) {
    const time = parseISO(row.day!).getTime() / 1000
    map.set(time, row[key])
  }

  const results = [...map.entries()]
    .map((row) => {
      return { time: row[0], value: row[1] }
    })
    .sort((a, b) => a.time - b.time)

  let lastValue
  for (const row of results) {
    if (typeof row.value === 'undefined') {
      row.value = lastValue
    } else {
      lastValue = row.value
    }
  }

  return results.filter((row) => {
    return typeof row.value !== 'undefined'
  })
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
