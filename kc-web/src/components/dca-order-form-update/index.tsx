import { useState, useCallback, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
import Select from 'react-select'
import { parseISO } from 'date-fns'
import { Form, InputNumber, DatePicker } from 'antd'
import moment, { Moment } from 'moment'

import { SelectAsset } from '../select/asset/index'

import {
  GetUpdateDcaOrderFormQuery,
  GetUpdateDcaOrderFormQueryVariables,
} from '../../utils/graphql'

const QUERY_DCA_ORDER_FORM = gql`
  query getUpdateDCAOrderForm($dcaOrderUID: uuid!) {
    kc_market {
      uid
      name
    }
    kc_user_exchange_keys {
      uid
      description
    }
    kc_dca_order_by_pk(uid: $dcaOrderUID) {
      uid
      user_exchange_keys_uid
      market_uid
      start_at
      market_offset
      daily_average
      primary_currency
      secondary_currency
      min_value
      max_value
    }
  }
`
type UserExchangeKeysOption = {
  uid: string
  description: string
}

type MarketOptions = {
  uid: string
  name: string
}

type Props = {
  dcaOrderUID: string
}

const UpdateDCAOrderForm = (props: Props) => {
  const { dcaOrderUID } = props

  const { data, loading, error } = useQuery<
    GetUpdateDcaOrderFormQuery,
    GetUpdateDcaOrderFormQueryVariables
  >(QUERY_DCA_ORDER_FORM, {
    variables: {
      dcaOrderUID,
    },
  })

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault()
    console.log('handle submit')
  }, [])

  const marketOptions = (data?.kc_market ?? []) as MarketOptions[]
  const userExchangeKeysOptions = (data?.kc_user_exchange_keys ??
    []) as UserExchangeKeysOption[]

  const [userExchangeKeyOption, setUserExchangeKeyOption] =
    useState<UserExchangeKeysOption|null>(null)
  const [marketOption, setMarketOption] = useState<MarketOptions|null>(null)
  const [startAt, setStartAt] = useState<Moment|null>(moment())
  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(0)
  const [marketOffset, setMarketOffset] = useState<number>(0)
  const [dailyAverage, setDailyAverage] = useState<number>(0)

  const order = data?.kc_dca_order_by_pk

  useEffect(() => {
    setUserExchangeKeyOption(
      userExchangeKeysOptions.find((item) => {
        return item.uid === order?.user_exchange_keys_uid
      }) ?? null
    )
    setMarketOption(
      marketOptions.find((item) => {
        return item.uid === order?.market_uid
      }) ?? null
    )
    setStartAt(order ? moment(parseISO(order.start_at)) : moment())
    setMinValue(order?.min_value ?? 0)
    setMaxValue(order?.max_value ?? 0)
    setDailyAverage(order?.daily_average ?? 0)
    setMarketOffset(order?.market_offset ?? 0)
  }, [order])

  console.log({
    marketOption,
    startAt,
    minValue,
    maxValue,
    marketOffset,
    dailyAverage,
  })

  if (loading) {
    return <p>loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <Form
      onFinish={handleSubmit}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item label="Exchange">
        <Select<UserExchangeKeysOption>
          value={userExchangeKeyOption}
          placeholder="Exchange Keys"
          options={userExchangeKeysOptions}
          getOptionLabel={(option) => option.description}
          getOptionValue={(option) => option.uid}
          onChange={setUserExchangeKeyOption}
        />
      </Form.Item>
      <Form.Item label="Market">
        <Select<MarketOptions>
          value={marketOption}
          placeholder="Market"
          options={marketOptions}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.uid}
          onChange={setMarketOption}
        />
      </Form.Item>
      <Form.Item label="Asset">
        <SelectAsset value={{ symbol: order?.primary_currency }} />
      </Form.Item>
      <Form.Item label="Start Date">
        <DatePicker value={startAt} onChange={setStartAt} />
      </Form.Item>
      <Form.Item label="Market Offset">
        <InputNumber
          step="0.01"
          value={marketOffset}
          onChange={setMarketOffset}
          addonAfter="%"
        />
      </Form.Item>
      <Form.Item label="Daily Average">
        <InputNumber
          step="0.01"
          value={dailyAverage}
          onChange={setDailyAverage}
          addonBefore="$"
          addonAfter={order?.secondary_currency}
        />
      </Form.Item>
      <Form.Item label="Min Value">
        <InputNumber
          step="0.01"
          min={0}
          value={minValue}
          onChange={setMinValue}
          addonBefore="$"
          addonAfter={order?.secondary_currency}
        />
      </Form.Item>
      <Form.Item label="Max Value">
        <InputNumber
          step="0.01"
          min={0}
          value={maxValue}
          onChange={setMaxValue}
          addonBefore="$"
          addonAfter={order?.secondary_currency}
        />
      </Form.Item>
    </Form>
  )
}

export { UpdateDCAOrderForm }
