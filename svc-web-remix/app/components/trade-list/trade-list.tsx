import styled from 'styled-components'
import { toPairs, groupBy } from 'rambda'
import { parseISO } from 'date-fns'
import { formatToTimeZone } from 'date-fns-timezone'

import { TradeListItem } from './trade-list-item'
import { GetTradeListQuery } from '~/graphql/generated'
import { formatRelativeDate } from '~/components/date'

const List = styled.ul`
  margin: 0;
  padding: 0;
`

const StickyHeading = styled.h3`
  position: sticky;
  top: 0;
  background: var(--white-100);
`

type TradeListProps = {
  query: GetTradeListQuery
}

const TradeList = (props: TradeListProps) => {
  const { query } = props

  const timeZone = query.user[0].timezone

  const tradesGrouped = toPairs(
    groupBy((trade) => {
      const timestamp = parseISO(trade.timestamp)
      const date = formatToTimeZone(timestamp, 'YYYY-MM-DD', { timeZone })
      return date
    }, query.trade),
  )

  const now = new Date()

  return (
    <List>
      {tradesGrouped.map(([dateString, group]) => {
        const title = formatRelativeDate(parseISO(dateString), now)
        return (
          <>
            <StickyHeading key={dateString}>{title}</StickyHeading>
            {group.map((trade) => (
              <TradeListItem
                key={trade.uid}
                trade={trade}
                timeZone={timeZone}
              />
            ))}
          </>
        )
      })}
    </List>
  )
}

export { TradeList }
