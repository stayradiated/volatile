import { useMemo } from 'react'

import { Chart, ChartConfig, formatDataForChart } from '../chart'
import type { GetTradeSumValueByWeekQuery } from '~/graphql/generated'

type Props = {
  query: GetTradeSumValueByWeekQuery
}

const TradeSumValueByWeek = (props: Props) => {
  const { query } = props

  const charts = useMemo((): ChartConfig[] => {
    const rows = query.trade_sum_by_window ?? []

    const sum: Record<string, number> = {}
    for (const row of rows) {
      sum[row.timestamp] = (sum[row.timestamp] ?? 0) + row.total_value
    }

    const sumRows = Object.entries(sum)

    return [
      {
        type: 'histogram',
        options: {
          color: 'rgba(76, 175, 80, 0.5)',
        },
        data: formatDataForChart({
          interval: 'week',
          data: sumRows,
          getValue: (row) => row[1],
          getTime: (row) => row[0],
        }),
      },
    ]
  }, [query])

  return (
    <>
      <Chart width={1160} charts={charts} />
    </>
  )
}

export { TradeSumValueByWeek }
