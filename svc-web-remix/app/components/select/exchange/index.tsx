import { forwardRef } from 'react'
import Select, {
  Props as SelectProps,
  SelectInstance,
  OnChangeValue,
} from 'react-select'

// TODO: fetch this data from the server
const EXCHANGE_OPTIONS = [
  { name: '--', uid: undefined },
  { name: 'Dasset', uid: '5552e39d-2151-4e4c-9bb1-f755002caee6' },
  { name: 'Independent Reserve', uid: '97080e02-eb9b-43bf-a6a2-f037d4e305d1' },
  { name: 'Kiwi-Coin', uid: 'ffcfd3a2-7cf8-47aa-8228-48cce34395d2' },
]

type ExchangeOptions = { name: string; uid: undefined | string }
type SelectExchangeInstance = SelectInstance<ExchangeOptions>
type SelectExchangeOption = OnChangeValue<ExchangeOptions, false>

type Props = SelectProps<ExchangeOptions, false, any>

const SelectExchange = forwardRef<SelectExchangeInstance, Props>(
  (props, ref) => (
    <Select<ExchangeOptions>
      {...props}
      ref={ref}
      placeholder="Exchange"
      options={EXCHANGE_OPTIONS}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.uid ?? ''}
    />
  ),
)

export { SelectExchange }
export type { SelectExchangeInstance, SelectExchangeOption }
