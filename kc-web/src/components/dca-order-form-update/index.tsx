import { useState, useCallback, useEffect } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import Select, { SelectInstance, OptionBase } from 'react-select'
import { parseISO, format } from 'date-fns'
import { Form, InputNumber, DatePicker } from 'antd';
import moment, { Moment } from 'moment'

import { SelectAsset, SelectAssetInstance } from '../select/asset/index'

import {
  GetUpdateDcaOrderFormQuery,
  GetUpdateDcaOrderFormQueryVariables,
  UpdateDcaOrderMutation,
  UpdateDcaOrderMutationVariables,
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
const MUTATION_CREATE_DCA_ORDER = gql`
  mutation createDCAOrder(
    $userExchangeKeysUID: uuid!
    $marketUID: uuid!
    $startAt: timestamp!
    $marketOffset: Float!
    $dailyAverage: Float!
    $primaryCurrency: String!
    $secondaryCurrency: String!
  ) {
    create_dca_order(
      user_exchange_keys_uid: $userExchangeKeysUID
      market_uid: $marketUID
      start_at: $startAt
      market_offset: $marketOffset
      daily_average: $dailyAverage
      primary_currency: $primaryCurrency
      secondary_currency: $secondaryCurrency
    ) {
      dca_order_uid
    }
  }
`

type UserExchangeKeysOption = OptionBase &
  GetUpdateDcaOrderFormQuery['kc_user_exchange_keys'][0]

type MarketOptions = OptionBase & GetUpdateDcaOrderFormQuery['kc_market'][0]

type Props = {
  dcaOrderUID: string,
}

const UpdateDCAOrderForm = (props: Props) => {
  const { dcaOrderUID } = props

  const { data, loading, error } = useQuery<
    GetUpdateDcaOrderFormQuery,
    GetUpdateDcaOrderFormQueryVariables
  >(QUERY_DCA_ORDER_FORM, {
    variables: {
      dcaOrderUID,
    }
  })

  // const userExchangeKeysRef =
  //   useRef<SelectInstance<UserExchangeKeysOption>>(null)
  // const marketRef = useRef<SelectInstance<MarketOptions>>(null)
  // const symbolRef = useRef<SelectAssetInstance>(null)
  // const startAtRef = useRef<HTMLInputElement>(null)
  // const marketOffsetRef = useRef<HTMLInputElement>(null)
  // const dailyAverageRef = useRef<HTMLInputElement>(null)
  // const minPriceRef = useRef<HTMLInputElement>(null)
  // const maxPriceRef = useRef<HTMLInputElement>(null)
  // const minAmountRef = useRef<HTMLInputElement>(null)
  // const maxAmountRef = useRef<HTMLInputElement>(null)
  //

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault()
    console.log('handle submit')
  }, [])

  //
  //   const mapInputRefToFloat = (ref: RefObject<HTMLInputElement>) => {
  //     if (ref === null) {
  //       return undefined
  //     }
  //
  //     const value = ref.current?.value.trim() ?? ''
  //     if (value.length > 0) {
  //       return Number.parseFloat(value)
  //     }
  //
  //     return undefined
  //   }
  //
  //   const userExchangeKeysUID = userExchangeKeysRef?.current?.getValue()[0].uid
  //   const marketUID = marketRef?.current?.getValue()[0].uid
  //   const symbol = symbolRef?.current?.getValue()[0].symbol
  //   const startAt = startAtRef?.current?.value
  //   const marketOffset = mapInputRefToFloat(marketOffsetRef)
  //   const dailyAverage = mapInputRefToFloat(dailyAverageRef)
  //   const minPrice = mapInputRefToFloat(minPriceRef)
  //   const maxPrice = mapInputRefToFloat(maxPriceRef)
  //   const minAmount = mapInputRefToFloat(minAmountRef)
  //   const maxAmount = mapInputRefToFloat(maxAmountRef)
  //
  //   if (typeof userExchangeKeysUID !== 'string') {
  //     throw new TypeError('No userExchangeKeysUID selected')
  //   }
  //
  //   if (typeof marketUID !== 'string') {
  //     throw new TypeError('No marketUID selected')
  //   }
  //
  //   if (typeof symbol !== 'string') {
  //     throw new TypeError('No marketUID selected')
  //   }
  //
  //   if (typeof startAt !== 'string') {
  //     throw new TypeError('No startAt selected')
  //   }
  //
  //   if (typeof marketOffset !== 'number') {
  //     throw new TypeError('No marketOffset selected')
  //   }
  //
  //   if (typeof dailyAverage !== 'number') {
  //     throw new TypeError('No dailyAverage selected')
  //   }
  //
  //   console.log({
  //     userExchangeKeysUID,
  //     marketUID,
  //     symbol,
  //     startAt,
  //     marketOffset,
  //     dailyAverage,
  //     minPrice,
  //     maxPrice,
  //     minAmount,
  //     maxAmount,
  //   })
  //
  //   createDCAOrder({
  //     variables: {
  //       userExchangeKeysUID,
  //       marketUID,
  //       primaryCurrency: symbol,
  //       secondaryCurrency: 'NZD',
  //       startAt,
  //       marketOffset,
  //       dailyAverage,
  //     },
  //   })
  // }, [])

  const marketOptions = (data?.kc_market ?? []) as MarketOptions[]
  const userExchangeKeysOptions = (data?.kc_user_exchange_keys ??
    []) as UserExchangeKeysOption[]

  const [userExchangeKeyOption, setUserExchangeKeyOption] = useState<UserExchangeKeysOption>(null)
  const [marketOption, setMarketOption] = useState<MarketOptions>(null)
  const [startAt, setStartAt] = useState<Moment>(moment())
  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(0)
  const [marketOffset, setMarketOffset] = useState<number>(0)
  const [dailyAverage, setDailyAverage] = useState<number>(0)

  const order = data?.kc_dca_order_by_pk

  useEffect(() => {
    setUserExchangeKeyOption(
      userExchangeKeysOptions.find((item) => {
        return item.uid === order?.user_exchange_keys_uid
      })
    )
    setMarketOption(
      marketOptions.find((item) => {
        return item.uid === order?.market_uid
      })
    )
    setStartAt(order ? moment(parseISO(order.start_at)) : moment())
    setMinValue(order?.min_value ?? 0)
    setMaxValue(order?.max_value ?? 0)
    setDailyAverage(order?.daily_average ?? 0)
    setMarketOffset(order?.market_offset ?? 0)
  }, [order])

  console.log({marketOption, startAt, minValue, maxValue, marketOffset, dailyAverage})

  if (loading) {
    return <p>loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <Form onFinish={handleSubmit} labelCol={{span: 8 }} wrapperCol={{span:16}}>
      <Form.Item label='Exchange'>
        <Select<UserExchangeKeysOption>
          value={userExchangeKeyOption}
          placeholder="Exchange Keys"
          options={userExchangeKeysOptions}
          getOptionLabel={(option) => option.description}
          getOptionValue={(option) => option.uid}
          onChange={setUserExchangeKeyOption}
        />
      </Form.Item>
      <Form.Item label='Market'>
        <Select<MarketOptions>
          value={marketOption}
          placeholder="Market"
          options={marketOptions}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.uid}
          onChange={setMarketOption}
        />
      </Form.Item>
      <Form.Item label='Asset'>
        <SelectAsset value={{symbol: order.primary_currency}} />
      </Form.Item>
      <Form.Item label='Start Date'>
        <DatePicker value={startAt} onChange={setStartAt} />
      </Form.Item>
      <Form.Item label='Market Offset'>
        <InputNumber
          step="0.01"
          value={marketOffset}
          onChange={setMarketOffset}
          addonAfter='%'
        />
      </Form.Item>
      <Form.Item label='Daily Average'>
        <InputNumber
          step="0.01"
          value={dailyAverage}
          onChange={setDailyAverage}
          addonBefore='$'
          addonAfter={order?.secondary_currency}
        />
      </Form.Item>
      <Form.Item label='Min Value'>
        <InputNumber
          step='0.01'
          min={0}
          value={minValue}
          onChange={setMinValue}
          addonBefore='$'
          addonAfter={order?.secondary_currency}
        />
      </Form.Item>
      <Form.Item label='Max Value'>
        <InputNumber
          step='0.01'
          min={0}
          value={maxValue}
          onChange={setMaxValue}
          addonBefore='$'
          addonAfter={order?.secondary_currency}
        />
      </Form.Item>
    </Form>
  )
}

export { UpdateDCAOrderForm }
