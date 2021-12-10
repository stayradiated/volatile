import { gql, useQuery } from '@apollo/client'
import { parseISO } from 'date-fns'

import type {
  GetMarketPriceQuery,
  GetMarketPriceQueryVariables,
} from '../../utils/graphql'

import { Spin, Alert } from '../retro-ui'

import { LineChart } from './line-chart'

const BINANCE = 'e2860358-91a5-44ca-8a61-a4cd077138f2'

type ChartData = GetMarketPriceQuery['kc_market_price']

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

const formatDataForChart = (data: ChartData) => {
  return data
    .map((row) => ({
      time: parseISO(row.timestamp).getTime() / 1000,
      value: row.price,
    }))
    .reverse()
}

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
      <LineChart data={formatDataForChart(data?.kc_market_price ?? [])} />
    </>
  )
}

export { MarketPriceChart }
