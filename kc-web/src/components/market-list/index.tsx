import { DateTime } from 'luxon'
import { gql, useQuery } from '@apollo/client'
import { Table, TableColumnsType, Typography } from 'antd'

import { formatCurrency } from '../../utils/format'

import {
  GetMarketPriceListQuery,
  GetMarketPriceListQueryVariables,
} from '../../utils/graphql'

const { Title } = Typography

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

const columns: TableColumnsType<MarketPrice> = [
  {
    title: 'Name',
    dataIndex: ['market', 'name'],
  },
  {
    title: 'Timestamp',
    dataIndex: ['marketPrice', 'timestamp'],
    render: (timestamp) => DateTime.fromISO(timestamp).toFormat('ff'),
  },
  {
    title: 'Price',
    dataIndex: ['marketPrice', 'price'],
    render: (price) => '$' + formatCurrency(price),
  },
  {
    title: 'Currency',
    dataIndex: ['marketPrice', 'currency'],
  },
  {
    title: 'Asset',
    dataIndex: ['marketPrice', 'asset_symbol'],
  },
]

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

  const dataSource = data.kc_market.flatMap((market: Market) =>
    market.market_prices.map((marketPrice: MarketPrice) => ({
      market,
      marketPrice,
    })),
  )

  return (
    <div>
      <Title level={2}>Market Price List</Title>
      <Table columns={columns} dataSource={dataSource} loading={loading} />
    </div>
  )
}

export { MarketList }
