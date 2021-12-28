import { useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'

import type {
  GetTradeCumulativeVolumeByDayQuery as Query,
  GetTradeCumulativeVolumeByDayQueryVariables as QueryVariables,
} from '../../utils/graphql'

import { Spin, Alert } from '../retro-ui'
import { Chart, ChartConfig, formatDataForChart } from '../chart'

const QUERY = gql`
  query getTradeCumulativeVolumeByDay {
    kc_trade_avg_price_by_window(
      args: { group_by: "day", currency: "NZD" }
      order_by: { timestamp: desc }
    ) {
      timestamp
      primary_currency
      volume
    }
  }
`

const TradeCumulativeVolume = () => {
  const { data, loading, error } = useQuery<Query, QueryVariables>(QUERY)

  const charts = useMemo((): ChartConfig[] => {
    const rows = data?.kc_trade_avg_price_by_window ?? []
    const btc = rows.filter((row) => row.primary_currency === 'BTC')
    const eth = rows.filter((row) => row.primary_currency === 'ETH')

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
          getValue: (row) => row.volume!,
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
          getValue: (row) => row.volume!,
          getTime: (row) => row.timestamp!,
        }),
      },
    ]
  }, [data])

  const chartConfig = {
    rightPriceScale: {
      scaleMargins: {
        top: 0.1,
        bottom: 0.1,
      },
    },
  }

  if (loading) {
    return <Spin />
  }

  if (error) {
    return <Alert message={error.message} type="error" />
  }

  return (
    <>
      <Chart width={1160} config={chartConfig} charts={charts} />
    </>
  )
}

export { TradeCumulativeVolume }
