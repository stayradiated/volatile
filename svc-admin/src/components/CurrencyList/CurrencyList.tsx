import { gql, useQuery } from '@apollo/client'
import { Table, Typography, Button } from 'antd'

import type {
  GetCurrencyListQuery,
  GetCurrencyListQueryVariables,
} from '../../utils/graphql'

import { CurrencyFormCreate } from './CurrencyFormCreate'

const { Column } = Table
const { Text } = Typography

const QUERY = gql`
  query getCurrencyList {
    kc_currency {
      created_at
      updated_at
      symbol
      name
    }
  }
`

const CurrencyList = () => {
  const { data, loading, error } = useQuery<
    GetCurrencyListQuery,
    GetCurrencyListQueryVariables
  >(QUERY)

  console.log(data, loading, error)

  if (loading) {
    return <>Loading...</>
  }

  if (error) {
    throw error
  }

  return (
    <>
      <Table
        rowKey="symbol"
        dataSource={data?.kc_currency ?? []}
        pagination={false}
      >
        <Column
          title="Symbol"
          dataIndex="symbol"
          render={(uid) => <Text code>{uid}</Text>}
        />
        <Column title="Name" dataIndex="name" />
        <Column title="Actions" render={() => <Button>Edit</Button>} />
      </Table>

      <CurrencyFormCreate />
    </>
  )
}

export { CurrencyList }
