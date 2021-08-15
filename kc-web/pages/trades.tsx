import { Layout, Row, Col } from 'antd'
import { useState, useCallback } from 'react'

import { TradeList } from '../components/trade-list/index'
import { SelectAsset } from '../components/select/asset/index'

const Trades = () => {
  const [assetSymbol, setAssetSymbol] = useState<string | undefined>('BTC')

  const handleChange = useCallback(
    (option: null | { symbol: string }) => {
      setAssetSymbol(option?.symbol)
    },
    [setAssetSymbol],
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
              defaultValue={assetSymbol ? { symbol: assetSymbol } : undefined}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            {assetSymbol && <TradeList symbol={assetSymbol} />}
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  )
}

export default Trades
