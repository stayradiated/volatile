import { parseISO } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'

import styled from 'styled-components'
import { formatCurrency } from '~/components/format'
import type { GetTradeListQuery } from '~/graphql/generated'

type Trade = GetTradeListQuery['trade'][number]

type TradeListItemProps = {
  trade: Trade
  timeZone: string
}

const Item = styled.li`
  list-style-type: none;
  display: flex;
  line-height: 30px;
  justify-content: space-between;
  margin-bottom: 5px;
`

const TradeListItem = (props: TradeListItemProps) => {
  const { trade, timeZone } = props

  const timestamp = parseISO(trade.timestamp)
  const date = formatInTimeZone(timestamp, timeZone, 'HH:mm')

  return (
    <Item>
      <span>
        {date}{' '}
        <strong>
          {trade.primaryCurrency} @ {formatCurrency(trade.price, 0)}
        </strong>
      </span>
      <span>
        {trade.secondaryCurrency} <strong>{formatCurrency(trade.value)}</strong>
      </span>
    </Item>
  )
}

export { TradeListItem }
