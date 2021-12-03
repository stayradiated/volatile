import { useState } from 'react'
import { DateTime } from 'luxon'
import { gql, useQuery } from '@apollo/client'
import { Table, TableColumnsType, Typography, Layout, Row, Col } from 'antd'

import { formatCurrency } from '../../utils/format'

import { SelectAsset } from '../select/asset'
import { SelectCurrency } from '../select/currency'

import {
  GetMarketPriceListQuery,
  GetMarketPriceListQueryVariables,
} from '../../utils/graphql'

const { Title } = Typography

type Market = GetMarketPriceListQuery['kc_market'][0]
type MarketPrice = Market['market_prices'][0]

type TableData = {
  market: Market
  marketPrice: MarketPrice
}

const QUERY_MARKET_LIST = gql`
  query getMarketPriceList(
    $timestamp: timestamptz!
    $filters: kc_market_price_bool_exp!
  ) {
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

const columns: TableColumnsType<TableData> = [
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
  const [primaryCurrency, setPrimaryCurrency] = useState<string | undefined>(
    undefined,
  )
  const [secondaryCurrency, setSecoundaryCurrency] = useState<
    string | undefined
  >(undefined)

  const handleChangePrimaryCurrency = (
    option: null | { symbol: string | undefined },
  ) => {
    setPrimaryCurrency(option?.symbol)
  }

  const handleChangeSecondaryCurrency = (
    option: null | { symbol: string | undefined },
  ) => {
    setSecoundaryCurrency(option?.symbol)
  }

  const timestamp = DateTime.local()
    .minus({ minutes: 1 })
    .set({ second: 0, millisecond: 0 })
    .toISO()

  const { data, loading, error } = useQuery<
    GetMarketPriceListQuery,
    GetMarketPriceListQueryVariables
  >(QUERY_MARKET_LIST, {
    variables: {
      timestamp,
      filters: {
        asset_symbol: {
          _eq: primaryCurrency,
        },
        currency: {
          _eq: secondaryCurrency,
        },
      },
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
    <Layout.Content>
      <Row>
        <Col span={6} offset={6}>
          <Title level={2}>Market Price List</Title>
        </Col>
        <Col span={3}>
          <SelectAsset
            onChange={handleChangePrimaryCurrency}
            defaultValue={
              primaryCurrency ? { symbol: primaryCurrency } : undefined
            }
          />
        </Col>
        <Col span={3}>
          <SelectCurrency
            onChange={handleChangeSecondaryCurrency}
            defaultValue={
              secondaryCurrency ? { symbol: secondaryCurrency } : undefined
            }
          />
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        pagination={false}
      />
    </Layout.Content>
  )
}

export { MarketList }
