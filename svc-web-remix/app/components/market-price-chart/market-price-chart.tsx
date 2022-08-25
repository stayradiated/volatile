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
    binanceUs: true,
    kiwiCoin: true,
    dasset: true,
    kraken: true,
    independentReserveAud: true,
    independentReserveNzd: true,
  })

  const handleToggleChecked = (id: string, checked: boolean) => {
    setVisible((state) => ({ ...state, [id]: checked }))
  }

  const charts = useMemo(
    (): ChartConfig[] =>
      [
        visible.binanceUs && {
          type: 'line',
          options: { color: '#7158e2' },
          data: formatDataForChart({
            data: query.binanceUs[0]?.marketPrices ?? [],
            getValue: (row) => row.price,
            getTime: (row) => row.timestamp,
          }),
        },
        visible.kiwiCoin && {
          type: 'line',
          options: { color: '#3ae374' },
          data: formatDataForChart({
            data: query.kiwiCoin[0]?.marketPrices ?? [],
            getValue: (row) => row.price,
            getTime: (row) => row.timestamp,
          }),
        },
        visible.dasset && {
          type: 'line',
          options: { color: '#ff9f1a' },
          data: formatDataForChart({
            data: query.dasset[0]?.marketPrices ?? [],
            getValue: (row) => row.price,
            getTime: (row) => row.timestamp,
          }),
        },
        visible.kraken && {
          type: 'line',
          options: { color: '#3d3d3d' },
          data: formatDataForChart({
            data: query.kraken[0]?.marketPrices ?? [],
            getValue: (row) => row.price,
            getTime: (row) => row.timestamp,
          }),
        },
        visible.independentReserveAud && {
          type: 'line',
          options: { color: '#3d3d3d' },
          data: formatDataForChart({
            data: query.independentReserveAud[0]?.marketPrices ?? [],
            getValue: (row) => row.price,
            getTime: (row) => row.timestamp,
          }),
        },
        visible.independentReserveNzd && {
          type: 'line',
          options: { color: '#3d3d3d' },
          data: formatDataForChart({
            data: query.independentReserveNzd[0]?.marketPrices ?? [],
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
        id="binanceUs"
        label="Binance.US"
        checked={visible.binanceUs}
        onChange={handleToggleChecked}
      />
      <Toggle
        id="kiwiCoin"
        label="Kiwi-Coin"
        checked={visible.kiwiCoin}
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
        id="independentReserveAud"
        label="Independent Reserve (AUD)"
        checked={visible.independentReserveAud}
        onChange={handleToggleChecked}
      />
      <Toggle
        id="independentReserveNzd"
        label="Independent Reserve (NZD)"
        checked={visible.independentReserveNzd}
        onChange={handleToggleChecked}
      />
    </>
  )
}

export { MarketPriceChart }
