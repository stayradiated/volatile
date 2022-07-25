import { useMemo, useState } from 'react'

import { Chart, ChartConfig, formatDataForChart } from '../chart'
import type { GetMarketPriceQuery } from '~/graphql/generated'

type Source = GetMarketPriceQuery['binance_us'][number]['market_prices']

const calcAvg = (
  longAvg: number,
  minAvg: number,
  offset: number,
  interval: number,
  dataSource: Source,
) => {
  const offsetDec = (1000 + offset) / 1000

  return [...dataSource]
    .map((item, index) => {
      const lastLongPrices = dataSource
        .slice(index, index + longAvg)
        .map((item) => item.price)

      const lastMinPrices = lastLongPrices.slice(0, minAvg)

      const longAvgPrice =
        lastLongPrices.reduce((price, sum) => price + sum, 0) /
        lastLongPrices.length

      const minAvgPrice =
        lastMinPrices.reduce((price, sum) => price + sum, 0) /
        lastMinPrices.length

      const calcPrice = Math.min(longAvgPrice, minAvgPrice) * offsetDec
      // Const calcPrice = Math.min(avgPrice, smallAvgPrice) * offsetDec

      // const calcPrice = lastNPrices.slice(1).reduce((price, acc) => {
      //   return Math.min(acc, price)
      // }, lastNPrices[0])

      return {
        timestamp: item.timestamp,
        price: calcPrice,
      }
    })
    .filter(
      (_, index, array) =>
        index == array.length - 1 || (array.length - index) % interval === 0,
    )
}

type Props = {
  primaryCurrency: string
  secondaryCurrency: string
  query: GetMarketPriceQuery
}

const MarketPriceChartCalc = (props: Props) => {
  const { primaryCurrency, secondaryCurrency, query } = props
  const source = query.binance_us[0]?.market_prices ?? []

  const [longAvg, setLongAvg] = useState(30)
  const [minAvg, setMinAvg] = useState(3)
  const [offset, setOffset] = useState(0)
  const [interval, setInterval] = useState(4)

  const handleChangeLongAvg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setLongAvg(Number.parseInt(value))
  }

  const handleChangeMinAvg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setMinAvg(Number.parseInt(value))
  }

  const handleChangeOffset = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setOffset(Number.parseInt(value))
  }

  const handleChangeInterval = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setInterval(Number.parseInt(value))
  }

  const charts = useMemo((): ChartConfig[] => {
    return [
      {
        type: 'line',
        options: { color: 'black' },
        data: formatDataForChart({
          data: source,
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
          data: calcAvg(longAvg, minAvg, offset, interval, source),
          getValue: (row) => row.price,
          getTime: (row) => row.timestamp,
        }),
      },
    ]
  }, [longAvg, minAvg, offset, interval, query])

  const chartConfig = useMemo(
    () => ({
      timeScale: { fixLeftEdge: true, fixRightEdge: true },
    }),
    [],
  )

  return (
    <>
      <h2>
        {primaryCurrency}-{secondaryCurrency}
      </h2>

      <Chart width={960} config={chartConfig} charts={charts} />

      {/* <Button onClick={async () => refetch()}>Refetch</Button> */}

      <hr />

      <input
        type="range"
        min="1"
        max="120"
        value={longAvg}
        onChange={handleChangeLongAvg}
      />
      <p>Long Avg: {longAvg}</p>

      <input
        type="range"
        min="1"
        max="10"
        value={minAvg}
        onChange={handleChangeMinAvg}
      />
      <p>Min Avg: {minAvg}</p>

      <input
        type="range"
        min="-30"
        max="30"
        step="1"
        value={offset}
        onChange={handleChangeOffset}
      />
      <p>Offset: {offset / 10}%</p>

      <input
        type="range"
        min="1"
        max="60"
        step="1"
        value={interval}
        onChange={handleChangeInterval}
      />
      <p>Interval: {interval}</p>
    </>
  )
}

export { MarketPriceChartCalc }
