import { gql, useQuery } from '@apollo/client'

const QUERY_EXCHANGE_LIST = gql`
query exchange_list {
  kc_exchange {
    id
    name
  }
}
`

type Exchange = {
  id: string,
  name: string,
}

type ExchangeListItemProps = {
  exchange: Exchange
}

const ExchangeListItem = (props: ExchangeListItemProps) => {
  const { exchange } = props
  const { name, id } = exchange
  return (
    <li>{name} <code>{id}</code></li>
  )
}

const ExchangeList = () => {
  const { data, loading, error } = useQuery(QUERY_EXCHANGE_LIST);

  if (loading) {
    return <p>loading exchange list...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  const children = data.kc_exchange.map((exchange: Exchange) => (
    <ExchangeListItem key={exchange.id} exchange={exchange} />
  ))

  return (
    <div>
      <h4>Exchange List</h4>
      <ul>
        {children}
      </ul>
    </div>
  )
}

export { ExchangeList }
