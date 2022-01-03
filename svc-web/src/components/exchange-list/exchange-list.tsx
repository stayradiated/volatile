import { gql, useQuery } from '@apollo/client'

import { Spin, Alert, Card } from '../retro-ui'

import type {
  GetExchangeListQuery as Query,
  GetExchangeListQueryVariables as QueryVariables,
} from '../../utils/graphql'
import { ExchangeTable } from './exchange-table'

const QUERY = gql`
  query getExchangeList {
    kc_exchange(order_by: { name: asc }) {
      uid
      name
      url

      balance_latest(order_by: { currency_symbol: asc }) {
        available_balance
        total_balance
        total_balance_nzd: total_balance_fx(args: { currency: "NZD" })
        currency_symbol
      }

      user_exchange_keys_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`

const ExchangeList = () => {
  const { data, loading, error } = useQuery<Query, QueryVariables>(QUERY)

  if (loading) {
    return (
      <Card>
        <Spin />
      </Card>
    )
  }

  if (error) {
    return <Alert message={error.message} type="error" />
  }

  const exchanges = data?.kc_exchange ?? []

  return (
    <Card width={1000}>
      <h2>Exchanges</h2>
      {exchanges.map((exchange) => (
        <ExchangeTable exchange={exchange} />
      ))}
    </Card>
  )
}

export { ExchangeList }
