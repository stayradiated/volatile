import { parseISO } from 'date-fns'
import { formatToTimeZone } from 'date-fns-timezone'

import styled from 'styled-components'
import { ExchangeLogo } from './exchange-logo'
import { formatCurrency } from '~/components/format'
import { GetTradeListQuery } from '~/graphql/generated'

type Trade = GetTradeListQuery['trade'][0]

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
  const date = formatToTimeZone(timestamp, 'HH:mm', { timeZone })

  return (
    <Item>
      <ExchangeLogo exchangeID={trade.exchange.id} />
      <span>{date}</span>
      <span>{trade.secondary_currency}</span>
      <span>→</span>
      <strong>{trade.primary_currency}</strong>
      <strong>{formatCurrency(trade.value)}</strong>
    </Item>
  )
}

export { TradeListItem }
