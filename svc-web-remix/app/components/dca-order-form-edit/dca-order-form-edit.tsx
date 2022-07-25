import Select from 'react-select'

import {
  Form,
  Input,
  DateInput,
  LinkButton,
  PrimaryButton,
} from '../retro-ui/index'

import type { GetDcaOrderFormEditQuery } from '~/graphql/generated'

type UserExchangeKeys = GetDcaOrderFormEditQuery['kc_user_exchange_keys'][0]
type Market = GetDcaOrderFormEditQuery['kc_market'][0]

type Props = {
  query: GetDcaOrderFormEditQuery
}

const DCAOrderFormEdit = (props: Props) => {
  const { query } = props

  const dcaOrder = query.kc_dca_order_by_pk

  const marketOptions = (query.kc_market ?? []).filter((item) => {
    return item.market_prices.some((price) => {
      return (
        price.asset_symbol === dcaOrder?.primary_currency.symbol &&
        price.currency === dcaOrder?.secondary_currency.symbol
      )
    })
  })

  const userExchangeKeysOptions = (query.kc_user_exchange_keys ?? []).filter(
    (item) => item.exchange_uid === dcaOrder?.exchange.uid,
  )
  return (
    <>
      <h2>~ Edit DCA Order</h2>
      <Form name="dcaOrderFormEdit">
        <Form.Item label="Exchange">
          <Input disabled value={dcaOrder?.exchange.name ?? ''} />
        </Form.Item>
        <Form.Item label="API Keys" name="userExchangeKeys">
          <Select<UserExchangeKeys>
            options={userExchangeKeysOptions}
            getOptionLabel={(option) => option.description}
            getOptionValue={(option) => option.uid}
          />
        </Form.Item>
        <Form.Item label="Asset">
          <Input
            disabled
            value={`${dcaOrder?.primary_currency.symbol} | ${dcaOrder?.primary_currency.name}`}
          />
        </Form.Item>
        <Form.Item label="Currency">
          <Input
            disabled
            value={`${dcaOrder?.secondary_currency.symbol} | ${dcaOrder?.secondary_currency.name}`}
          />
        </Form.Item>
        <Form.Item label="Market" name="market">
          <Select<Market>
            options={marketOptions}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.uid}
          />
        </Form.Item>
        <Form.Item label="Start Date" name="startAt">
          <DateInput />
        </Form.Item>
        <Form.Item label="Market Offset" name="marketOffset">
          <Input type="number" step="0.01" />
        </Form.Item>
        <Form.Item label="Daily Average" name="dailyAverage">
          <Input type="number" step="0.01" />
        </Form.Item>
        <Form.Item label="Interval (minute)" name="intervalMin">
          <Input type="number" step="1" min="1" />
        </Form.Item>
        <Form.Item label="Min Value" name="minValue">
          <Input type="number" step="0.01" min={0} />
        </Form.Item>
        <Form.Item label="Max Value" name="maxValue">
          <Input type="number" step="0.01" min={0} />
        </Form.Item>
        <Form.Item>
          <LinkButton href="/dca-orders">Cancel</LinkButton>
          <PrimaryButton type="submit">Save</PrimaryButton>
        </Form.Item>
      </Form>
    </>
  )
}

export { DCAOrderFormEdit }
