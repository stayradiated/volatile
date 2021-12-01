import { gql, useQuery } from '@apollo/client'
import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Bar,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { parseISO, getTime, format } from 'date-fns'

import { formatCurrency } from '../../utils/format'

const formatUnixTime = (formatString: string) => (unixTime: number): string => {
  if (!Number.isFinite(unixTime)) {
    return ''
  }
  return format(new Date(unixTime), formatString)
}
const formatUnixTimeAsDate = formatUnixTime('PP')
const formatUnixTimeAsDateTime = formatUnixTime('PPpp')

const QUERY = gql`
  query getTradeSumValueByWeek {
    kc_trade_sum_value_by_week {
      week
      sum
      primary_currency
      secondary_currency
    }
  }
`

const ChartWeek = () => {
  const { data, error, loading } = useQuery(QUERY)

  if (loading) {
    return <>'Loading...'</>
  }
  if (error) {
    throw error
  }

  const chartData = [...[...data.kc_trade_sum_value_by_week]
    .map((row) => {
      const key = `${row.primary_currency}-${row.secondary_currency}`
      return {
        index: getTime(parseISO(row.week)),
        key,
        value: row.sum
      }
    })
    .reduce<Map<number,Record<string, number>>>((acc, row) => {
      const { index, key, value } = row
      if (acc.has(index) === false) {
        acc.set(index, { index, sum :0 })
      }
      acc.get(index)![key] = value
      acc.get(index)!.sum += value
      return acc
    }, new Map())
    .values()]
    .sort((a, b) => a.index - b.index)

    console.log(chartData)

  return (
    <ResponsiveContainer height={250}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="index"
          name="Time"
          domain={['auto', 'auto']}
          tickFormatter={formatUnixTimeAsDate}
        />
        <YAxis />
        <Tooltip
          formatter={(value: number) => '$' + formatCurrency(value)}
          labelFormatter={formatUnixTimeAsDateTime}
        />
        <Legend />
        <Bar dataKey="sum" fill="#8884d8" />
        {/* <Bar dataKey="BTC-NZD" fill="#8884d8" /> */}
        {/* <Bar dataKey="BTC-AUD" fill="#8884d8" /> */}
        {/* <Bar dataKey="ETH-NZD" fill="#82ca9d" /> */}
        {/* <Bar dataKey="ETH-AUD" fill="#82ca9d" /> */}
      </BarChart>
    </ResponsiveContainer>
  )
}

export { ChartWeek }
