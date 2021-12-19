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

import { Spin, Alert } from '../retro-ui'

import type {
  GetTradeSumValueByWeekQuery as Query,
  GetTradeSumValueByWeekQueryVariables as QueryVariables,
} from '../../utils/graphql'

const formatUnixTime =
  (formatString: string) =>
  (unixTime: number): string => {
    if (!Number.isFinite(unixTime)) {
      return ''
    }

    return format(new Date(unixTime), formatString)
  }

const formatUnixTimeAsDate = formatUnixTime('PP')
const formatUnixTimeAsDateTime = formatUnixTime('PPpp')

const QUERY = gql`
  query getTradeSumValueByWeek(
    $filters: kc_trade_sum_total_value_by_week_bool_exp
  ) {
    kc_trade_sum_total_value_by_week(where: $filters) {
      week
      sum
      primary_currency
      secondary_currency
    }
  }
`

type Props = {
  primaryCurrency?: string
  secondaryCurrency?: string
}

const ChartWeek = (props: Props) => {
  const { primaryCurrency, secondaryCurrency } = props

  const { data, error, loading } = useQuery<Query, QueryVariables>(QUERY, {
    variables: {
      filters: {
        primary_currency: {
          _eq: primaryCurrency,
        },
        secondary_currency: {
          _eq: secondaryCurrency,
        },
      },
    },
  })

  if (loading) {
    return <Spin />
  }

  if (error) {
    return <Alert message={error.message} type="error" />
  }

  const chartData = [
    ...[...data!.kc_trade_sum_total_value_by_week]
      .map((row) => {
        const key = `${row.primary_currency}-${row.secondary_currency}`
        return {
          index: getTime(parseISO(row.week!)),
          key,
          value: row.sum,
        }
      })
      .reduce<Map<number, Record<string, number>>>((acc, row) => {
        const { index, key, value } = row
        if (!acc.has(index)) {
          acc.set(index, { index, sum: 0 })
        }

        acc.get(index)![key] = value!
        acc.get(index)!.sum += value!
        return acc
      }, new Map())
      .values(),
  ].sort((a, b) => a.index - b.index)

  return (
    <ResponsiveContainer height={250}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="index"
          name="Time"
          domain={['auto', 'auto']}
          tickFormatter={formatUnixTimeAsDate}
        />
        <YAxis scale="sqrt" />
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
