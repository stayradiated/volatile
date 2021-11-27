import { Table, TableColumnsType, Pagination } from 'antd'
import { gql, useQuery } from '@apollo/client'
import { DateTime } from 'luxon'

import {
  GetTradeListQuery,
  GetTradeListQueryVariables,
} from '../../utils/graphql'

import { formatCurrency } from '../../utils/format'
import TradeChart from './chart'

type Trade = GetTradeListQuery['kc_trade'][0]

const QUERY = gql`
  query getTradeList($filters: kc_trade_bool_exp!, $offset: Int!) {
    kc_trade_aggregate(where: $filters) {
      aggregate {
        count
      }
    }
    kc_trade(
      where: $filters
      order_by: { timestamp: desc }
      limit: 100
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
  primaryCurrency?: string
  secondaryCurrency?: string
}

const TradeList = (props: TradeListProps) => {
  const { primaryCurrency, secondaryCurrency } = props

  const { data, error, loading, fetchMore } = useQuery<
    GetTradeListQuery,
    GetTradeListQueryVariables
  >(QUERY, {
    variables: {
      offset: 0,
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

  const handleChange = (event) => {
    const offset = (event.current - 1) * event.pageSize
    console.log(offset)
    fetchMore({ variables: { offset } }).then(console.log)
  }

  if (error) {
    return <p>{error.message}</p>
  }

  const total = data?.kc_trade_aggregate?.aggregate?.count ?? 0

  return (
    <>
      <TradeChart data={data?.kc_trade ?? []} />
      <Table
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
