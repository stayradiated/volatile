import { useState, useCallback } from 'react'
import ReactDOM from 'react-dom'
import { DatePicker } from 'antd'
import type { Moment } from 'moment'

import { useSession } from '../../src/hooks/use-session'

import { Card } from '../../src/components/retro-ui'
import { Navigation } from '../../src/components/navigation'
import { TradeList } from '../../src/components/trade-list/index'
import { SelectAsset } from '../../src/components/select/asset/index'
import { SelectCurrency } from '../../src/components/select/currency/index'
import { SelectExchange } from '../../src/components/select/exchange/index'

import App from '../../src/app'
import { AuthenticatedRoute } from '../../src/authenticated-route'

const Trades = () => {
  const session = useSession()

  const [exchange, setExchange] = useState<string | undefined>(undefined)
  const [primaryCurrency, setPrimaryCurrency] = useState<string | undefined>(
    undefined,
  )
  const [secondaryCurrency, setSecoundaryCurrency] = useState<
    string | undefined
  >(undefined)

  const [startDate, setStartDate] = useState<Moment | null>(null)
  const [endDate, setEndDate] = useState<Moment | null>(null)

  const handleChangeExchange = useCallback(
    (option: null | { uid: string | undefined }) => {
      setExchange(option?.uid)
    },
    [setExchange],
  )

  const handleChangePrimaryCurrency = useCallback(
    (option: null | { symbol: string | undefined }) => {
      setPrimaryCurrency(option?.symbol)
    },
    [setPrimaryCurrency],
  )

  const handleChangeSecondaryCurrency = useCallback(
    (option: null | { symbol: string | undefined }) => {
      setSecoundaryCurrency(option?.symbol)
    },
    [setSecoundaryCurrency],
  )

  return (
    <>
      <Navigation session={session} />
      <Card>
        <h1>Trades</h1>

        <SelectExchange onChange={handleChangeExchange} />
        <SelectAsset onChange={handleChangePrimaryCurrency} />
        <SelectCurrency onChange={handleChangeSecondaryCurrency} />

        <DatePicker value={startDate} onChange={setStartDate} />
        <DatePicker value={endDate} onChange={setEndDate} />
      </Card>
      <Card width={1000}>
        <TradeList
          exchangeUID={exchange}
          startDate={startDate?.toISOString()}
          endDate={endDate?.toISOString()}
          primaryCurrency={primaryCurrency}
          secondaryCurrency={secondaryCurrency}
        />
      </Card>
    </>
  )
}

ReactDOM.render(
  <App>
    <AuthenticatedRoute>
      <Trades />
    </AuthenticatedRoute>
  </App>,
  document.querySelector('#root'),
)
