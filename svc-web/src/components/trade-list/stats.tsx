import { Descriptions } from 'antd'
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
    <Descriptions bordered>
      <Descriptions.Item label="Sum Value">
        ${formatCurrency(sumValue)}
      </Descriptions.Item>
      <Descriptions.Item label="Sum Volume">{sumVolume}</Descriptions.Item>
      <Descriptions.Item label="Sum Fee">
        ${formatCurrency(sumFee)} ({((sumFee / sumValue) * 100).toFixed(2)}%)
      </Descriptions.Item>
      <Descriptions.Item label="Avg Price">
        ${formatCurrency(sumValue / sumVolume)}
      </Descriptions.Item>
      <Descriptions.Item label="Days">{dayCount}</Descriptions.Item>
      <Descriptions.Item label="Avg Value">
        ${formatCurrency(sumValue / dayCount)}
      </Descriptions.Item>
    </Descriptions>
  )
}

export { TradeStats }
