import { forwardRef } from 'react'
import type {
  Props as SelectProps,
  SelectInstance,
  OnChangeValue,
} from 'react-select'
import Select from 'react-select'

// TODO: we should track which symbols are available on which exchanges
const SYMBOL_OPTIONS = [
  { symbol: undefined },
  { symbol: 'BTC' },
  { symbol: 'ETH' },
]

type AssetOptions = { symbol: string | undefined }
type SelectAssetInstance = SelectInstance<AssetOptions>
type SelectAssetOption = OnChangeValue<AssetOptions, false>

type Props = SelectProps<AssetOptions, false, any>

const SelectAsset = forwardRef<SelectAssetInstance, Props>((props, ref) => (
  <Select<AssetOptions>
    {...props}
    ref={ref}
    placeholder="Symbol"
    options={SYMBOL_OPTIONS}
    getOptionLabel={(option) => option.symbol ?? '--'}
    getOptionValue={(option) => option.symbol ?? '--'}
  />
))

export { SelectAsset }
export type { SelectAssetInstance, SelectAssetOption }
