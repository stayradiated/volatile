import type * as s from 'zapatos/schema'

import type { Currency } from './types.js'

const mapRowToCurrency = (
  row: s.currency.Selectable | s.currency.JSONSelectable,
): Currency => ({
  name: row.name,
  symbol: row.symbol,
})

export { mapRowToCurrency }
