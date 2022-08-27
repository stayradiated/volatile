import { forwardRef } from 'react'
import type {
  Props as SelectProps,
  SelectInstance,
  OnChangeValue,
} from 'react-select'
import Select from 'react-select'

const SYMBOL_OPTIONS = [
  { symbol: undefined },
  { symbol: 'NZD' },
  { symbol: 'AUD' },
  { symbol: 'USD' },
]

type CurrencyOptions = { symbol: string | undefined }
type SelectCurrencyInstance = SelectInstance<CurrencyOptions>
type SelectCurrencyOption = OnChangeValue<CurrencyOptions, false>

type Props = SelectProps<CurrencyOptions, false, any>

const SelectCurrency = forwardRef<SelectCurrencyInstance, Props>(
  (props, ref) => (
    <Select<CurrencyOptions>
      {...props}
      ref={ref}
      placeholder="Symbol"
      options={SYMBOL_OPTIONS}
      getOptionLabel={(option) => option.symbol ?? '--'}
      getOptionValue={(option) => option.symbol ?? '--'}
    />
  ),
)

export { SelectCurrency }
export type { SelectCurrencyInstance, SelectCurrencyOption }
