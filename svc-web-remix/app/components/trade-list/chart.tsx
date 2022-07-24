import { parseISO, getTime, format } from 'date-fns'

import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { GetTradeListQuery } from '../../utils/graphql'
import { formatCurrency } from '../../utils/format'

type Trade = GetTradeListQuery['kc_trade'][0]

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

type Props = {
  data: Trade[]
}

const TradeChart = (props: Props) => {
  const { data } = props

  const chartData = [...data]
    .sort((a, b) => {
      return a.timestamp.localeCompare(b.timestamp)
    })
    .reduce<Array<{ index: number; value: number }>>((acc, trade, index) => {
      acc.push({
        index: getTime(parseISO(trade.timestamp)),
        value: trade.total_value! + (acc[index - 1]?.value ?? 0),
        // Value: trade.price,
      })
      return acc
    }, [])

  return (
    <ResponsiveContainer height={500}>
      <LineChart data={chartData}>
        <CartesianGrid />

        <XAxis
          dataKey="index"
          name="Time"
          domain={['auto', 'auto']}
          tickFormatter={formatUnixTimeAsDate}
          type="number"
        />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip
          formatter={(value: number) => formatCurrency(value)}
          labelFormatter={formatUnixTimeAsDateTime}
        />
        <Legend />

        <Line dataKey="value" type="monotone" name="Values" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export { TradeChart }
