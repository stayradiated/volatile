import { gql, useQuery } from '@apollo/client'
import { Table, TableColumnsType, Typography } from 'antd'

import type { GetExchangeListQuery, GetExchangeListQueryVariables  } from '../../utils/graphql'

type Exchange = GetExchangeListQuery['kc_exchange'][0]

const QUERY_EXCHANGE_LIST = gql`
  query getExchangeList {
    kc_exchange {
      uid
      id
      name
    }
  }
`

const columns: TableColumnsType<Exchange> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'UID',
    dataIndex: 'uid',
  },
]

const ExchangeList = () => {
  const { data, loading, error } = useQuery(QUERY_EXCHANGE_LIST)

  if (loading) {
    return <p>loading exchange list...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <div>
      <h4>Exchange List</h4>
      <Table
        columns={columns}
        dataSource={data.kc_exchange}
        loading={loading}
      />
    </div>
  )
}

export { ExchangeList }
