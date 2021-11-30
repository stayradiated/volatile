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

type Trade = GetTradeListQuery['kc_trade'][0]

type Props = {
  data: Trade[]
}

const TradeChart = (props: Props) => {
  const { data } = props

  const chartData = [...data]
    .sort((a, b) => {
      return a.timestamp.localeCompare(b.timestamp)
    })
    .reduce<{index: number, value: number}[]>((acc, trade, index) => {
      acc.push({
        index: getTime(parseISO(trade.timestamp)),
        value: trade.value + (acc[index - 1]?.value ?? 0),
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
          tickFormatter={(unixTime) => {
            if (!Number.isFinite(unixTime)) {
              return ''
            }

            return format(new Date(unixTime), 'PP')
          }}
          type="number"
        />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip />
        <Legend />

        <Line dataKey="value" type="monotone" name="Values" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export { TradeChart }
