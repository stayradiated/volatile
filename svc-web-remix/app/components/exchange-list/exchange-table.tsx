import { useMemo } from 'react'
import styled from 'styled-components'
import { fromPairs } from 'rambda'

import { formatCurrency } from '~/components/format'
import type { GetExchangeListQuery as Query } from '~/graphql/generated'

type UserExchangeKey = Query['userExchangeKeys'][number]
type LatestBalance = NonNullable<UserExchangeKey['balanceLatest']>[number]
type HistoricBalance = NonNullable<UserExchangeKey['balanceHistoric']>[number]

type Row = LatestBalance & {
  historic: HistoricBalance
}

type Props = {
  userExchangeKey: UserExchangeKey
}

const CurrencyRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Card = styled.div``

const ExchangeTable = (props: Props) => {
  const { userExchangeKey } = props

  const rows: Row[] = useMemo(() => {
    if (!userExchangeKey) {
      return []
    }

    const historic = fromPairs(
      userExchangeKey.balanceHistoric!.map((row) => [row.currencySymbol, row]),
    )

    return userExchangeKey.balanceLatest!.map((row) => ({
      ...row,
      historic: historic[row.currencySymbol],
    }))
  }, [userExchangeKey])

  const totalBalanceNZD = rows.reduce(
    (sum, row) => (row.totalBalanceNzd ?? 0) + sum,
    0,
  )
  const totalChange = rows.reduce(
    (sum, row) =>
      (row.totalBalanceNzd ?? 0) - (row.historic?.totalBalanceNzd ?? 0) + sum,
    0,
  )

  return (
    <Card>
      {rows.map((row) => {
        return (
          <CurrencyRow key={row.currencySymbol}>
            <span>{row.currencySymbol}</span>
            <span>{row.availableBalance}</span>
            <span>{row.totalBalance}</span>
            <span>{formatCurrency(row.totalBalanceNzd ?? undefined)}</span>
            <span>
              {formatCurrency(
                (row.totalBalanceNzd ?? 0) -
                  (row.historic?.totalBalanceNzd ?? 0),
              )}
            </span>
          </CurrencyRow>
        )
      })}
      {formatCurrency(totalBalanceNZD)}
      {formatCurrency(totalChange)}
    </Card>
  )
}

export { ExchangeTable }
