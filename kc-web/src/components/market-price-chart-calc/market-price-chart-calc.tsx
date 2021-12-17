import { useMemo, useState } from 'react'
import { gql, useQuery } from '@apollo/client'

import type {
  GetMarketPriceCalcQuery as Query,
  GetMarketPriceCalcQueryVariables as QueryVariables,
} from '../../utils/graphql'

import { Spin, Alert, Button } from '../retro-ui'
import { Chart, ChartConfig, formatDataForChart } from '../chart'

const BINANCE = 'e2860358-91a5-44ca-8a61-a4cd077138f2'

const QUERY = gql`
  query getMarketPriceCalc (
    $primaryCurrency: String!
    $secondaryCurrency: String!
  ) {
    source: kc_market_price(where:{
      market_uid: {_eq: "${BINANCE}"},
      asset_symbol:{ _eq: $primaryCurrency },
      currency:{ _eq: $secondaryCurrency }
    }, order_by: {
      timestamp: desc
    }){
      price
      timestamp
    }
  }
`

const calcAvg = (
  timespan: number,
  offset: number,
  frequency: number,
  dataSource: Query['source'],
) => {
  const offsetDec = (1000 + offset) / 1000

  return [...dataSource]
    .map((item, index) => {
      const lastNPrices = dataSource
        .slice(index, index + timespan)
        .map((item) => {
          return item.price
        })

      const avgPrice =
        lastNPrices.reduce((price, sum) => {
          return price + sum
        }, 0) / lastNPrices.length

      const calcPrice = Math.min(item.price, avgPrice) * offsetDec
      // Const calcPrice = Math.min(avgPrice, smallAvgPrice) * offsetDec

      // const calcPrice = lastNPrices.slice(1).reduce((price, acc) => {
      //   return Math.min(acc, price)
      // }, lastNPrices[0])

      return {
        timestamp: item.timestamp,
        price: calcPrice,
      }
    })
    .filter((_, index) => index % frequency === 0)
}

type Props = {
  primaryCurrency: string
  secondaryCurrency: string
}

const MarketPriceChartCalc = (props: Props) => {
  const { primaryCurrency, secondaryCurrency } = props

  const [timespan, setTimespan] = useState(30)
  const [offset, setOffset] = useState(0)
  const [frequency, setFrequency] = useState(4)

  const handleChangeTimespan = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setTimespan(Number.parseInt(value))
  }

  const handleChangeOffset = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setOffset(Number.parseInt(value))
  }

  const handleChangeFrequency = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target
    setFrequency(Number.parseInt(value))
  }

  const { data, loading, error, refetch } = useQuery<Query, QueryVariables>(
    QUERY,
    {
      variables: {
        primaryCurrency,
        secondaryCurrency,
      },
    },
  )

  const charts = useMemo((): ChartConfig[] => {
    return [
      {
        type: 'line',
        options: { color: 'black' },
        data: formatDataForChart({
          data: data?.source ?? [],
          getValue: (row) => row.price,
          getTime: (row) => row.timestamp,
        }),
      },
      {
        type: 'area',
        options: {
          topColor: 'rgba(171, 71, 188, 0.56)',
          bottomColor: 'rgba(171, 71, 188, 0.04)',
          lineColor: 'rgba(171, 71, 188, 1)',
        },
        data: formatDataForChart({
          data: calcAvg(timespan, offset, frequency, data?.source ?? []),
          getValue: (row) => row.price,
          getTime: (row) => row.timestamp,
        }),
      },
    ]
  }, [timespan, offset, frequency, data])

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

      <Chart width={960} charts={charts} />

      <Button onClick={async () => refetch()}>Refetch</Button>

      <input
        type="range"
        min="1"
        max="120"
        value={timespan}
        onChange={handleChangeTimespan}
      />
      <p>{timespan}</p>

      <input
        type="range"
        min="-30"
        max="30"
        step="1"
        value={offset}
        onChange={handleChangeOffset}
      />
      <p>{offset}</p>

      <input
        type="range"
        min="1"
        max="60"
        step="1"
        value={frequency}
        onChange={handleChangeFrequency}
      />
      <p>{frequency}</p>
    </>
  )
}

export { MarketPriceChartCalc }
