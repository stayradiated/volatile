import React, { useState, useCallback } from 'react'
import ReactDOM from 'react-dom'
import { Layout, Row, Col } from 'antd'

import { TradeList } from '../components/trade-list/index'
import { SelectAsset } from '../components/select/asset/index'
import { SelectCurrency } from '../components/select/currency/index'

import App from './_app'

const Trades = () => {
  const [primaryCurrency, setPrimaryCurrency] = useState<string | undefined>(
    undefined,
  )
  const [secondaryCurrency, setSecoundaryCurrency] = useState<
    string | undefined
  >(undefined)

  const handleChangePrimaryCurrency = useCallback(
    (option: null | { symbol: string | undefined}) => {
      setPrimaryCurrency(option?.symbol)
    },
    [setPrimaryCurrency],
  )

  const handleChangeSecondaryCurrency = useCallback(
    (option: null | { symbol: string | undefined}) => {
      setSecoundaryCurrency(option?.symbol)
    },
    [setSecoundaryCurrency],
  )

  return (
    <App>
      <Layout>
        <Layout.Content>
          <Row>
            <Col span={6} offset={6}>
              <h1>Trades</h1>
            </Col>
            <Col span={3}>
              <SelectAsset
                onChange={handleChangePrimaryCurrency}
                defaultValue={
                  primaryCurrency ? { symbol: primaryCurrency } : undefined
                }
              />
            </Col>
            <Col span={3}>
              <SelectCurrency
                onChange={handleChangeSecondaryCurrency}
                defaultValue={
                  secondaryCurrency ? { symbol: secondaryCurrency } : undefined
                }
              />
            </Col>
          </Row>
          <Row>
            <Col span={24} offset={0}>
              {
                <TradeList
                  primaryCurrency={primaryCurrency}
                  secondaryCurrency={secondaryCurrency}
                />
              }
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    </App>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Trades />
  </React.StrictMode>,
  document.querySelector('#root'),
)
