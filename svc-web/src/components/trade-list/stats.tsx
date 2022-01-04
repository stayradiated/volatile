import { differenceInDays } from 'date-fns'

import { formatCurrency } from '../../utils/format'

type Props = {
  sumValue: number
  sumVolume: number
  sumFee: number
  minTimestamp: Date
  maxTimestamp: Date
}

const TradeStats = (props: Props) => {
  const { sumVolume, sumValue, sumFee, minTimestamp, maxTimestamp } = props

  const dayCount = differenceInDays(maxTimestamp, minTimestamp)

  return (
    <dl>
      <dt>Sum Value</dt>
      <dd>{formatCurrency(sumValue)}</dd>

      <dt>Sum Volume</dt>
      <dd>{sumVolume}</dd>

      <dt>Sum Fee</dt>
      <dd>
        {formatCurrency(sumFee)} ({((sumFee / sumValue) * 100).toFixed(2)}%)
      </dd>

      <dt>Avg Price</dt>
      <dd>{formatCurrency(sumValue / sumVolume)}</dd>

      <dt>Days</dt>
      <dd>{dayCount}</dd>

      <dt>Avg Value</dt>
      <dd>{formatCurrency(sumValue / dayCount)}</dd>
    </dl>
  )
}

export { TradeStats }
