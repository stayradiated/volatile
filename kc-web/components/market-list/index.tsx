import { DateTime } from 'luxon'
import { gql, useQuery } from '@apollo/client'

const QUERY_MARKET_LIST = gql`
  query market_list($timestamp: timestamptz!) {
    kc_market {
      uid
      id
      name
      market_prices(
        distinct_on: symbol
        where: { timestamp: { _gte: $timestamp } }
      ) {
        timestamp
        price_nzd
        symbol
      }
    }
  }
`

type MarketPrice = {
  timestamp: string
  price_nzd: number
  symbol: string
}
type Market = {
  uid: string
  id: string
  name: string
  market_prices: MarketPrice[]
}

type MarketListItemProps = {
  market: Market
  marketPrice: MarketPrice
}

const MarketListItem = (props: MarketListItemProps) => {
  const { market, marketPrice } = props
  const { name, id } = market
  const { symbol, price_nzd } = marketPrice
  return (
    <tr>
      <td>{name}</td>
      <td>
        <code>{id}</code>
      </td>
      <td>
        <code>{symbol}</code>
      </td>
      <td>${price_nzd.toLocaleString()} NZD</td>
    </tr>
  )
}

const MarketList = () => {
  const { data, loading, error } = useQuery(QUERY_MARKET_LIST, {
    variables: {
      timestamp: DateTime.local()
        .minus({ minutes: 1 })
        .set({ second: 0, millisecond: 0 })
        .toISO(),
    },
  })

  if (loading) {
    return <p>loading market list...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  const children = data.kc_market.map((market: Market) =>
    market.market_prices.map((marketPrice: MarketPrice) => (
      <MarketListItem
        key={`${market.uid}.${marketPrice.symbol}`}
        market={market}
        marketPrice={marketPrice}
      />
    )),
  )

  return (
    <div>
      <h4>Market Price List</h4>
      <table>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

export { MarketList }
