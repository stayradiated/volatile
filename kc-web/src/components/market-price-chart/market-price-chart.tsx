import { useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'

import type {
  GetMarketPriceQuery,
  GetMarketPriceQueryVariables,
} from '../../utils/graphql'

import { Spin, Alert } from '../retro-ui'
import { Chart, formatDataForChart } from '../chart'

const BINANCE = 'e2860358-91a5-44ca-8a61-a4cd077138f2'
const KIWI_COIN = 'dabad89d-2aae-407f-b97f-819c9461f4d7'
const DASSET = 'f60c1b14-a4c2-4bcb-b31d-8c50598183c3'

const QUERY = gql`
  query getMarketPrice (
    $primaryCurrency: String!
    $secondaryCurrency: String!
  ) {
    binance: kc_market_price(where:{
      market_uid: {_eq: "${BINANCE}"},
      asset_symbol:{ _eq: $primaryCurrency },
      currency:{ _eq: $secondaryCurrency }
    }, order_by: {
      timestamp: desc
    }){
      price
      timestamp
    }
    kiwi_coin: kc_market_price(where:{
      market_uid: {_eq: "${KIWI_COIN}"},
      asset_symbol:{ _eq: $primaryCurrency },
      currency:{ _eq: $secondaryCurrency }
    }, order_by: {
      timestamp: desc
    }){
      price
      timestamp
    }
    dasset: kc_market_price(where:{
      market_uid: {_eq: "${DASSET}"},
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

type Props = {
  primaryCurrency: string
  secondaryCurrency: string
}

const MarketPriceChart = (props: Props) => {
  const { primaryCurrency, secondaryCurrency } = props

  const { data, loading, error } = useQuery<
    GetMarketPriceQuery,
    GetMarketPriceQueryVariables
  >(QUERY, {
    variables: {
      primaryCurrency,
      secondaryCurrency,
    },
  })

  const charts = useMemo(() => {
    return [
      {
        color: 'blue',
        data: formatDataForChart({
          data: data?.binance ?? [],
          getValue: (row) => row.price,
          getTime: (row) => row.timestamp,
        }),
      },
      {
        color: 'green',
        data: formatDataForChart({
          data: data?.kiwi_coin ?? [],
          getValue: (row) => row.price,
          getTime: (row) => row.timestamp,
        }),
      },
      {
        color: 'orange',
        data: formatDataForChart({
          data: data?.dasset ?? [],
          getValue: (row) => row.price,
          getTime: (row) => row.timestamp,
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

export { MarketPriceChart }
