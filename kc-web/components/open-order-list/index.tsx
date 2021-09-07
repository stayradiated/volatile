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
      value
      price
      primary_currency
      secondary_currency
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
    title: 'PriCur',
    dataIndex: 'primary_currency',
  },
  {
    title: 'SecCur',
    dataIndex: 'secondary_currency',
  },
  {
    title: 'Value',
    dataIndex: 'value',
  },
  {
    title: 'Type',
    dataIndex: 'type',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    render: (price) => '$' + price.toLocaleString(),
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
