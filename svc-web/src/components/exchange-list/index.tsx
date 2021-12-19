import { gql, useQuery } from '@apollo/client'
import { Table, TableColumnsType, Typography, Button } from 'antd'

import type {
  GetExchangeListQuery,
  GetExchangeListQueryVariables,
} from '../../utils/graphql'

type Exchange = GetExchangeListQuery['kc_exchange'][0]
type PrimaryCurrency = Exchange['primary_currencies'][0]
type SecondaryCurrency = Exchange['secondary_currencies'][0]

const QUERY_EXCHANGE_LIST = gql`
  query getExchangeList {
    kc_exchange {
      uid
      name
      url
      primary_currencies(order_by: { symbol: asc }) {
        symbol
      }
      secondary_currencies(order_by: { symbol: asc }) {
        symbol
      }
    }
  }
`

const columns: TableColumnsType<Exchange> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (name: string, row: Exchange) => (
      <Button type="link" href={row.url} target="_blank">
        {name}
      </Button>
    ),
  },
  {
    title: 'Primary Currencies',
    dataIndex: 'primary_currencies',
    render: (list: PrimaryCurrency[]) =>
      list.map((item) => item.symbol).join(', '),
  },
  {
    title: 'Secondary Currencies',
    dataIndex: 'secondary_currencies',
    render: (list: SecondaryCurrency[]) =>
      list.map((item) => item.symbol).join(', '),
  },
]

const ExchangeList = () => {
  const { data, loading, error } = useQuery<
    GetExchangeListQuery,
    GetExchangeListQueryVariables
  >(QUERY_EXCHANGE_LIST)

  if (loading) {
    return <p>loading exchange list...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <div>
      <Typography.Title level={2}>Exchange List</Typography.Title>
      <Table
        rowKey="uid"
        columns={columns}
        dataSource={data?.kc_exchange ?? []}
        loading={loading}
        pagination={false}
      />
    </div>
  )
}

export { ExchangeList }
