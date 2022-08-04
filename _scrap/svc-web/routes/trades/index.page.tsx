import { useState, useCallback } from 'react'
import ReactDOM from 'react-dom'

import { useSession } from '../../src/hooks/use-session'

import { Card, DateInput } from '../../src/components/retro-ui'
import { Navigation } from '../../src/components/navigation'
import { TradeList } from '../../src/components/trade-list/index'
import {
  SelectAsset,
  SelectAssetOption,
} from '../../src/components/select/asset/index'
import {
  SelectCurrency,
  SelectCurrencyOption,
} from '../../src/components/select/currency/index'
import {
  SelectExchange,
  SelectExchangeOption,
} from '../../src/components/select/exchange/index'

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

  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)

  const handleChangeExchange = useCallback(
    (option: SelectExchangeOption) => {
      setExchange(option?.uid)
    },
    [setExchange],
  )

  const handleChangePrimaryCurrency = useCallback(
    (option: SelectAssetOption) => {
      setPrimaryCurrency(option?.symbol)
    },
    [setPrimaryCurrency],
  )

  const handleChangeSecondaryCurrency = useCallback(
    (option: SelectCurrencyOption) => {
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

        <DateInput value={startDate} onChange={setStartDate} />
        <DateInput value={endDate} onChange={setEndDate} />
      </Card>
      <TradeList
        exchangeUID={exchange}
        startDate={startDate?.toISOString()}
        endDate={endDate?.toISOString()}
        primaryCurrency={primaryCurrency}
        secondaryCurrency={secondaryCurrency}
      />
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
