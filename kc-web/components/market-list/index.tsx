import { gql, useQuery } from '@apollo/client'

const QUERY_MARKET_LIST = gql`
query market_list {
  kc_market{
    uid
    id
    name
    market_prices(limit: 1, order_by: { timestamp:desc }) {
      timestamp
      price_nzd
    }
  }
}
`

type Market = {
  id: string,
  name: string,
  market_prices: [{
    timestamp: string,
    price_nzd: number,
  }]
}

type MarketListItemProps = {
  market: Market
}

const MarketListItem = (props: MarketListItemProps) => {
  const { market } = props
  const { name, id, market_prices } = market
  const { price_nzd  } = market_prices[0]
  return (
    <tr>
      <td>{name}</td>
      <td><code>{id}</code></td>
      <td>${price_nzd.toLocaleString()} NZD</td>
    </tr>
  )
}

const MarketList = () => {
  const { data, loading, error } = useQuery(QUERY_MARKET_LIST);

  if (loading) {
    return <p>loading market list...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  const children = data.kc_market.map((market: Market) => (
    <MarketListItem key={market.id} market={market} />
  ))

  return (
    <div>
      <h4>Market Price List</h4>
      <table>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  )
}

export { MarketList }
