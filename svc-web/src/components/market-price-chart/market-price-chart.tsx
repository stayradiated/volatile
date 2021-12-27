import { useMemo, useState } from 'react'
import { gql, useQuery } from '@apollo/client'

import type {
  GetMarketPriceQuery,
  GetMarketPriceQueryVariables,
} from '../../utils/graphql'

import { Spin, Alert } from '../retro-ui'
import { Chart, ChartConfig, formatDataForChart } from '../chart'

const BINANCE_US = 'e2860358-91a5-44ca-8a61-a4cd077138f2'
const KIWI_COIN = 'dabad89d-2aae-407f-b97f-819c9461f4d7'
const DASSET = 'f60c1b14-a4c2-4bcb-b31d-8c50598183c3'
const KRAKEN = '20ed696d-1a82-42b9-8037-d7ae2c7bb3c4'

const QUERY = gql`
  query getMarketPrice (
    $primaryCurrency: String!
    $secondaryCurrency: String!
  ) {
    binance_us: kc_market_price(where:{
      market_uid: {_eq: "${BINANCE_US}"},
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
    kraken: kc_market_price(where:{
      market_uid: {_eq: "${KRAKEN}"},
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

let toggleNonce = 0

type ToggleProps = {
  id: string
  label: string
  checked: boolean
  onChange: (id: string, checked: boolean) => void
}

const Toggle = (props: ToggleProps) => {
  const { id, label, checked, onChange } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    onChange(id, checked)
  }

  const elementId = `Toggle_${id}_${toggleNonce++}`

  return (
    <div>
      <input
        type="checkbox"
        id={elementId}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={elementId}>{label}</label>
    </div>
  )
}

type Props = {
  primaryCurrency: string
  secondaryCurrency: string
}

const MarketPriceChart = (props: Props) => {
  const { primaryCurrency, secondaryCurrency } = props

  const [visible, setVisible] = useState<Record<string, boolean>>({
    [BINANCE_US]: true,
    [KIWI_COIN]: true,
    [DASSET]: true,
    [KRAKEN]: true,
  })

  const handleToggleChecked = (id: string, checked: boolean) => {
    setVisible((state) => ({ ...state, [id]: checked }))
  }

  const { data, loading, error } = useQuery<
    GetMarketPriceQuery,
    GetMarketPriceQueryVariables
  >(QUERY, {
    variables: {
      primaryCurrency,
      secondaryCurrency,
    },
  })

  const charts = useMemo((): ChartConfig[] => {
    return [
      visible[BINANCE_US] && {
        type: 'line',
        options: { color: '#7158e2' },
        data: formatDataForChart({
          data: data?.binance_us ?? [],
          getValue: (row) => row.price,
          getTime: (row) => row.timestamp,
        }),
      },
      visible[KIWI_COIN] && {
        type: 'line',
        options: { color: '#3ae374' },
        data: formatDataForChart({
          data: data?.kiwi_coin ?? [],
          getValue: (row) => row.price,
          getTime: (row) => row.timestamp,
        }),
      },
      visible[DASSET] && {
        type: 'line',
        options: { color: '#ff9f1a' },
        data: formatDataForChart({
          data: data?.dasset ?? [],
          getValue: (row) => row.price,
          getTime: (row) => row.timestamp,
        }),
      },
      visible[KRAKEN] && {
        type: 'line',
        options: { color: '#3d3d3d' },
        data: formatDataForChart({
          data: data?.kraken ?? [],
          getValue: (row) => row.price,
          getTime: (row) => row.timestamp,
        }),
      },
    ].filter(Boolean) as ChartConfig[]
  }, [data, visible])

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
      <Toggle
        id={BINANCE_US}
        label="Binance.US"
        checked={visible[BINANCE_US]}
        onChange={handleToggleChecked}
      />
      <Toggle
        id={KIWI_COIN}
        label="Kiwi-Coin"
        checked={visible[KIWI_COIN]}
        onChange={handleToggleChecked}
      />
      <Toggle
        id={DASSET}
        label="Dasset"
        checked={visible[DASSET]}
        onChange={handleToggleChecked}
      />
      <Toggle
        id={KRAKEN}
        label="Kraken"
        checked={visible[KRAKEN]}
        onChange={handleToggleChecked}
      />
    </>
  )
}

export { MarketPriceChart }
