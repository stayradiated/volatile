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
const INDEPENDENT_RESERVE = 'dee17387-de89-4e6c-817a-ddb667b1b3bb'

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
    independent_reserve_aud: kc_market_price(where:{
      market_uid: {_eq: "${INDEPENDENT_RESERVE}"},
      source_currency: { _eq: "AUD" },
      asset_symbol:{ _eq: $primaryCurrency },
      currency:{ _eq: $secondaryCurrency }
    }, order_by: {
      timestamp: desc
    }){
      price
      timestamp
    }
    independent_reserve_nzd: kc_market_price(where:{
      market_uid: {_eq: "${INDEPENDENT_RESERVE}"},
      source_currency: { _eq: "NZD" },
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

  const [visible, setVisible] = useState({
    binance_us: true,
    kiwi_coin: true,
    dasset: true,
    kraken: true,
    independent_reserve_aud: true,
    independent_reserve_nzd: true,
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
      visible.binance_us && {
        type: 'line',
        options: { color: '#7158e2' },
        data: formatDataForChart({
          data: data?.binance_us ?? [],
          getValue: (row) => row.price,
          getTime: (row) => row.timestamp,
        }),
      },
      visible.kiwi_coin && {
        type: 'line',
        options: { color: '#3ae374' },
        data: formatDataForChart({
          data: data?.kiwi_coin ?? [],
          getValue: (row) => row.price,
          getTime: (row) => row.timestamp,
        }),
      },
      visible.dasset && {
        type: 'line',
        options: { color: '#ff9f1a' },
        data: formatDataForChart({
          data: data?.dasset ?? [],
          getValue: (row) => row.price,
          getTime: (row) => row.timestamp,
        }),
      },
      visible.kraken && {
        type: 'line',
        options: { color: '#3d3d3d' },
        data: formatDataForChart({
          data: data?.kraken ?? [],
          getValue: (row) => row.price,
          getTime: (row) => row.timestamp,
        }),
      },
      visible.independent_reserve_aud && {
        type: 'line',
        options: { color: '#3d3d3d' },
        data: formatDataForChart({
          data: data?.independent_reserve_aud ?? [],
          getValue: (row) => row.price,
          getTime: (row) => row.timestamp,
        }),
      },
      visible.independent_reserve_nzd && {
        type: 'line',
        options: { color: '#3d3d3d' },
        data: formatDataForChart({
          data: data?.independent_reserve_nzd ?? [],
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
        id="binance_us"
        label="Binance.US"
        checked={visible.binance_us}
        onChange={handleToggleChecked}
      />
      <Toggle
        id="kiwi_coin"
        label="Kiwi-Coin"
        checked={visible.kiwi_coin}
        onChange={handleToggleChecked}
      />
      <Toggle
        id="dasset"
        label="Dasset"
        checked={visible.dasset}
        onChange={handleToggleChecked}
      />
      <Toggle
        id="kraken"
        label="Kraken"
        checked={visible.kraken}
        onChange={handleToggleChecked}
      />
      <Toggle
        id="independent_reserve_aud"
        label="Independent Reserve (AUD)"
        checked={visible.independent_reserve_aud}
        onChange={handleToggleChecked}
      />
      <Toggle
        id="independent_reserve_nzd"
        label="Independent Reserve (NZD)"
        checked={visible.independent_reserve_nzd}
        onChange={handleToggleChecked}
      />
    </>
  )
}

export { MarketPriceChart }
