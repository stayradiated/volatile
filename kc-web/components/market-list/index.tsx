import { DateTime } from 'luxon'
import { gql, useQuery } from '@apollo/client'

import {
  GetMarketPriceListQuery,
  GetMarketPriceListQueryVariables,
} from '../../utils/graphql'

type Market = GetMarketPriceListQuery['kc_market'][0]
type MarketPrice = Market['market_prices'][0]

const QUERY_MARKET_LIST = gql`
  query getMarketPriceList($timestamp: timestamptz!) {
    kc_market {
      uid
      id
      name
      market_prices(
        distinct_on: [asset_symbol, currency]
        where: { timestamp: { _gte: $timestamp } }
      ) {
        timestamp
        price
        asset_symbol
        currency
      }
    }
  }
`

type MarketListItemProps = {
  market: Market
  marketPrice: MarketPrice
}

const MarketListItem = (props: MarketListItemProps) => {
  const { market, marketPrice } = props
  const { name } = market
  const { asset_symbol, price, currency } = marketPrice
  return (
    <tr>
      <td>{name}</td>
      <td>
        <code>{asset_symbol}</code>
      </td>
      <td>
        ${price.toLocaleString()} {currency}
      </td>
    </tr>
  )
}

const MarketList = () => {
  const { data, loading, error } = useQuery<
    GetMarketPriceListQuery,
    GetMarketPriceListQueryVariables
  >(QUERY_MARKET_LIST, {
    variables: {
      timestamp: DateTime.local()
        .minus({ minutes: 1 })
        .set({ second: 0, millisecond: 0 })
        .toISO(),
    },
  })

  if (loading || !data) {
    return <p>loading market list...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  const children = data.kc_market.map((market: Market) =>
    market.market_prices.map((marketPrice: MarketPrice) => (
      <MarketListItem
        key={`${market.uid}.${marketPrice.asset_symbol}`}
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
