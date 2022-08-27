import { parseISO } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'

import styled from 'styled-components'
import { ExchangeLogo } from './exchange-logo'
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
      <ExchangeLogo exchangeID={trade.exchange.id} />
      <span>{date}</span>
      <span>{trade.secondaryCurrency}</span>
      <span>→</span>
      <strong>{trade.primaryCurrency}</strong>
      <strong>{formatCurrency(trade.value)}</strong>
    </Item>
  )
}

export { TradeListItem }
