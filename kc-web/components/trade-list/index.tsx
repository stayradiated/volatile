import { Table, TableColumnsType, Pagination } from 'antd'
import { gql, useQuery } from '@apollo/client'
import { DateTime } from 'luxon'

import {
  GetTradeListQuery,
  GetTradeListQueryVariables,
} from '../../utils/graphql'

type Trade = GetTradeListQuery['kc_trade'][0]

const QUERY = gql`
  query getTradeList($symbol: String!) {
    kc_trade_aggregate {
      aggregate {
        count
      }
    }
    kc_trade(
      where: { symbol: { _eq: $symbol } }
      order_by: { timestamp: desc }
    ) {
      uid
      exchange {
        uid
        id
      }
      timestamp
      amount
      symbol
      type
      price_nzd
      total_nzd
      fee_nzd
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
    title: 'Symbol',
    dataIndex: 'symbol',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
  },
  {
    title: 'Type',
    dataIndex: 'type',
  },
  {
    title: 'Price NZD',
    dataIndex: 'price_nzd',
    render: (priceNZD) => '$' + priceNZD.toLocaleString(),
  },
  {
    title: 'Total NZD',
    dataIndex: 'total_nzd',
    render: (totalNZD) => '$' + totalNZD.toLocaleString(),
  },
  {
    title: 'Fee NZD',
    dataIndex: 'fee_nzd',
    render: (feeNZD) => '$' + feeNZD.toFixed(2),
  },
]

type TradeListProps = {
  symbol: string
}

const TradeList = (props: TradeListProps) => {
  const { symbol } = props

  const { data, error, loading } = useQuery<
    GetTradeListQuery,
    GetTradeListQueryVariables
  >(QUERY, { variables: { symbol } })

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
