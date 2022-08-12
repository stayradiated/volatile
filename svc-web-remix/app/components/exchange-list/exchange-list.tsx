import { Card } from '../retro-ui'

import { ExchangeTable } from './exchange-table'
import { GetExchangeListQuery } from '~/graphql/generated'

type Props = {
  query: GetExchangeListQuery
}

const ExchangeList = (props: Props) => {
  const { query } = props

  const userExchangeKeys = query.user_exchange_keys ?? []

  return (
    <>
      {userExchangeKeys.map((userExchangeKey) => (
        <div key={userExchangeKey.uid}>
          <h2>{userExchangeKey.exchange.name} </h2>
          <ExchangeTable userExchangeKey={userExchangeKey} />
        </div>
      ))}
    </>
  )
}

export { ExchangeList }
