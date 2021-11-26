import { Table, TableColumnsType, Pagination } from 'antd'
import { gql, useQuery } from '@apollo/client'
import { DateTime } from 'luxon'

import {
  GetTradeListQuery,
  GetTradeListQueryVariables,
} from '../../utils/graphql'

type Trade = GetTradeListQuery['kc_trade'][0]

const QUERY = gql`
  query getTradeList($filters: kc_trade_bool_exp!) {
    kc_trade_aggregate {
      aggregate {
        count
      }
    }
    kc_trade(
      where: $filters,
      order_by: { timestamp: desc }
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
    render: (price) => '$' + Math.round(price).toLocaleString(),
  },
  {
    title: 'Currency',
    dataIndex: 'secondary_currency',
  },
  {
    title: 'Total Value',
    dataIndex: 'total_value',
    render: (total) => '$' + total.toFixed(2),
  },
  {
    title: 'Fee',
    dataIndex: 'fee',
    render: (fee) => '$' + fee.toFixed(2),
  },
]

type TradeListProps = {
  primaryCurrency?: string
  secondaryCurrency?: string
}

const TradeList = (props: TradeListProps) => {
  const { primaryCurrency, secondaryCurrency } = props

  const { data, error, loading } = useQuery<
    GetTradeListQuery,
    GetTradeListQueryVariables
  >(QUERY, {
    variables: {
      filters: {
        primary_currency: {
          _eq: primaryCurrency,
        },
        secondary_currency: {
          _eq: secondaryCurrency
        }
      }
    }
  })

  if (error) {
    return <p>{error.message}</p>
  }

  const total = data?.kc_trade_aggregate?.aggregate?.count ?? 0

  return (
    <>
      <Table
        columns={columns}
        dataSource={data?.kc_trade ?? []}
        loading={loading}
        pagination={{
          total: total / 50,
          pageSize: 50,
          showSizeChanger: false,
        }}
      />
    </>
  )
}

export { TradeList }
