import { gql, useQuery } from '@apollo/client'
import { Table, Tag, Typography, Button } from 'antd'

import type {
  GetExchangeListQuery,
  GetExchangeListQueryVariables,
} from '../../utils/graphql'

const { Column } = Table
const { Text, Link } = Typography

type PrimaryCurrency =
  GetExchangeListQuery['kc_exchange'][0]['primary_currencies'][0]
type SecondaryCurrency =
  GetExchangeListQuery['kc_exchange'][0]['secondary_currencies'][0]

const QUERY_EXCHANGE_LIST = gql`
  query getExchangeList {
    kc_exchange {
      created_at
      updated_at
      uid
      id
      name
      url
      primary_currencies {
        symbol
      }
      secondary_currencies {
        symbol
      }
    }
  }
`

const ExchangeList = () => {
  const { data, loading, error } = useQuery<
    GetExchangeListQuery,
    GetExchangeListQueryVariables
  >(QUERY_EXCHANGE_LIST)

  console.log(data, loading, error)

  if (loading) {
    return <>Loading...</>
  }

  if (error) {
    throw error
  }

  return (
    <>
      <Table dataSource={data?.kc_exchange ?? []} pagination={false}>
        <Column
          title="UID"
          dataIndex="uid"
          render={(uid) => <Text code>{uid}</Text>}
        />
        <Column
          title="ID"
          dataIndex="id"
          render={(id) => <Text code>{id}</Text>}
        />
        <Column title="Name" dataIndex="name" />
        <Column
          title="URL"
          dataIndex="url"
          render={(href) => <Link href={href}>{href}</Link>}
        />
        <Column
          title="Primary Currency"
          dataIndex="primary_currencies"
          render={(rows: PrimaryCurrency[]) => (
            <>
              {rows.map((row) => (
                <Tag color="blue" key={row.symbol}>
                  {row.symbol}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Secondary Currency"
          dataIndex="secondary_currencies"
          render={(rows: SecondaryCurrency[]) => (
            <>
              {rows.map((row) => (
                <Tag color="blue" key={row.symbol}>
                  {row.symbol}
                </Tag>
              ))}
            </>
          )}
        />
        <Column title="Actions" render={() => <Button>Edit</Button>} />
      </Table>
    </>
  )
}

export { ExchangeList }
