import { Table, TableColumnsType, TablePaginationConfig } from 'antd'
import { gql, useQuery } from '@apollo/client'
import { DateTime } from 'luxon'
import { parseISO, formatISO } from 'date-fns'

import {
  GetTradeListQuery,
  GetTradeListQueryVariables,
} from '../../utils/graphql'

import { formatCurrency } from '../../utils/format'
import { TradeChart } from './chart'
import { TradeStats } from './stats'
import { ChartWeek } from './chart-week'

type Trade = GetTradeListQuery['kc_trade'][0]

const QUERY = gql`
  query getTradeList(
    $filters: kc_trade_bool_exp!
    $offset: Int!
    $limit: Int!
  ) {
    kc_trade_aggregate(where: $filters) {
      aggregate {
        count
        sum {
          value
          volume
          fee
        }
        min {
          timestamp
        }
        max {
          timestamp
        }
      }
    }
    kc_trade(
      where: $filters
      order_by: { timestamp: desc }
      limit: $limit
      offset: $offset
    ) {
      uid
      exchange {
        uid
        id
      }
      timestamp
      value
      volume
      primary_currency
      secondary_currency
      type
      price
      total_value
      fee
    }
  }
`

const columns: TableColumnsType<Trade> = [
  {
    title: 'Timestamp',
    dataIndex: 'timestamp',
    render: (timestamp) => DateTime.fromISO(timestamp).toFormat('ff'),
  },
  {
    title: 'Exchange',
    dataIndex: ['exchange', 'id'],
  },
  {
    title: 'Volume',
    dataIndex: 'volume',
    render: (volume) => volume.toFixed(8),
    align: 'right',
  },
  {
    title: 'Asset',
    dataIndex: 'primary_currency',
  },
  {
    title: 'Type',
    dataIndex: 'type',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    render: (price) => '$' + formatCurrency(price),
    align: 'right',
  },
  {
    title: 'Currency',
    dataIndex: 'secondary_currency',
  },
  {
    title: 'Total Value',
    dataIndex: 'total_value',
    render: (total) => '$' + formatCurrency(total),
    align: 'right',
  },
  {
    title: 'Fee',
    dataIndex: 'fee',
    render: (fee) => '$' + formatCurrency(fee),
  },
]

type TradeListProps = {
  startDate?: string
  endDate?: string
  primaryCurrency?: string
  secondaryCurrency?: string
}

const TradeList = (props: TradeListProps) => {
  const { startDate, endDate, primaryCurrency, secondaryCurrency } = props

  const { data, error, loading, fetchMore } = useQuery<
    GetTradeListQuery,
    GetTradeListQueryVariables
  >(QUERY, {
    variables: {
      offset: 0,
      limit: 100,
      filters: {
        timestamp: { _gte: startDate, _lte: endDate },
        primary_currency: {
          _eq: primaryCurrency,
        },
        secondary_currency: {
          _eq: secondaryCurrency,
        },
      },
    },
  })

  const handleChange = (event: TablePaginationConfig) => {
    const { current = 1, pageSize = 100 } = event
    const offset = (current - 1) * pageSize
    fetchMore({ variables: { offset } }).then(console.log)
  }

  if (error) {
    return <p>{error.message}</p>
  }

  const total = data?.kc_trade_aggregate?.aggregate?.count ?? 0
  const agg = data?.kc_trade_aggregate?.aggregate

  return (
    <>
      <ChartWeek />
      <TradeStats
        sumValue={agg?.sum?.value ?? 0}
        sumVolume={agg?.sum?.volume ?? 0}
        sumFee={agg?.sum?.fee ?? 0}
        minTimestamp={parseISO(agg?.min?.timestamp ?? formatISO(new Date()))}
        maxTimestamp={parseISO(agg?.max?.timestamp ?? formatISO(new Date()))}
      />
      <TradeChart data={data?.kc_trade ?? []} />
      <Table
        rowKey='uid'
        columns={columns}
        dataSource={data?.kc_trade ?? []}
        loading={loading}
        pagination={{
          total,
          pageSize: 50,
          showSizeChanger: false,
        }}
        onChange={handleChange}
      />
    </>
  )
}

export { TradeList }
