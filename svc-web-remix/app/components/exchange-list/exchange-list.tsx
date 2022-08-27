import { ExchangeTable } from './exchange-table'
import type { GetExchangeListQuery } from '~/graphql/generated'

type Props = {
  query: GetExchangeListQuery
}

const ExchangeList = (props: Props) => {
  const { query } = props

  const userExchangeKeys = query.userExchangeKeys ?? []

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
