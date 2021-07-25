import { useRef, useCallback, RefObject } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import Select, { SelectInstance, OptionBase } from 'react-select'

const QUERY_DCA_ORDER_FORM = gql`
query query_dca_order_form {
  kc_market {
    uid
    name
  }
  kc_user_exchange_keys {
    uid
    description
  }
}`

type QueryDCAOrderFormData = {
  kc_market: {
    uid: string,
    name: string,
  }
  kc_user_exchange_keys: {
    uid: string,
    description: string,
  }
}

const MUTATION_CREATE_DCA_ORDER = gql`
mutation create_dca_order(
  $userExchangeKeysUID: uuid!,
  $marketUID: uuid!,
  $startAt: timestamp!,
  $marketOffset: Float!,
  $dailyAverage: Float!,
){
  create_dca_order(
    user_exchange_keys_uid: $userExchangeKeysUID,
    market_uid: $marketUID,
    start_at: $startAt,
    market_offset: $marketOffset,
    daily_average: $dailyAverage,
  ) {
    dca_order_uid
  }
}
`

type UserExchangeKeysOptions = OptionBase & QueryDCAOrderFormData['kc_user_exchange_keys']
type MarketOptions = OptionBase & QueryDCAOrderFormData['kc_market']

const DCAOrderForm = () => {
  const [createDCAOrder] = useMutation(MUTATION_CREATE_DCA_ORDER)
  const { data, loading, error } = useQuery<QueryDCAOrderFormData>(QUERY_DCA_ORDER_FORM);

  const userExchangeKeysRef = useRef<SelectInstance<UserExchangeKeysOptions>>(null)
  const marketRef = useRef<SelectInstance<MarketOptions>>(null)
  const startAtRef = useRef<HTMLInputElement>(null)
  const marketOffsetRef = useRef<HTMLInputElement>(null)
  const dailyAverageRef = useRef<HTMLInputElement>(null)
  const minPriceRef = useRef<HTMLInputElement>(null)
  const maxPriceRef = useRef<HTMLInputElement>(null)
  const minAmountRef = useRef<HTMLInputElement>(null)
  const maxAmountRef = useRef<HTMLInputElement>(null)

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault()
    console.log('handle submit')

    const mapInputRefToFloat = (ref: RefObject<HTMLInputElement>) => {
      if (ref === null) {
        return undefined
      }
      const value = ref.current?.value.trim() ?? ''
      if (value.length > 0) {
        return Number.parseFloat(value)
      }
      return undefined
    }

    const userExchangeKeysUID = userExchangeKeysRef?.current?.getValue()[0].uid
    const marketUID = marketRef?.current?.getValue()[0].uid
    const startAt = startAtRef?.current?.value
    const marketOffset = mapInputRefToFloat(marketOffsetRef)
    const dailyAverage = mapInputRefToFloat(dailyAverageRef)
    const minPrice = mapInputRefToFloat(minPriceRef)
    const maxPrice = mapInputRefToFloat(maxPriceRef)
    const minAmount = mapInputRefToFloat(minAmountRef)
    const maxAmount = mapInputRefToFloat(maxAmountRef)

    console.log({
      userExchangeKeysUID,
      marketUID,
      startAt,
      marketOffset,
      dailyAverage,
      minPrice,
      maxPrice,
      minAmount,
      maxAmount,
    })

    createDCAOrder({
      variables: {
        userExchangeKeysUID,
        marketUID,
        startAt,
        marketOffset,
        dailyAverage,
      }
    })
  }, [])

  if (loading) {
    return <p>loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  const marketOptions = (data?.kc_market ?? []) as MarketOptions[]
  const userExchangeKeysOptions = (data?.kc_user_exchange_keys ?? []) as UserExchangeKeysOptions[]

  return (
    <div>
      <h4>Add User Exchange Key</h4>
      <form onSubmit={handleSubmit}>
        <Select<UserExchangeKeysOptions>
          ref={userExchangeKeysRef}
          placeholder="Exchange Keys"
          options={userExchangeKeysOptions}
          getOptionLabel={(option) => option.description}
          getOptionValue={(option) => option.uid}
        />
        <Select<MarketOptions>
          ref={marketRef}
          placeholder="Market"
          options={marketOptions}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.uid}
        />
        <input ref={startAtRef} required type="datetime-local" placeholder="Start At" defaultValue={new Date().toISOString()} />
        <input ref={marketOffsetRef} required type="number" placeholder="Market Offset" step="0.01"/>
        <input ref={dailyAverageRef} required type="number" placeholder="Daily Average" step="0.01" />
        <input ref={minPriceRef} type="number" placeholder="Min Amount" step="0.01" min="0" />
        <input ref={maxPriceRef} type="number" placeholder="Max Amount" step="0.01" min="0"  />
        <input ref={minAmountRef} type="number" placeholder="Min Price" step="0.01" min="0" />
        <input ref={maxAmountRef} type="number" placeholder="Max Price" step="0.01" min="0" />
        <input type="submit" value="Create DCA Order" />
      </form>
    </div>
  )
}

export { DCAOrderForm }
