import { useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'

import type {
  GetMarketPriceQuery,
  GetMarketPriceQueryVariables,
} from '../../utils/graphql'

import { Spin, Alert } from '../retro-ui'
import { Chart, formatDataForChart } from '../chart'

const BINANCE = 'e2860358-91a5-44ca-8a61-a4cd077138f2'

const QUERY = gql`
  query getMarketPrice (
    $primaryCurrency: String!
    $secondaryCurrency: String!
  ) {
    kc_market_price(where:{
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
          data: data?.kc_market_price ?? [],
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
