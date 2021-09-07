import { Layout, Row, Col } from 'antd'
import { useState, useCallback } from 'react'

import { TradeList } from '../components/trade-list/index'
import { SelectAsset } from '../components/select/asset/index'

const Trades = () => {
  const [primaryCurrency, setPrimaryCurrency] = useState<string | undefined>(
    'BTC',
  )

  const handleChange = useCallback(
    (option: null | { symbol: string }) => {
      setPrimaryCurrency(option?.symbol)
    },
    [setPrimaryCurrency],
  )

  return (
    <Layout>
      <Layout.Content>
        <Row>
          <Col span={6} offset={6}>
            <h1>Trades</h1>
          </Col>
          <Col span={6}>
            <SelectAsset
              onChange={handleChange}
              defaultValue={
                primaryCurrency ? { symbol: primaryCurrency } : undefined
              }
            />
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            {primaryCurrency && <TradeList primaryCurrency={primaryCurrency} />}
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  )
}

export default Trades
