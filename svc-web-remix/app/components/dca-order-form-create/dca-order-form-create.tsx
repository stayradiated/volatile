import { Link } from '@remix-run/react'
import Select from 'react-select'

import { Form, PrimaryButton, Input, DateInput } from '../retro-ui'

import { GetDcaOrderFormCreateQuery } from '~/graphql/generated'

type Exchange = GetDcaOrderFormCreateQuery['exchange'][number]
type UserExchangeKeys = GetDcaOrderFormCreateQuery['userExchangeKeys'][number]
type Market = GetDcaOrderFormCreateQuery['market'][number]
type PrimaryCurrency =
  GetDcaOrderFormCreateQuery['exchange'][number]['primaryCurrencies'][number]
type SecondaryCurrency =
  GetDcaOrderFormCreateQuery['exchange'][number]['secondaryCurrencies'][number]

type Props = {
  query: GetDcaOrderFormCreateQuery
}

const DcaOrderFormCreate = (props: Props) => {
  const { query } = props

  const state = {
    primaryCurrency: { symbol: 'BTC' },
    secondaryCurrency: { symbol: 'NZD' },
    exchange: {
      uid: undefined,
      primaryCurrencies: [],
      secondaryCurrencies: [],
    },
  }

  const exchangeOptions = query.exchange ?? []

  const marketOptions = (query.market ?? []).filter((item) =>
    item.marketPrices.some(
      (price) =>
        price.assetSymbol === state.primaryCurrency?.symbol &&
        price.currency === state.secondaryCurrency?.symbol,
    ),
  )

  const userExchangeKeysOptions = (query.userExchangeKeys ?? []).filter(
    (_item) => true, // Item.exchangeUid === state.exchange?.uid
  )

  const primaryCurrencyOptions = query.exchange[0]?.primaryCurrencies
  const secondaryCurrencyOptions = query.exchange[0]?.secondaryCurrencies

  return (
    <div>
      <h2>+ Add Dca Order</h2>
      <Form name="dcaOrderFormCreate" method="post" action="/dca-orders/create">
        <Form.Item label="Exchange">
          <Select<Exchange>
            options={exchangeOptions}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.uid}
          />
        </Form.Item>
        <Form.Item name="userExchangeKeysUid" label="Exchange Keys">
          <Select<UserExchangeKeys>
            options={userExchangeKeysOptions}
            getOptionLabel={(option) => option.description}
            getOptionValue={(option) => option.uid}
          />
        </Form.Item>
        <Form.Item name="primaryCurrency" label="Asset">
          <Select<PrimaryCurrency>
            options={primaryCurrencyOptions}
            getOptionLabel={(option) => option.symbol}
            getOptionValue={(option) => option.symbol}
          />
        </Form.Item>
        <Form.Item name="secondaryCurrency" label="Currency">
          <Select<SecondaryCurrency>
            options={secondaryCurrencyOptions}
            getOptionLabel={(option) => option.symbol}
            getOptionValue={(option) => option.symbol}
          />
        </Form.Item>
        <Form.Item
          name="marketUid"
          label={`Market Source (${state.primaryCurrency?.symbol ?? '___'}-${
            state.secondaryCurrency?.symbol ?? '____'
          })`}
        >
          <Select<Market>
            options={marketOptions}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.uid}
          />
        </Form.Item>
        <Form.Item label="Start At" name="startAt">
          <DateInput />
        </Form.Item>
        <Form.Item name="marketOffset" label="Market Offset">
          <Input required type="number" step="0.01" />
        </Form.Item>
        <Form.Item name="dailyAverage" label="Daily Average">
          <Input required type="number" step="0.01" />
        </Form.Item>
        <Form.Item name="intervalMs" label="Interval (minutes)">
          <Input required type="number" step="1" min="1" />
        </Form.Item>
        <Form.Item name="minValue" label="Min Value">
          <Input type="number" placeholder="0.00" step="0.01" min="0" />
        </Form.Item>
        <Form.Item name="maxValue" label="Max Value">
          <Input type="number" placeholder="∞" step="0.01" min="0" />
        </Form.Item>
        <Form.Item>
          <Link to="/dca-orders">Cancel</Link>
          <PrimaryButton type="submit">Create Dca Order</PrimaryButton>
        </Form.Item>
      </Form>
    </div>
  )
}

export { DcaOrderFormCreate }
