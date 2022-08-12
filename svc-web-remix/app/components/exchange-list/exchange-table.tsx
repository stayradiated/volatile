import { useMemo } from 'react'
import styled from 'styled-components'
import { fromPairs } from 'rambda'

import { formatCurrency } from '~/components/format'
import type { GetExchangeListQuery as Query } from '~/graphql/generated'

type UserExchangeKey = Query['user_exchange_keys'][0]
type LatestBalance = NonNullable<UserExchangeKey['balance_latest']>[0]
type HistoricBalance = NonNullable<UserExchangeKey['balance_historic']>[0]

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
      userExchangeKey.balance_historic!.map((row) => [
        row.currency_symbol,
        row,
      ]),
    )

    return userExchangeKey.balance_latest!.map((row) => ({
      ...row,
      historic: historic[row.currency_symbol],
    }))
  }, [userExchangeKey])

  const totalBalanceNZD = rows.reduce(
    (sum, row) => (row.total_balance_nzd ?? 0) + sum,
    0,
  )
  const totalChange = rows.reduce(
    (sum, row) =>
      (row.total_balance_nzd ?? 0) -
      (row.historic?.total_balance_nzd ?? 0) +
      sum,
    0,
  )

  return (
    <Card>
      {rows.map((row) => {
        return (
          <CurrencyRow key={row.currency_symbol}>
            <span>{row.currency_symbol}</span>
            <span>{row.available_balance}</span>
            <span>{row.total_balance}</span>
            <span>{formatCurrency(row.total_balance_nzd ?? undefined)}</span>
            <span>
              {formatCurrency(
                (row.total_balance_nzd ?? 0) -
                  (row.historic?.total_balance_nzd ?? 0),
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
