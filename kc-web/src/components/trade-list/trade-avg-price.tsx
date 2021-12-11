import { useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'

import type {
  GetTradeAvgPriceByDayQuery as Query,
  GetTradeAvgPriceByDayQueryVariables as QueryVariables,
} from '../../utils/graphql'

import { Spin, Alert } from '../retro-ui'
import { Chart, formatDataForChart } from '../chart'

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
      {
        color: 'blue',
        data: formatDataForChart({
          interval: 'day',
          data: rows,
          getValue: (row) => row.price!,
          getTime: (row) => row.day!,
        }),
      },
      {
        color: 'red',
        data: formatDataForChart({
          interval: 'day',
          data: rows,
          getValue: (row) => row.avg_price!,
          getTime: (row) => row.day!,
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
        {primaryCurrency}-{secondaryCurrency}
      </h2>
      <Chart.Line width={960} charts={charts} />
    </>
  )
}

export { TradeAvgPrice }
