import { Link } from '@remix-run/react'
import Select from 'react-select'

import { Form, PrimaryButton, Input, DateInput } from '../retro-ui'

import { GetDcaOrderFormCreateQuery } from '~/graphql/generated'

type Exchange = GetDcaOrderFormCreateQuery['kc_exchange'][0]
type UserExchangeKeys = GetDcaOrderFormCreateQuery['kc_user_exchange_keys'][0]
type Market = GetDcaOrderFormCreateQuery['kc_market'][0]
type PrimaryCurrency =
  GetDcaOrderFormCreateQuery['kc_exchange'][0]['primary_currencies'][0]
type SecondaryCurrency =
  GetDcaOrderFormCreateQuery['kc_exchange'][0]['secondary_currencies'][0]

type Props = {
  query: GetDcaOrderFormCreateQuery
}

const DCAOrderFormCreate = (props: Props) => {
  const { query } = props

  const state = {
    primaryCurrency: { symbol: 'BTC' },
    secondaryCurrency: { symbol: 'NZD' },
    exchange: {
      uid: undefined,
      primary_currencies: [],
      secondary_currencies: [],
    },
  }

  const exchangeOptions = query.kc_exchange ?? []

  const marketOptions = (query.kc_market ?? []).filter((item) =>
    item.market_prices.some(
      (price) =>
        price.asset_symbol === state.primaryCurrency?.symbol &&
        price.currency === state.secondaryCurrency?.symbol,
    ),
  )

  const userExchangeKeysOptions = (query.kc_user_exchange_keys ?? []).filter(
    (_item) => true, // Item.exchange_uid === state.exchange?.uid
  )

  const primaryCurrencyOptions = query.kc_exchange[0]?.primary_currencies
  const secondaryCurrencyOptions = query.kc_exchange[0]?.secondary_currencies

  return (
    <div>
      <h2>+ Add DCA Order</h2>
      <Form name="dcaOrderFormCreate" method="post" action="/dca-orders/create">
        <Form.Item label="Exchange">
          <Select<Exchange>
            options={exchangeOptions}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.uid}
          />
        </Form.Item>
        <Form.Item name="userExchangeKeysUID" label="Exchange Keys">
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
          name="marketUID"
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
          <PrimaryButton type="submit">Create DCA Order</PrimaryButton>
        </Form.Item>
      </Form>
    </div>
  )
}

export { DCAOrderFormCreate }
