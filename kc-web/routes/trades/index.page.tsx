import { useState, useCallback } from 'react'
import ReactDOM from 'react-dom'
import { DatePicker } from 'antd'
import type { Moment } from 'moment'

import { Card } from '../../src/components/retro-ui'

import { TradeList } from '../../src/components/trade-list/index'
import { SelectAsset } from '../../src/components/select/asset/index'
import { SelectCurrency } from '../../src/components/select/currency/index'

import App from '../../src/app'

const Trades = () => {
  const [primaryCurrency, setPrimaryCurrency] = useState<string | undefined>(
    undefined,
  )
  const [secondaryCurrency, setSecoundaryCurrency] = useState<
    string | undefined
  >(undefined)

  const [startDate, setStartDate] = useState<Moment | null>(null)
  const [endDate, setEndDate] = useState<Moment | null>(null)

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
      <Card>
        <h1>Trades</h1>

        <SelectAsset
          onChange={handleChangePrimaryCurrency}
          defaultValue={
            primaryCurrency ? { symbol: primaryCurrency } : undefined
          }
        />
        <SelectCurrency
          onChange={handleChangeSecondaryCurrency}
          defaultValue={
            secondaryCurrency ? { symbol: secondaryCurrency } : undefined
          }
        />

        <DatePicker value={startDate} onChange={setStartDate} />
        <DatePicker value={endDate} onChange={setEndDate} />
      </Card>
      <Card width={1000}>
        <TradeList
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
    <Trades />
  </App>,
  document.querySelector('#root'),
)
