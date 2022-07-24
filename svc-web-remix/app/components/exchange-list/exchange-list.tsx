import { Card } from '../retro-ui'

import { ExchangeTable } from './exchange-table'
import { GetExchangeListQuery } from '~/graphql/generated'

type Props = {
  query: GetExchangeListQuery
}

const ExchangeList = (props: Props) => {
  const { query } = props

  const userExchangeKeys = query.kc_user_exchange_keys ?? []

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
