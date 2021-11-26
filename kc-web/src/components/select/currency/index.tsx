import { forwardRef } from 'react'
import Select, {
  Props as SelectProps,
  SelectInstance,
  OptionBase,
} from 'react-select'

const SYMBOL_OPTIONS = [{ symbol: undefined }, { symbol: 'NZD' }, { symbol: 'AUD' }, { symbol: 'USD' }]

type CurrencyOptions = OptionBase & { symbol: string }
type SelectCurrencyInstance = SelectInstance<CurrencyOptions>

type Props = SelectProps<CurrencyOptions, false, any>

const SelectCurrency = forwardRef<SelectCurrencyInstance, Props>((props, ref) => (
  <Select<CurrencyOptions>
    {...props}
    ref={ref}
    placeholder="Symbol"
    options={SYMBOL_OPTIONS}
    getOptionLabel={(option) => option.symbol ?? '--'}
    getOptionValue={(option) => option.symbol}
  />
))

export { SelectCurrency }
export type { SelectCurrencyInstance }
