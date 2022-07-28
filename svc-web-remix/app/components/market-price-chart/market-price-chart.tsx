import { useMemo, useState } from 'react'

import { Chart, ChartConfig, formatDataForChart } from '../chart'
import type { GetMarketPriceQuery } from '~/graphql/generated'

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
  query: GetMarketPriceQuery
}

const MarketPriceChart = (props: Props) => {
  const { primaryCurrency, secondaryCurrency, query } = props

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

  const charts = useMemo(
    (): ChartConfig[] =>
      [
        visible.binance_us && {
          type: 'line',
          options: { color: '#7158e2' },
          data: formatDataForChart({
            data: query.binance_us[0]?.market_prices ?? [],
            getValue: (row) => row.price,
            getTime: (row) => row.timestamp,
          }),
        },
        visible.kiwi_coin && {
          type: 'line',
          options: { color: '#3ae374' },
          data: formatDataForChart({
            data: query.kiwi_coin[0]?.market_prices ?? [],
            getValue: (row) => row.price,
            getTime: (row) => row.timestamp,
          }),
        },
        visible.dasset && {
          type: 'line',
          options: { color: '#ff9f1a' },
          data: formatDataForChart({
            data: query.dasset[0]?.market_prices ?? [],
            getValue: (row) => row.price,
            getTime: (row) => row.timestamp,
          }),
        },
        visible.kraken && {
          type: 'line',
          options: { color: '#3d3d3d' },
          data: formatDataForChart({
            data: query.kraken[0]?.market_prices ?? [],
            getValue: (row) => row.price,
            getTime: (row) => row.timestamp,
          }),
        },
        visible.independent_reserve_aud && {
          type: 'line',
          options: { color: '#3d3d3d' },
          data: formatDataForChart({
            data: query.independent_reserve_aud[0]?.market_prices ?? [],
            getValue: (row) => row.price,
            getTime: (row) => row.timestamp,
          }),
        },
        visible.independent_reserve_nzd && {
          type: 'line',
          options: { color: '#3d3d3d' },
          data: formatDataForChart({
            data: query.independent_reserve_nzd[0]?.market_prices ?? [],
            getValue: (row) => row.price,
            getTime: (row) => row.timestamp,
          }),
        },
      ].filter(Boolean) as ChartConfig[],
    [query, visible],
  )

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
