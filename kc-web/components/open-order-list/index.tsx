import { Table, TableColumnsType } from 'antd'
import { gql, useQuery } from '@apollo/client'
import { DateTime } from 'luxon'

import {
  GetOpenOrderListQuery,
  GetOpenOrderListQueryVariables,
} from '../../utils/graphql'

type Order = GetOpenOrderListQuery['kc_order'][0]

const QUERY = gql`
  query getOpenOrderList {
    kc_order(where: { closed_at: { _is_null: true } }) {
      exchange {
        uid
        id
      }
      opened_at
      amount
      price_nzd
      symbol
      type
    }
  }
`

const columns: TableColumnsType<Order> = [
  {
    title: 'Exchange',
    dataIndex: ['exchange', 'id'],
  },
  {
    title: 'Opened At',
    dataIndex: 'opened_at',
    render: (timestamp) => DateTime.fromISO(timestamp).toFormat('ff'),
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
]

const OpenOrderList = () => {
  const { data, error, loading } = useQuery<
    GetOpenOrderListQuery,
    GetOpenOrderListQueryVariables
  >(QUERY)

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <>
      <Table
        columns={columns}
        dataSource={data?.kc_order ?? []}
        loading={loading}
      />
    </>
  )
}

export { OpenOrderList }
