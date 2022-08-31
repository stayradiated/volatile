import { Link } from '@remix-run/react'
import Select from 'react-select'

import { Form, Input, DateInput, PrimaryButton } from '../retro-ui/index'

import type { GetDcaOrderFormEditQuery } from '~/graphql/generated'

type UserExchangeKeys = GetDcaOrderFormEditQuery['userExchangeKeys'][number]
type Market = GetDcaOrderFormEditQuery['market'][number]

type Props = {
  query: GetDcaOrderFormEditQuery
}

const DcaOrderFormEdit = (props: Props) => {
  const { query } = props

  const dcaOrder = query.dcaOrderByPk

  const marketOptions = (query.market ?? []).filter((item) =>
    item.marketPrices.some(
      (price) =>
        price.assetSymbol === dcaOrder?.primaryCurrency.symbol &&
        price.currency === dcaOrder?.secondaryCurrency.symbol,
    ),
  )

  const userExchangeKeysOptions = (query.userExchangeKeys ?? []).filter(
    (item) => item.exchangeUid === dcaOrder?.exchange.uid,
  )
  return (
    <>
      <h2>~ Edit Dca Order</h2>
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
            value={`${dcaOrder?.primaryCurrency.symbol} | ${dcaOrder?.primaryCurrency.name}`}
          />
        </Form.Item>
        <Form.Item label="Currency">
          <Input
            disabled
            value={`${dcaOrder?.secondaryCurrency.symbol} | ${dcaOrder?.secondaryCurrency.name}`}
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
          <Link to="/dca-orders">Cancel</Link>
          <PrimaryButton type="submit">Save</PrimaryButton>
        </Form.Item>
      </Form>
    </>
  )
}

export { DcaOrderFormEdit }
