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
  query getTradeSumValueByWeek($filters: kc_type_trade_sum_by_window_bool_exp) {
    kc_trade_sum_by_window(
      args: { group_by: "week", currency: "NZD" }
      where: $filters
    ) {
      timestamp
      primary_currency
      total_value
    }
  }
`

type Props = {
  primaryCurrency?: string
}

const ChartWeek = (props: Props) => {
  const { primaryCurrency } = props

  const { data, error, loading } = useQuery<Query, QueryVariables>(QUERY, {
    variables: {
      filters: {
        primary_currency: {
          _eq: primaryCurrency,
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
    ...[...data!.kc_trade_sum_by_window]
      .map((row) => {
        const key = `${row.primary_currency}-NZD`
        return {
          index: getTime(parseISO(row.timestamp!)),
          key,
          value: row.total_value,
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
          formatter={(value: number) => formatCurrency(value)}
          labelFormatter={formatUnixTimeAsDateTime}
        />
        <Legend />
        <Bar dataKey="sum" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export { ChartWeek }
