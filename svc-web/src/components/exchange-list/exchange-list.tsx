import { gql, useQuery } from '@apollo/client'
import { subHours, formatISO } from 'date-fns'

import { Spin, Alert, Card } from '../retro-ui'

import type {
  GetExchangeListQuery as Query,
  GetExchangeListQueryVariables as QueryVariables,
} from '../../utils/graphql'
import { ExchangeTable } from './exchange-table'

const QUERY = gql`
  query getExchangeList(
    $currentTimestamp: timestamptz
    $historicTimestamp: timestamptz
  ) {
    kc_user_exchange_keys(order_by: { created_at: asc }) {
      uid

      exchange {
        uid
        name
        url
      }

      balance_latest: balance(
        args: { timestamp_at: $currentTimestamp }
        order_by: { currency_symbol: asc }
      ) {
        available_balance
        total_balance
        total_balance_nzd: total_balance_fx(args: { currency: "NZD" })
        currency_symbol
      }

      balance_historic: balance(
        args: { timestamp_at: $historicTimestamp }
        order_by: { currency_symbol: asc }
      ) {
        total_balance_nzd: total_balance_fx(args: { currency: "NZD" })
        currency_symbol
      }
    }
  }
`

const ExchangeList = () => {
  const currentTimestamp = new Date()
  const historicTimestamp = subHours(currentTimestamp, 24)

  const { data, loading, error } = useQuery<Query, QueryVariables>(QUERY, {
    variables: {
      currentTimestamp: formatISO(currentTimestamp),
      historicTimestamp: formatISO(historicTimestamp),
    },
  })

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

  const userExchangeKeys = data?.kc_user_exchange_keys ?? []

  return (
    <Card width={1000}>
      <h2>Exchanges</h2>
      {userExchangeKeys.map((userExchangeKey) => (
        <ExchangeTable userExchangeKey={userExchangeKey} />
      ))}
    </Card>
  )
}

export { ExchangeList }
